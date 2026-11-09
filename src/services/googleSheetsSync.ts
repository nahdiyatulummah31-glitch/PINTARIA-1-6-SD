import { authService } from './authService';
import { getCachedAccessToken } from './googleAuth';
import { User, UserAccess, LoginLog } from '../types/auth';

export interface SheetsSyncResult {
  success: boolean;
  spreadsheetId?: string;
  spreadsheetUrl?: string;
  message: string;
}

const SPREADSHEET_TITLE = 'Pintaria_Auth_Database';

/**
 * Service to manage direct, automatic synchronization with Google Sheets & Google Drive
 * using client-side OAuth access tokens (without requiring Apps Script).
 */
class GoogleSheetsSyncService {
  private isSyncing = false;

  /**
   * Creates or retrieves the authoritative spreadsheet in the Admin's Google Drive.
   */
  public async getOrCreateSpreadsheet(token?: string): Promise<{ id: string; url: string }> {
    const accessToken = token || getCachedAccessToken();
    if (!accessToken) {
      throw new Error('Akses token Google tidak tersedia. Pastikan Admin telah masuk dengan Akun Google.');
    }

    const settings = authService.getSettings();
    if (settings.spreadsheet_id) {
      // Verify spreadsheet still exists and is accessible
      try {
        const checkRes = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${settings.spreadsheet_id}?fields=spreadsheetId,properties.title`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        if (checkRes.ok) {
          const data = await checkRes.json();
          const url = `https://docs.google.com/spreadsheets/d/${data.spreadsheetId}/edit`;
          return { id: data.spreadsheetId, url };
        }
      } catch {
        // Fallback to create new spreadsheet if deleted or inaccessible
      }
    }

    // Create a new spreadsheet with the 3 required tabs
    const createRes = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        properties: {
          title: SPREADSHEET_TITLE,
        },
        sheets: [
          { properties: { title: 'USERS', index: 0 } },
          { properties: { title: 'USER_ACCESS', index: 1 } },
          { properties: { title: 'LOGIN_LOG', index: 2 } },
        ],
      }),
    });

    if (!createRes.ok) {
      const errJson = await createRes.json().catch(() => null);
      throw new Error(
        errJson?.error?.message ||
          `Gagal membuat Google Spreadsheet baru (HTTP ${createRes.status}).`
      );
    }

    const newSheet = await createRes.json();
    const newId = newSheet.spreadsheetId;
    const newUrl = `https://docs.google.com/spreadsheets/d/${newId}/edit`;

    // Save to settings
    authService.saveSettings({
      spreadsheet_id: newId,
      spreadsheet_url: newUrl,
    });

    return { id: newId, url: newUrl };
  }

  /**
   * Automatically updates USERS, USER_ACCESS, and LOGIN_LOG data into the Google Sheet.
   */
  public async syncAllData(token?: string): Promise<SheetsSyncResult> {
    if (this.isSyncing) {
      return { success: false, message: 'Sinkronisasi sedang berlangsung...' };
    }

    const accessToken = token || getCachedAccessToken();

    // Support simulated sync for quick local testing without popup
    if (accessToken === 'SIMULATED_TOKEN') {
      const simulatedId = authService.getSettings().spreadsheet_id || '1_simulated_pintaria_sd_' + Date.now().toString(36);
      const simulatedUrl = `https://docs.google.com/spreadsheets/d/${simulatedId}/edit`;
      authService.saveSettings({
        spreadsheet_id: simulatedId,
        spreadsheet_url: simulatedUrl,
      });
      return {
        success: true,
        spreadsheetId: simulatedId,
        spreadsheetUrl: simulatedUrl,
        message: 'Database USERS, USER_ACCESS, dan LOGIN_LOG berhasil disinkronkan ke Google Spreadsheet!',
      };
    }

    if (!accessToken) {
      return {
        success: false,
        message: 'Akses token Google belum aktif. Silakan klik Hubungkan Akun Google Admin di bawah.',
      };
    }

    this.isSyncing = true;
    try {
      // 1. Get or create spreadsheet
      const { id: spreadsheetId, url: spreadsheetUrl } = await this.getOrCreateSpreadsheet(accessToken);

      const users: User[] = authService.getAllUsers();
      const accessGrants: UserAccess[] = authService.getAllAccessGrants();
      const logs: LoginLog[] = authService.getLoginLogs();

      // 2. Prepare USERS data
      const usersHeader = [
        'User ID',
        'Google ID',
        'Email',
        'Nama Lengkap',
        'Username',
        'Role',
        'Status Akun',
        'Terdaftar Pada',
        'Login Terakhir',
        'Status Sesi',
      ];
      const usersRows = users.map((u) => [
        u.user_id,
        u.google_id || '-',
        u.email,
        u.full_name || '-',
        u.username || '-',
        u.role,
        u.status === 'ACTIVE' ? 'AKTIF' : 'DIBLOKIR',
        u.registered_at ? new Date(u.registered_at).toLocaleString('id-ID') : '-',
        u.last_login_at ? new Date(u.last_login_at).toLocaleString('id-ID') : '-',
        u.active_session_id ? 'Online' : 'Offline',
      ]);

      // 3. Prepare USER_ACCESS data
      const accessHeader = [
        'Access ID',
        'User ID',
        'Email Pengguna',
        'Produk ID',
        'Nama Produk / Kelas',
        'Status Akses',
        'Diberikan Pada',
        'Diberikan Oleh',
      ];
      const accessRows = accessGrants.map((a) => [
        a.access_id,
        a.user_id,
        a.email,
        a.product_id,
        a.product_name,
        a.status === 'ACTIVE' ? 'AKTIF' : 'DICABUT',
        a.granted_at ? new Date(a.granted_at).toLocaleString('id-ID') : '-',
        a.granted_by,
      ]);

      // 4. Prepare LOGIN_LOG data
      const logsHeader = [
        'Log ID',
        'User ID',
        'Email',
        'Username',
        'Produk',
        'Metode Login',
        'Waktu Login',
        'Status Login',
      ];
      const logsRows = logs.map((l) => [
        l.log_id,
        l.user_id,
        l.email,
        l.username,
        l.product_id || 'Semua Kelas',
        l.login_method,
        l.login_at ? new Date(l.login_at).toLocaleString('id-ID') : '-',
        l.status,
      ]);

      // 5. Update each sheet via Google Sheets API batchUpdate / values update
      const updateData = [
        {
          range: 'USERS!A1:J' + Math.max(usersRows.length + 1, 100),
          values: [usersHeader, ...usersRows],
        },
        {
          range: 'USER_ACCESS!A1:H' + Math.max(accessRows.length + 1, 100),
          values: [accessHeader, ...accessRows],
        },
        {
          range: 'LOGIN_LOG!A1:H' + Math.max(logsRows.length + 1, 100),
          values: [logsHeader, ...logsRows],
        },
      ];

      // Clear existing content then write fresh data
      for (const item of updateData) {
        // Clear
        const sheetName = item.range.split('!')[0];
        await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(sheetName)}:clear`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
          }
        ).catch(() => {});

        // Put values
        await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(item.range)}?valueInputOption=USER_ENTERED`,
          {
            method: 'PUT',
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              values: item.values,
            }),
          }
        );
      }

      return {
        success: true,
        spreadsheetId,
        spreadsheetUrl,
        message: 'Database berhasil otomatis disinkronkan ke Google Spreadsheet!',
      };
    } catch (err: any) {
      console.error('Google Sheets sync error:', err);
      return {
        success: false,
        message: err.message || 'Gagal menyinkronkan data ke Google Sheets.',
      };
    } finally {
      this.isSyncing = false;
    }
  }
}

export const googleSheetsSync = new GoogleSheetsSyncService();

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Users,
  Shield,
  ShieldAlert,
  ShieldCheck,
  LogOut,
  X,
  Search,
  RefreshCw,
  FileSpreadsheet,
  Activity,
  UserX,
  UserCheck,
  Check,
  AlertCircle,
  Copy,
  ExternalLink,
  Download,
  Settings,
  Clock,
  Key,
  Layers,
  PlusCircle,
  PackageCheck,
  UserPlus,
} from 'lucide-react';
import { authService, ADMIN_EMAILS } from '../../services/authService';
import { googleSheetsSync } from '../../services/googleSheetsSync';
import { User, LoginLog, AuthSettings, UserAccess, ProductId, UserRole } from '../../types/auth';
import { PRODUCTS } from '../../config/products';
import { sounds } from '../../utils/soundEffects';
import {
  signInWithGooglePopup,
  getCachedAccessToken,
  setCachedAccessToken,
} from '../../services/googleAuth';

interface AdminDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUserEmail: string;
}

export const AdminDashboardModal: React.FC<AdminDashboardModalProps> = ({
  isOpen,
  onClose,
  currentUserEmail,
}) => {
  const [activeTab, setActiveTab] = useState<'users' | 'access' | 'logs' | 'settings'>('users');
  const [users, setUsers] = useState<User[]>([]);
  const [accessGrants, setAccessGrants] = useState<UserAccess[]>([]);
  const [logs, setLogs] = useState<LoginLog[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [accessSearchQuery, setAccessSearchQuery] = useState('');
  const [selectedUserDetail, setSelectedUserDetail] = useState<User | null>(null);

  // Create User Modal State
  const [isCreateUserModalOpen, setIsCreateUserModalOpen] = useState(false);
  const [newFullName, setNewFullName] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newProductId, setNewProductId] = useState<ProductId>('KELAS_1');
  const [newRole, setNewRole] = useState<UserRole>('USER');
  const [createUserError, setCreateUserError] = useState<string | null>(null);
  const [isSubmittingUser, setIsSubmittingUser] = useState(false);

  // Grant Access Form State
  const [grantUserId, setGrantUserId] = useState('');
  const [grantProductId, setGrantProductId] = useState<ProductId>('KELAS_1');

  // Google Spreadsheet Settings State
  const [spreadsheetUrl, setSpreadsheetUrl] = useState('');
  const [spreadsheetId, setSpreadsheetId] = useState('');
  const [gasUrl, setGasUrl] = useState('');
  const [isTestingGas, setIsTestingGas] = useState(false);
  const [gasTestResult, setGasTestResult] = useState<{ success: boolean; message: string } | null>(null);
  const [isSyncingSheets, setIsSyncingSheets] = useState(false);
  const [sheetsSyncStatus, setSheetsSyncStatus] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const reloadData = useCallback(async () => {
    await authService.syncFromServer();
    setUsers(authService.getAllUsers());
    setAccessGrants(authService.getAllAccessGrants());
    setLogs(authService.getLoginLogs());
    const settings = authService.getSettings();
    setGasUrl(settings.gas_web_app_url || '');
    setSpreadsheetUrl(settings.spreadsheet_url || (settings.spreadsheet_id ? `https://docs.google.com/spreadsheets/d/${settings.spreadsheet_id}/edit` : ''));
    setSpreadsheetId(settings.spreadsheet_id || '');
  }, []);

  const handleAutoSyncSheets = async () => {
    sounds.playPop();
    setIsSyncingSheets(true);
    setSheetsSyncStatus(null);
    try {
      const res = await googleSheetsSync.syncAllData();
      if (res.success) {
        sounds.playFanfare();
        await reloadData();
        setSheetsSyncStatus({ text: res.message, type: 'success' });
        setActionNotice({ text: res.message, type: 'success' });
      } else {
        sounds.playIncorrect();
        setSheetsSyncStatus({ text: res.message, type: 'error' });
      }
    } catch (err: any) {
      sounds.playIncorrect();
      setSheetsSyncStatus({
        text: err.message || 'Gagal menyinkronkan data ke Google Sheets.',
        type: 'error',
      });
    } finally {
      setIsSyncingSheets(false);
    }
  };

  const handleConnectGoogle = async () => {
    sounds.playPop();
    setIsSyncingSheets(true);
    setSheetsSyncStatus(null);
    try {
      const googleUser = await signInWithGooglePopup();
      if (!googleUser) {
        setIsSyncingSheets(false);
        return;
      }
      const token = getCachedAccessToken();
      const res = await googleSheetsSync.syncAllData(token || undefined);
      if (res.success) {
        sounds.playFanfare();
        await reloadData();
        setSheetsSyncStatus({ text: res.message, type: 'success' });
        setActionNotice({ text: res.message, type: 'success' });
      } else {
        setSheetsSyncStatus({ text: res.message, type: 'error' });
      }
    } catch (err: any) {
      sounds.playIncorrect();
      setSheetsSyncStatus({
        text: err.message || 'Gagal menghubungkan Akun Google Admin.',
        type: 'error',
      });
    } finally {
      setIsSyncingSheets(false);
    }
  };

  const handleSimulatedSync = async () => {
    sounds.playPop();
    setIsSyncingSheets(true);
    setSheetsSyncStatus(null);
    try {
      const res = await googleSheetsSync.syncAllData('SIMULATED_TOKEN');
      if (res.success) {
        sounds.playFanfare();
        await reloadData();
        setSheetsSyncStatus({ text: res.message, type: 'success' });
        setActionNotice({ text: res.message, type: 'success' });
      } else {
        setSheetsSyncStatus({ text: res.message, type: 'error' });
      }
    } catch (err: any) {
      setSheetsSyncStatus({
        text: err.message || 'Gagal sinkronisasi simulasi.',
        type: 'error',
      });
    } finally {
      setIsSyncingSheets(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      reloadData();
      const unsub = authService.subscribe(() => {
        setUsers(authService.getAllUsers());
        setAccessGrants(authService.getAllAccessGrants());
        setLogs(authService.getLoginLogs());
      });
      return unsub;
    }
  }, [isOpen, reloadData]);

  const filteredUsers = useMemo(() => {
    if (!searchQuery.trim()) return users;
    const q = searchQuery.toLowerCase();
    return users.filter(
      (u) =>
        u.full_name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        u.username.toLowerCase().includes(q)
    );
  }, [users, searchQuery]);

  // Notification state
  const [actionNotice, setActionNotice] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const handleToggleBlock = (user: User) => {
    sounds.playPop();
    const targetStatus = user.status === 'ACTIVE' ? 'BLOCKED' : 'ACTIVE';
    const success = authService.toggleBlockUser(user.user_id, targetStatus);
    if (success) {
      reloadData();
      if (selectedUserDetail?.user_id === user.user_id) {
        setSelectedUserDetail({ ...selectedUserDetail, status: targetStatus });
      }
      setActionNotice({
        text: `Status ${user.full_name || user.username} berhasil diubah menjadi ${targetStatus === 'BLOCKED' ? 'DIBLOKIR' : 'AKTIF'}.`,
        type: 'success',
      });
    } else {
      setActionNotice({ text: 'Tidak dapat memblokir akun Super Administrator.', type: 'error' });
    }
  };

  const handleTerminateSession = (user: User) => {
    sounds.playPop();
    const success = authService.terminateUserSession(user.user_id);
    if (success) {
      reloadData();
      if (selectedUserDetail?.user_id === user.user_id) {
        setSelectedUserDetail({ ...selectedUserDetail, active_session_id: undefined });
      }
      setActionNotice({ text: `Sesi aktif untuk ${user.username} berhasil diputus.`, type: 'success' });
    }
  };

  const handleSaveSpreadsheetUrl = () => {
    sounds.playPop();
    const id = authService.extractSpreadsheetId(spreadsheetUrl);
    setSpreadsheetId(id);
    authService.saveSettings({
      spreadsheet_url: spreadsheetUrl.trim(),
      spreadsheet_id: id,
    });
    setActionNotice({
      text: 'Tautan Google Spreadsheet berhasil disimpan!',
      type: 'success',
    });
  };

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      sounds.playFanfare();
      setActionNotice({
        text: `${label} berhasil disalin ke clipboard! Silakan buka Google Spreadsheet Anda lalu tekan Ctrl+V.`,
        type: 'success',
      });
    } catch (err) {
      setActionNotice({
        text: 'Gagal menyalin otomatis. Silakan gunakan tombol Unduh CSV.',
        type: 'error',
      });
    }
  };

  const handleCopyUsersTsv = () => {
    sounds.playPop();
    const tsv = authService.getUsersTsv();
    copyToClipboard(tsv, 'Data Tabel USERS');
  };

  const handleCopyLogsTsv = () => {
    sounds.playPop();
    const tsv = authService.getLogsTsv();
    copyToClipboard(tsv, 'Data Tabel LOGIN_LOG');
  };

  const downloadCsv = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadUsersCsv = () => {
    sounds.playPop();
    const csv = authService.getUsersCsv();
    downloadCsv('Pintaria_USERS.csv', csv);
    setActionNotice({
      text: 'File Pintaria_USERS.csv berhasil diunduh.',
      type: 'success',
    });
  };

  const handleDownloadLogsCsv = () => {
    sounds.playPop();
    const csv = authService.getLogsCsv();
    downloadCsv('Pintaria_LOGIN_LOG.csv', csv);
    setActionNotice({
      text: 'File Pintaria_LOGIN_LOG.csv berhasil diunduh.',
      type: 'success',
    });
  };

  const handleDownloadAccessCsv = () => {
    sounds.playPop();
    const csv = authService.getAccessCsv();
    downloadCsv('Pintaria_USER_ACCESS.csv', csv);
    setActionNotice({
      text: 'File Pintaria_USER_ACCESS.csv berhasil diunduh.',
      type: 'success',
    });
  };

  const handleCopyAccessTsv = () => {
    sounds.playPop();
    const tsv = authService.getAccessTsv();
    navigator.clipboard.writeText(tsv);
    setActionNotice({
      text: 'Tabel USER_ACCESS berhasil disalin! Buka Google Sheets dan tekan Ctrl+V di sel A1.',
      type: 'success',
    });
  };

  const handleGrantAccessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!grantUserId) {
      setActionNotice({ text: 'Pilih pengguna terlebih dahulu.', type: 'error' });
      return;
    }
    sounds.playFanfare();
    authService.grantUserAccess(grantUserId, grantProductId, 'ADMIN');
    reloadData();
    setActionNotice({
      text: `Hak akses ${PRODUCTS[grantProductId]?.name || grantProductId} berhasil diberikan!`,
      type: 'success',
    });
  };

  const handleRevokeAccess = (accessId: string) => {
    sounds.playPop();
    authService.revokeUserAccess(accessId);
    reloadData();
    setActionNotice({
      text: 'Hak akses produk berhasil dicabut.',
      type: 'success',
    });
  };

  const handleAdminCreateUserSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreateUserError(null);
    setIsSubmittingUser(true);
    try {
      const res = await authService.adminCreateUser(
        newFullName,
        newUsername,
        newEmail,
        newPassword,
        newProductId,
        newRole
      );
      if (res.success && res.user) {
        sounds.playFanfare();
        reloadData();
        setIsCreateUserModalOpen(false);
        setNewFullName('');
        setNewUsername('');
        setNewEmail('');
        setNewPassword('');
        setActionNotice({
          text: `Akun baru @${res.user.username} (${res.user.email}) berhasil dibuat dan langsung diberi akses ${PRODUCTS[newProductId]?.name}!`,
          type: 'success',
        });
      } else {
        sounds.playIncorrect();
        setCreateUserError(res.error || 'Gagal membuat akun baru.');
      }
    } catch {
      setCreateUserError('Terjadi kesalahan sistem saat membuat akun.');
    } finally {
      setIsSubmittingUser(false);
    }
  };

  const filteredAccessGrants = useMemo(() => {
    if (!accessSearchQuery.trim()) return accessGrants;
    const q = accessSearchQuery.toLowerCase();
    return accessGrants.filter(
      (a) =>
        a.email.toLowerCase().includes(q) ||
        a.product_id.toLowerCase().includes(q) ||
        a.product_name.toLowerCase().includes(q)
    );
  }, [accessGrants, accessSearchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-2 sm:p-4 animate-fadeIn">
      <div className="w-full max-w-5xl rounded-3xl bg-white shadow-2xl border-2 border-amber-300 flex flex-col max-h-[92vh] overflow-hidden animate-scaleIn">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/20 text-2xl shrink-0 shadow-inner">
              👑
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="font-display text-base sm:text-xl font-black truncate">
                  Admin Dashboard & User Management
                </h2>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/20 border border-white/30">
                  Role: SUPER ADMIN
                </span>
              </div>
              <p className="text-xs text-amber-100 truncate">
                Admin: {currentUserEmail} • Database: Google Spreadsheet ({ADMIN_EMAILS[0]})
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sounds.playPop();
              onClose();
            }}
            className="p-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-4 pt-2 gap-2 shrink-0">
          <button
            onClick={() => {
              sounds.playPop();
              setActiveTab('users');
            }}
            className={`py-2 px-4 text-xs font-black rounded-t-xl transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'users'
                ? 'bg-white text-amber-800 border-t-2 border-x border-slate-200 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Users className="w-4 h-4 text-amber-600" />
            <span>👥 Pantau Pengguna ({users.length})</span>
          </button>

          <button
            onClick={() => {
              sounds.playPop();
              setActiveTab('access');
            }}
            className={`py-2 px-4 text-xs font-black rounded-t-xl transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'access'
                ? 'bg-white text-amber-800 border-t-2 border-x border-slate-200 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Key className="w-4 h-4 text-amber-600" />
            <span>🔑 Hak Akses Produk ({accessGrants.length})</span>
          </button>

          <button
            onClick={() => {
              sounds.playPop();
              setActiveTab('logs');
            }}
            className={`py-2 px-4 text-xs font-black rounded-t-xl transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'logs'
                ? 'bg-white text-amber-800 border-t-2 border-x border-slate-200 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Activity className="w-4 h-4 text-amber-600" />
            <span>Login Log ({logs.length})</span>
          </button>

          <button
            onClick={() => {
              sounds.playPop();
              setActiveTab('settings');
            }}
            className={`py-2 px-4 text-xs font-black rounded-t-xl transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'settings'
                ? 'bg-white text-amber-800 border-t-2 border-x border-slate-200 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4 text-amber-600" />
            <span>📊 Database Google Spreadsheet</span>
          </button>
        </div>

        {/* Action Notice Alert Banner */}
        {actionNotice && (
          <div
            className={`mx-4 sm:mx-6 mt-3 px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-between border animate-fadeIn ${
              actionNotice.type === 'success'
                ? 'bg-emerald-50 text-emerald-900 border-emerald-300'
                : 'bg-rose-50 text-rose-900 border-rose-300'
            }`}
          >
            <div className="flex items-center gap-2">
              {actionNotice.type === 'success' ? (
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              )}
              <span>{actionNotice.text}</span>
            </div>
            <button
              onClick={() => setActionNotice(null)}
              className="text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Tab Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {/* TAB 1: USERS LIST */}
          {activeTab === 'users' && (
            <div className="space-y-4">
              {/* Header Info & Quick Metrics */}
              <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="font-extrabold text-amber-950 flex items-center gap-1.5 text-sm">
                    <span className="text-base">📋</span>
                    <span>Monitoring Pengguna Terdaftar (Pintaria Auth)</span>
                  </div>
                  <p className="text-[11px] text-amber-900/80 mt-0.5">
                    Halaman ini menampilkan seluruh pengguna yang sudah mendaftar dan status keaktifan akun mereka.
                  </p>
                </div>
                <div className="shrink-0 px-2.5 py-1 rounded-xl bg-amber-200/60 text-amber-950 font-black text-[11px]">
                  Total: {users.length} Akun Terdaftar
                </div>
              </div>

              {/* 4 Metric Summary Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="p-3 rounded-2xl bg-amber-50/90 border border-amber-200 shadow-2xs">
                  <div className="text-[11px] font-bold text-amber-800 flex items-center justify-between">
                    <span>Total Register</span>
                    <Users className="w-3.5 h-3.5 text-amber-600" />
                  </div>
                  <div className="text-2xl font-black text-amber-950 mt-1 font-display">
                    {users.length}
                  </div>
                  <div className="text-[10px] text-amber-700 mt-0.5 font-medium">Akun di database</div>
                </div>

                <div className="p-3 rounded-2xl bg-emerald-50/90 border border-emerald-200 shadow-2xs">
                  <div className="text-[11px] font-bold text-emerald-800 flex items-center justify-between">
                    <span>Akun Aktif</span>
                    <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div className="text-2xl font-black text-emerald-950 mt-1 font-display">
                    {users.filter((u) => u.status === 'ACTIVE').length}
                  </div>
                  <div className="text-[10px] text-emerald-700 mt-0.5 font-medium">Bisa login & akses</div>
                </div>

                <div className="p-3 rounded-2xl bg-rose-50/90 border border-rose-200 shadow-2xs">
                  <div className="text-[11px] font-bold text-rose-800 flex items-center justify-between">
                    <span>Diblokir</span>
                    <UserX className="w-3.5 h-3.5 text-rose-600" />
                  </div>
                  <div className="text-2xl font-black text-rose-950 mt-1 font-display">
                    {users.filter((u) => u.status === 'BLOCKED').length}
                  </div>
                  <div className="text-[10px] text-rose-700 mt-0.5 font-medium">Akses dinonaktifkan</div>
                </div>

                <div className="p-3 rounded-2xl bg-sky-50/90 border border-sky-200 shadow-2xs">
                  <div className="text-[11px] font-bold text-sky-800 flex items-center justify-between">
                    <span>Sesi Online</span>
                    <Activity className="w-3.5 h-3.5 text-sky-600" />
                  </div>
                  <div className="text-2xl font-black text-sky-950 mt-1 font-display">
                    {users.filter((u) => Boolean(u.active_session_id)).length}
                  </div>
                  <div className="text-[10px] text-sky-700 mt-0.5 font-medium">Sedang buka aplikasi</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Cari nama, email, atau username..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-300"
                  />
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    onClick={() => {
                      sounds.playPop();
                      setIsCreateUserModalOpen(true);
                      setCreateUserError(null);
                    }}
                    className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors shrink-0"
                    title="Buat akun baru dengan Username dan Password secara langsung"
                  >
                    <UserPlus className="w-4 h-4 text-slate-950" />
                    <span>+ Buat Akun Baru (User & Password)</span>
                  </button>

                  <button
                    onClick={() => {
                      sounds.playPop();
                      reloadData();
                    }}
                    className="px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Muat Ulang</span>
                  </button>
                </div>
              </div>

              {/* Users Table */}
              <div className="rounded-2xl border border-slate-200 overflow-x-auto shadow-2xs">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 border-b border-slate-200 font-extrabold text-slate-700">
                    <tr>
                      <th className="py-2.5 px-3">Pengguna</th>
                      <th className="py-2.5 px-3">Role</th>
                      <th className="py-2.5 px-3">Status</th>
                      <th className="py-2.5 px-3">Produk / Kelas Dimiliki</th>
                      <th className="py-2.5 px-3 hidden md:table-cell">Terdaftar</th>
                      <th className="py-2.5 px-3 hidden sm:table-cell">Login Terakhir</th>
                      <th className="py-2.5 px-3">Sesi Aktif</th>
                      <th className="py-2.5 px-3 text-right">Aksi Admin</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredUsers.map((u) => {
                      const hasActiveSession = Boolean(u.active_session_id);
                      const userGrants = accessGrants.filter(
                        (g) => (g.user_id === u.user_id || g.email.toLowerCase() === u.email.toLowerCase()) && g.status === 'ACTIVE'
                      );
                      const hasBundle = userGrants.some((g) => g.product_id === 'BUNDLE_ALL');

                      return (
                        <tr key={u.user_id} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-2.5 px-3">
                            <div className="font-bold text-slate-900">{u.full_name}</div>
                            <div className="text-[11px] text-slate-500 font-mono">
                              @{u.username} • {u.email}
                            </div>
                          </td>

                          <td className="py-2.5 px-3">
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-black border ${
                                u.role === 'ADMIN'
                                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                                  : 'bg-slate-100 text-slate-700 border-slate-200'
                              }`}
                            >
                              {u.role}
                            </span>
                          </td>

                          <td className="py-2.5 px-3">
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-black border ${
                                u.status === 'ACTIVE'
                                  ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                                  : 'bg-rose-100 text-rose-900 border-rose-300'
                              }`}
                            >
                              {u.status === 'ACTIVE' ? '✓ AKTIF' : '✗ DIBLOKIR'}
                            </span>
                          </td>

                          <td className="py-2.5 px-3">
                            {u.role === 'ADMIN' ? (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-100 text-amber-900 border border-amber-300 inline-flex items-center gap-1">
                                <span>👑 Universal Admin (Semua Kelas)</span>
                              </span>
                            ) : hasBundle ? (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-purple-100 text-purple-900 border border-purple-300 inline-flex items-center gap-1">
                                <span>⭐ Bundling Semua Kelas (1-6)</span>
                              </span>
                            ) : userGrants.length > 0 ? (
                              <div className="flex flex-wrap gap-1 max-w-[200px]">
                                {userGrants.map((g) => (
                                  <span
                                    key={g.access_id}
                                    className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-900 border border-amber-200"
                                  >
                                    {PRODUCTS[g.product_id]?.shortName || g.product_id}
                                  </span>
                                ))}
                              </div>
                            ) : (
                              <span className="text-[10px] text-slate-400 italic">Belum ada akses</span>
                            )}
                          </td>

                          <td className="py-2.5 px-3 hidden md:table-cell text-slate-700 text-[11px]">
                            <div className="font-semibold">
                              {new Date(u.registered_at).toLocaleDateString('id-ID', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                              })}
                            </div>
                            <div className="text-[10px] text-slate-500 font-mono">
                              pukul {new Date(u.registered_at).toLocaleTimeString('id-ID', {
                                hour: '2-digit',
                                minute: '2-digit',
                              })}
                            </div>
                          </td>

                          <td className="py-2.5 px-3 hidden sm:table-cell text-slate-500 text-[11px]">
                            {new Date(u.last_login_at).toLocaleDateString('id-ID', {
                              day: 'numeric',
                              month: 'short',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </td>

                          <td className="py-2.5 px-3">
                            {hasActiveSession ? (
                              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span>Sedang Aktif</span>
                              </span>
                            ) : (
                              <span className="text-[11px] text-slate-400">Offline</span>
                            )}
                          </td>

                          <td className="py-2.5 px-3 text-right">
                            <div className="flex items-center justify-end gap-1.5 flex-wrap">
                              {/* Manage Access Button */}
                              <button
                                onClick={() => {
                                  sounds.playPop();
                                  setGrantUserId(u.user_id);
                                  setActiveTab('access');
                                }}
                                className="px-2 py-1 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-[11px] transition-colors cursor-pointer flex items-center gap-1 shadow-2xs"
                                title="Beri atau kelola hak akses produk/kelas untuk pengguna ini"
                              >
                                <Key className="w-3 h-3 text-amber-700" />
                                <span>Akses</span>
                              </button>

                              {/* View Detail */}
                              <button
                                onClick={() => setSelectedUserDetail(u)}
                                className="px-2 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[11px] transition-colors cursor-pointer"
                                title="Lihat detail lengkap user"
                              >
                                Detail
                              </button>

                              {/* Terminate Session if active */}
                              {hasActiveSession && (
                                <button
                                  onClick={() => handleTerminateSession(u)}
                                  className="px-2 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 font-bold text-[11px] transition-colors cursor-pointer"
                                  title="Putus sesi aktif user ini"
                                >
                                  Putus Sesi
                                </button>
                              )}

                              {/* Block / Unblock Toggle */}
                              <button
                                onClick={() => handleToggleBlock(u)}
                                disabled={authService.isUserAdmin(u.email)}
                                className={`px-2 py-1 rounded-lg font-bold text-[11px] transition-colors cursor-pointer ${
                                  u.status === 'ACTIVE'
                                    ? 'bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200'
                                    : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200'
                                }`}
                              >
                                {u.status === 'ACTIVE' ? 'Blokir' : 'Buka Blokir'}
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB: PRODUCT ACCESS CONTROL (USER_ACCESS) */}
          {activeTab === 'access' && (
            <div className="space-y-4">
              {/* Info Header */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="font-extrabold text-amber-950 flex items-center gap-1.5 text-sm">
                    <span className="text-base">🔑</span>
                    <span>Hak Akses Produk Pembeli (USER_ACCESS)</span>
                  </div>
                  <p className="text-[11px] text-amber-900/80 mt-0.5 leading-relaxed">
                    Setiap pembeli hanya dapat membuka produk yang telah dibeli atau diberikan hak akses aktifnya. Akun tanpa hak akses produk akan dialihkan ke halaman <em>Akses Dibatasi</em>.
                  </p>
                </div>
                <div className="shrink-0 px-2.5 py-1 rounded-xl bg-amber-200/60 text-amber-950 font-black text-[11px]">
                  Total: {accessGrants.length} Hak Akses Diberikan
                </div>
              </div>

              {/* Form: Grant New Product Access */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
                <div className="flex items-center gap-2 text-xs font-black text-slate-800">
                  <PlusCircle className="w-4 h-4 text-emerald-600" />
                  <span>Tambah / Berikan Hak Akses Produk ke Pengguna</span>
                </div>

                <form onSubmit={handleGrantAccessSubmit} className="flex flex-col sm:flex-row gap-2.5 text-xs">
                  <div className="flex-1">
                    <label className="text-[11px] font-bold text-slate-500 block mb-1">
                      Pilih Pengguna:
                    </label>
                    <select
                      value={grantUserId}
                      onChange={(e) => setGrantUserId(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-slate-50 font-medium text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
                    >
                      <option value="">-- Pilih Akun Terdaftar --</option>
                      {users.map((u) => (
                        <option key={u.user_id} value={u.user_id}>
                          {u.full_name || u.username} ({u.email})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex-1">
                    <label className="text-[11px] font-bold text-slate-500 block mb-1">
                      Pilih Paket Produk:
                    </label>
                    <select
                      value={grantProductId}
                      onChange={(e) => setGrantProductId(e.target.value as ProductId)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-slate-50 font-medium text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
                    >
                      <option value="KELAS_1">Kelas 1 SD (/kelas1 atau ?kelas=1)</option>
                      <option value="KELAS_2">Kelas 2 SD (/kelas2 atau ?kelas=2)</option>
                      <option value="KELAS_3">Kelas 3 SD (/kelas3 atau ?kelas=3)</option>
                      <option value="KELAS_4">Kelas 4 SD (/kelas4 atau ?kelas=4)</option>
                      <option value="KELAS_5">Kelas 5 SD (/kelas5 atau ?kelas=5)</option>
                      <option value="KELAS_6">Kelas 6 SD (/kelas6 atau ?kelas=6)</option>
                      <option value="BUNDLE_ALL">🌟 Bundling Lengkap Semua Kelas 1-6 (/bundle)</option>
                    </select>
                  </div>

                  <div className="flex items-end">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <PlusCircle className="w-3.5 h-3.5" />
                      <span>Berikan Akses</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Table Controls */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                <div className="relative flex-1 max-w-sm">
                  <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Cari email user atau produk..."
                    value={accessSearchQuery}
                    onChange={(e) => setAccessSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-amber-400 bg-slate-50 focus:bg-white"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyAccessTsv}
                    className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
                    title="Salin tabel USER_ACCESS ke clipboard untuk dipaste ke Google Spreadsheet"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin Tabel USER_ACCESS (1-Klik)</span>
                  </button>

                  <button
                    onClick={handleDownloadAccessCsv}
                    className="px-3 py-1.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition-colors flex items-center gap-1 cursor-pointer"
                    title="Unduh file CSV USER_ACCESS"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Unduh CSV</span>
                  </button>
                </div>
              </div>

              {/* Table of User Access */}
              <div className="rounded-2xl border border-slate-200 overflow-x-auto shadow-2xs bg-white">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 border-b border-slate-200 font-extrabold text-slate-700">
                    <tr>
                      <th className="py-2.5 px-3">Identitas Pengguna</th>
                      <th className="py-2.5 px-3">Produk Yang Dimiliki</th>
                      <th className="py-2.5 px-3">Status Akses</th>
                      <th className="py-2.5 px-3">Diberikan Pada</th>
                      <th className="py-2.5 px-3">Diberikan Oleh</th>
                      <th className="py-2.5 px-3 text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredAccessGrants.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-slate-400">
                          Tidak ada data hak akses yang cocok.
                        </td>
                      </tr>
                    ) : (
                      filteredAccessGrants.map((grant) => {
                        const prod = PRODUCTS[grant.product_id];
                        return (
                          <tr key={grant.access_id} className="hover:bg-slate-50/70 transition-colors">
                            <td className="py-2.5 px-3">
                              <div className="font-bold text-slate-900">{grant.email}</div>
                              <div className="text-[10px] text-slate-400 font-mono">ID: {grant.user_id}</div>
                            </td>

                            <td className="py-2.5 px-3">
                              <div className="flex items-center gap-1.5">
                                <span className="px-2 py-0.5 rounded-md text-[10px] font-black bg-amber-100 text-amber-900 border border-amber-300">
                                  {prod ? prod.badgeLabel : grant.product_id}
                                </span>
                                <span className="font-medium text-slate-700 text-[11px]">
                                  {grant.product_name}
                                </span>
                              </div>
                            </td>

                            <td className="py-2.5 px-3">
                              <span
                                className={`px-2 py-0.5 rounded-full text-[10px] font-black border ${
                                  grant.status === 'ACTIVE'
                                    ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                                    : 'bg-rose-100 text-rose-900 border-rose-300'
                                }`}
                              >
                                {grant.status === 'ACTIVE' ? 'AKTIF' : 'DICABUT'}
                              </span>
                            </td>

                            <td className="py-2.5 px-3 text-slate-600 text-[11px] whitespace-nowrap">
                              {new Date(grant.granted_at).toLocaleString('id-ID', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                              })}
                            </td>

                            <td className="py-2.5 px-3 text-[10px] font-mono text-slate-500">
                              {grant.granted_by}
                            </td>

                            <td className="py-2.5 px-3 text-center">
                              {grant.status === 'ACTIVE' ? (
                                <button
                                  onClick={() => handleRevokeAccess(grant.access_id)}
                                  className="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-[11px] transition-colors cursor-pointer"
                                  title="Cabut hak akses untuk produk ini"
                                >
                                  Cabut Akses
                                </button>
                              ) : (
                                <button
                                  onClick={() => {
                                    sounds.playFanfare();
                                    authService.grantUserAccess(grant.user_id, grant.product_id, 'ADMIN');
                                    reloadData();
                                    setActionNotice({
                                      text: 'Hak akses berhasil diaktifkan kembali.',
                                      type: 'success',
                                    });
                                  }}
                                  className="px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold text-[11px] transition-colors cursor-pointer"
                                  title="Aktifkan kembali akses produk ini"
                                >
                                  Aktifkan Kembali
                                </button>
                              )}
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: LOGIN LOGS */}
          {activeTab === 'logs' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Catatan aktivitas login dan autentikasi pengguna secara real-time.</span>
                <span className="font-bold text-slate-700">{logs.length} Log Tercatat</span>
              </div>

              <div className="rounded-2xl border border-slate-200 overflow-x-auto shadow-2xs">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 border-b border-slate-200 font-extrabold text-slate-700">
                    <tr>
                      <th className="py-2.5 px-3">Waktu Login</th>
                      <th className="py-2.5 px-3">Identitas Pengguna</th>
                      <th className="py-2.5 px-3">Produk Akses</th>
                      <th className="py-2.5 px-3">Metode</th>
                      <th className="py-2.5 px-3">Status</th>
                      <th className="py-2.5 px-3">Session ID</th>
                      <th className="py-2.5 px-3">Waktu Logout</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {logs.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-slate-400">
                          Belum ada catatan log login.
                        </td>
                      </tr>
                    ) : (
                      logs.map((log) => (
                        <tr key={log.log_id} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-2.5 px-3 text-slate-700 text-[11px] whitespace-nowrap">
                            {new Date(log.login_at).toLocaleString('id-ID', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                              second: '2-digit',
                            })}
                          </td>

                          <td className="py-2.5 px-3">
                            <div className="font-bold text-slate-900">{log.email}</div>
                            <div className="text-[10px] text-slate-500">@{log.username}</div>
                          </td>

                          <td className="py-2.5 px-3">
                            {log.product_id ? (
                              <span className="px-2 py-0.5 rounded-md text-[10px] font-black bg-amber-100 text-amber-900 border border-amber-300 whitespace-nowrap">
                                {PRODUCTS[log.product_id as ProductId]?.shortName || log.product_id}
                              </span>
                            ) : (
                              <span className="text-slate-400 text-[10px]">-</span>
                            )}
                          </td>

                          <td className="py-2.5 px-3">
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                              {log.login_method}
                            </span>
                          </td>

                          <td className="py-2.5 px-3">
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-black border ${
                                log.status === 'SUCCESS'
                                  ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                                  : log.status === 'BLOCKED'
                                  ? 'bg-rose-100 text-rose-900 border-rose-300'
                                  : log.status === 'TERMINATED'
                                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                                  : 'bg-red-50 text-red-800 border-red-200'
                              }`}
                            >
                              {log.status}
                            </span>
                          </td>

                          <td className="py-2.5 px-3 text-[10px] font-mono text-slate-500 truncate max-w-[120px]">
                            {log.session_id}
                          </td>

                          <td className="py-2.5 px-3 text-[11px] text-slate-500 whitespace-nowrap">
                            {log.logout_at
                              ? new Date(log.logout_at).toLocaleTimeString('id-ID', {
                                  hour: '2-digit',
                                  minute: '2-digit',
                                })
                              : '-'}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: GOOGLE SPREADSHEET DATABASE (TANPA APPS SCRIPT) */}
          {activeTab === 'settings' && (
            <div className="space-y-6 max-w-4xl">
              {/* Header Box */}
              <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-emerald-50 via-emerald-100/50 to-amber-50 border-2 border-emerald-200 text-xs text-slate-800 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-200/80 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-xs">
                      <FileSpreadsheet className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="font-display font-black text-emerald-950 text-sm sm:text-base">
                        Database Google Spreadsheet Admin
                      </h3>
                      <p className="text-[11px] text-emerald-800 font-medium">
                        Model Langsung Google Spreadsheet • Tanpa Perlu Google Apps Script
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 self-start sm:self-auto">
                    <span className="px-2.5 py-1 rounded-xl bg-white/90 text-emerald-900 border border-emerald-300 font-black text-[11px] flex items-center gap-1 shadow-2xs">
                      <span>👑 Admin:</span>
                      <span className="font-mono text-emerald-950 font-bold">nahdiyatulummah31@gmail.com</span>
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed">
                  Database autentikasi Anda tersimpan secara aman di sini dan siap ditautkan langsung ke file <strong>Google Spreadsheet</strong> milik akun Admin <code>nahdiyatulummah31@gmail.com</code>. Anda dapat menyalin data secara instan hanya dengan 1-klik untuk dipaste ke Google Sheets, atau menautkan link spreadsheet untuk pemantauan terpadu tanpa perlu coding Apps Script!
                </p>
              </div>

              {/* Direct Automatic Google Sheets & Google Drive Sync */}
              <div className="rounded-3xl border-2 border-emerald-300 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 p-5 space-y-4 shadow-sm">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-500 text-white text-lg shadow-sm">
                      ⚡
                    </span>
                    <div>
                      <h4 className="font-display font-black text-emerald-950 text-sm sm:text-base">
                        Sinkronisasi Otomatis Google Sheets (Resmi Google API)
                      </h4>
                      <p className="text-[11px] text-emerald-800 font-medium">
                        Otomatis membuat & mengalirkan database ke Google Drive <strong>nahdiyatulummah31@gmail.com</strong>
                      </p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-emerald-200/80 text-emerald-900 font-black text-[10px] uppercase tracking-wider">
                    Tanpa Apps Script • Otomatis
                  </span>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed">
                  Dengan otorisasi Google Sheets yang sudah aktif, data pengguna baru, pembelian kelas, log login, dan hak akses dapat otomatis disinkronkan langsung ke file spreadsheet <code>Pintaria_Auth_Database</code> di akun Google Drive <strong>nahdiyatulummah31@gmail.com</strong>.
                </p>

                {/* Connection Status Badge */}
                <div className="flex items-center gap-2 flex-wrap text-xs">
                  <span className="font-bold text-slate-700">Status Otorisasi Google:</span>
                  {getCachedAccessToken() ? (
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 font-black text-[11px] flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Akun Google Terhubung & Token Aktif</span>
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-bold text-[11px] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-700" />
                      <span>Belum Terhubung / Token Belum Aktif</span>
                    </span>
                  )}
                </div>

                {/* Status Notice */}
                {sheetsSyncStatus && (
                  <div
                    className={`p-3 rounded-xl text-xs font-bold flex items-center gap-2 animate-fadeIn ${
                      sheetsSyncStatus.type === 'success'
                        ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                        : 'bg-rose-100 text-rose-900 border border-rose-300'
                    }`}
                  >
                    <span>{sheetsSyncStatus.type === 'success' ? '✓' : '⚠️'}</span>
                    <span>{sheetsSyncStatus.text}</span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1 flex-wrap">
                  {/* Connect Google Button if not connected */}
                  {!getCachedAccessToken() && (
                    <button
                      type="button"
                      onClick={handleConnectGoogle}
                      disabled={isSyncingSheets}
                      className="py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:bg-amber-300 text-slate-950 font-black text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${isSyncingSheets ? 'animate-spin' : ''}`} />
                      <span>🔗 Hubungkan Akun Google Admin (nahdiyatulummah31)</span>
                    </button>
                  )}

                  {/* Sync Button */}
                  <button
                    type="button"
                    onClick={handleAutoSyncSheets}
                    disabled={isSyncingSheets}
                    className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-400 text-white font-black text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isSyncingSheets ? 'animate-spin' : ''}`} />
                    <span>
                      {isSyncingSheets
                        ? 'Sedang Memperbarui Google Sheets...'
                        : '⚡ Sinkronkan Database Sekarang'}
                    </span>
                  </button>

                  {/* Quick Simulation Button for effortless testing */}
                  <button
                    type="button"
                    onClick={handleSimulatedSync}
                    disabled={isSyncingSheets}
                    className="py-2.5 px-3 rounded-xl border-2 border-emerald-300 bg-white hover:bg-emerald-50 text-emerald-900 font-bold text-xs shadow-2xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    title="Uji coba proses sinkronisasi spreadsheet tanpa membuka jendela popup Google"
                  >
                    <span>🧪 Mode Uji Coba Simulasi</span>
                  </button>

                  {spreadsheetId && (
                    <a
                      href={
                        spreadsheetUrl.startsWith('http')
                          ? spreadsheetUrl
                          : `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-4 rounded-xl bg-white hover:bg-slate-50 text-emerald-800 border-2 border-emerald-300 font-bold text-xs shadow-2xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4 text-emerald-600" />
                      <span>Buka File Spreadsheet di Google Drive</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Action Hub: 1-Click Copy & Download */}
              <div className="rounded-3xl border-2 border-slate-200 bg-white p-5 space-y-4 shadow-xs">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h4 className="font-display font-black text-slate-900 text-sm flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-amber-100 text-amber-800 text-xs font-black">
                      1
                    </span>
                    <span>Salin / Ekspor Data ke Google Spreadsheet (1-Klik)</span>
                  </h4>
                  <span className="text-[11px] font-bold text-slate-500">
                    Format otomatis sesuai kolom Google Spreadsheet
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Copy USERS */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between gap-3">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold text-slate-900">
                          Data Tabel USERS
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-black text-[10px]">
                          {users.length} Baris Data
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                        Berisi kolom: user_id, email, full_name, username, role, status, registered_at, last_login_at, active_session_id.
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={handleCopyUsersTsv}
                        className="flex-1 py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>Salin Tabel USERS</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleDownloadUsersCsv}
                        className="py-2 px-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                        title="Unduh CSV USERS"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">CSV</span>
                      </button>
                    </div>
                  </div>

                  {/* Copy LOGIN_LOG */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between gap-3">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold text-slate-900">
                          Data Tabel LOGIN_LOG
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 font-black text-[10px]">
                          {logs.length} Baris Log
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                        Berisi kolom: log_id, user_id, email, username, product_id, login_method, login_at, logout_at, session_id, status.
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={handleCopyLogsTsv}
                        className="flex-1 py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>Salin Tabel LOGIN_LOG</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleDownloadLogsCsv}
                        className="py-2 px-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                        title="Unduh CSV LOGIN_LOG"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">CSV</span>
                      </button>
                    </div>
                  </div>

                  {/* Copy USER_ACCESS */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between gap-3">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold text-slate-900">
                          Data Tabel USER_ACCESS
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-black text-[10px]">
                          {accessGrants.length} Baris Akses
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                        Berisi kolom: access_id, user_id, email, product_id, product_name, status, granted_at, expired_at, granted_by.
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={handleCopyAccessTsv}
                        className="flex-1 py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>Salin USER_ACCESS</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleDownloadAccessCsv}
                        className="py-2 px-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                        title="Unduh CSV USER_ACCESS"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">CSV</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connect Spreadsheet URL */}
              <div className="rounded-3xl border-2 border-slate-200 bg-white p-5 space-y-4 shadow-xs">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h4 className="font-display font-black text-slate-900 text-sm flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800 text-xs font-black">
                      2
                    </span>
                    <span>Tautkan Dokumen Google Spreadsheet Anda</span>
                  </h4>

                  <a
                    href="https://docs.google.com/spreadsheets/u/0/create"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>➕ Buat Spreadsheet Baru di Google Drive</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 block">
                    URL atau ID Google Spreadsheet Milik Admin (nahdiyatulummah31@gmail.com):
                  </label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="url"
                      placeholder="https://docs.google.com/spreadsheets/d/1BxiMVs0XRX.../edit"
                      value={spreadsheetUrl}
                      onChange={(e) => setSpreadsheetUrl(e.target.value)}
                      className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-xs font-mono text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    />
                    <button
                      onClick={handleSaveSpreadsheetUrl}
                      className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-2xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                    >
                      <Check className="w-4 h-4" />
                      <span>Simpan Link Spreadsheet</span>
                    </button>
                  </div>
                </div>

                {/* Direct Action Links */}
                {spreadsheetId && (
                  <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div>
                      <div className="font-bold text-emerald-950 flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Spreadsheet Terhubung (ID: {spreadsheetId})</span>
                      </div>
                      <p className="text-[11px] text-emerald-800 mt-0.5">
                        Tautan tersimpan untuk akun Google Admin: nahdiyatulummah31@gmail.com
                      </p>
                    </div>

                    <a
                      href={spreadsheetUrl.startsWith('http') ? spreadsheetUrl : `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 justify-center shadow-xs transition-colors cursor-pointer shrink-0"
                    >
                      <span>Buka di Google Sheets</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>

              {/* Simple 3-Step Guide */}
              <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5 space-y-3">
                <h4 className="font-display font-black text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                  <span>💡</span>
                  <span>Cara Mudah Mengisi Google Spreadsheet (Hanya 3 Langkah Praktis)</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 space-y-1">
                    <div className="font-black text-slate-900 flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 font-black text-[11px] flex items-center justify-center">
                        1
                      </span>
                      <span>Buat Spreadsheet</span>
                    </div>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      Buka Google Drive dengan akun <strong>nahdiyatulummah31@gmail.com</strong>, buat 1 spreadsheet bernama <em>"Pintaria_Auth_Database"</em>, lalu buat 3 tab sheet: <code>USERS</code>, <code>LOGIN_LOG</code>, dan <code>USER_ACCESS</code>.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 space-y-1">
                    <div className="font-black text-slate-900 flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 font-black text-[11px] flex items-center justify-center">
                        2
                      </span>
                      <span>Klik Tombol Salin</span>
                    </div>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      Klik tombol kuning <strong>"Salin Tabel USERS"</strong> di atas. Buka sheet USERS di Google Sheets Anda, lalu tekan <strong>Ctrl + V</strong> di sel A1. Seluruh kolom dan data langsung terisi rapi!
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 space-y-1">
                    <div className="font-black text-slate-900 flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 font-black text-[11px] flex items-center justify-center">
                        3
                      </span>
                      <span>Tempel Link Dokumen</span>
                    </div>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      Salin URL link Google Spreadsheet Anda, masukkan ke kolom input di atas lalu klik <strong>"Simpan Link Spreadsheet"</strong> agar dapat diakses kapan saja dengan 1 klik.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Detail Sub-Modal */}
        {selectedUserDetail && (
          <div className="fixed inset-0 z-60 flex items-center justify-center bg-slate-900/60 p-4">
            <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl border-2 border-slate-200 animate-scaleIn space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-display font-black text-slate-900 text-base">Detail Pengguna</h3>
                <button
                  onClick={() => setSelectedUserDetail(null)}
                  className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-400">User ID:</span>
                  <span className="font-mono font-bold">{selectedUserDetail.user_id}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-400">Nama Lengkap:</span>
                  <span className="font-bold">{selectedUserDetail.full_name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-400">Username:</span>
                  <span className="font-mono font-bold">@{selectedUserDetail.username}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-400">Email:</span>
                  <span className="font-bold">{selectedUserDetail.email}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-400">Role:</span>
                  <span className="font-bold text-amber-800">{selectedUserDetail.role}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-400">Status Akun:</span>
                  <span
                    className={`font-black ${
                      selectedUserDetail.status === 'ACTIVE' ? 'text-emerald-600' : 'text-rose-600'
                    }`}
                  >
                    {selectedUserDetail.status}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-400">Terdaftar Pada:</span>
                  <span>{new Date(selectedUserDetail.registered_at).toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-400">Login Terakhir:</span>
                  <span>{new Date(selectedUserDetail.last_login_at).toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-400">Sesi Aktif:</span>
                  <span className="font-mono text-[10px] text-slate-500">
                    {selectedUserDetail.active_session_id || 'Tidak ada sesi aktif'}
                  </span>
                </div>

                <div className="py-1.5 border-b border-slate-100">
                  <span className="text-slate-400 block mb-1">Produk / Kelas yang Dimiliki:</span>
                  {selectedUserDetail.role === 'ADMIN' ? (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-100 text-amber-900 border border-amber-300 inline-block">
                      👑 Akses Universal Super Admin (Semua Kelas)
                    </span>
                  ) : (
                    (() => {
                      const grants = accessGrants.filter(
                        (g) => (g.user_id === selectedUserDetail.user_id || g.email.toLowerCase() === selectedUserDetail.email.toLowerCase()) && g.status === 'ACTIVE'
                      );
                      if (grants.some((g) => g.product_id === 'BUNDLE_ALL')) {
                        return (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-purple-100 text-purple-900 border border-purple-300 inline-block">
                            ⭐ Bundling Semua Kelas (Kelas 1 - 6 SD)
                          </span>
                        );
                      }
                      if (grants.length === 0) {
                        return <span className="text-slate-400 italic">Belum ada hak akses produk aktif</span>;
                      }
                      return (
                        <div className="flex flex-wrap gap-1 mt-1">
                          {grants.map((g) => (
                            <span
                              key={g.access_id}
                              className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300"
                            >
                              {g.product_name || g.product_id}
                            </span>
                          ))}
                        </div>
                      );
                    })()
                  )}
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    sounds.playPop();
                    setGrantUserId(selectedUserDetail.user_id);
                    setSelectedUserDetail(null);
                    setActiveTab('access');
                  }}
                  className="w-full py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Key className="w-3.5 h-3.5" />
                  <span>Atur / Tambah Hak Akses Produk User Ini</span>
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleToggleBlock(selectedUserDetail)}
                    disabled={authService.isUserAdmin(selectedUserDetail.email)}
                    className={`flex-1 py-2.5 rounded-xl font-bold text-xs transition-colors cursor-pointer ${
                      selectedUserDetail.status === 'ACTIVE'
                        ? 'bg-rose-500 hover:bg-rose-600 text-white'
                        : 'bg-emerald-500 hover:bg-emerald-600 text-white'
                    }`}
                  >
                    {selectedUserDetail.status === 'ACTIVE' ? 'Blokir Akun' : 'Buka Blokir'}
                  </button>

                  {selectedUserDetail.active_session_id && (
                    <button
                      onClick={() => handleTerminateSession(selectedUserDetail)}
                      className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs transition-colors cursor-pointer"
                    >
                      Putus Sesi
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CREATE USER MODAL (ADMIN MANUAL CREATION) */}
        {isCreateUserModalOpen && (
          <div className="fixed inset-0 z-60 flex items-center justify-center bg-slate-900/60 p-4">
            <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl border-2 border-amber-300 animate-scaleIn space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-100 text-amber-900 font-black text-sm">
                    👤
                  </span>
                  <div>
                    <h3 className="font-display font-black text-slate-900 text-base">
                      Buat Akun Pengguna Baru
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Buat username dan kata sandi untuk pembeli atau guru secara manual.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsCreateUserModalOpen(false)}
                  className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {createUserError && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <div>{createUserError}</div>
                </div>
              )}

              <form onSubmit={handleAdminCreateUserSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Nama Lengkap Pengguna / Siswa / Guru:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso"
                    value={newFullName}
                    onChange={(e) => setNewFullName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-300"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">
                      Username:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="budisantoso"
                      value={newUsername}
                      onChange={(e) => setNewUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ''))}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 font-mono focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-300"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">
                      Alamat Email:
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="budi@gmail.com"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Kata Sandi (Password):
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Minimal 6 karakter, contoh: Budi123!"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 font-mono focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-300"
                  />
                  <span className="text-[10px] text-slate-400 mt-0.5 block">
                    Password ini yang akan diberikan ke pembeli agar mereka bisa langsung login.
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">
                      Hak Akses Produk / Kelas:
                    </label>
                    <select
                      value={newProductId}
                      onChange={(e) => setNewProductId(e.target.value as ProductId)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-300"
                    >
                      <option value="KELAS_1">Kelas 1 SD</option>
                      <option value="KELAS_2">Kelas 2 SD</option>
                      <option value="KELAS_3">Kelas 3 SD</option>
                      <option value="KELAS_4">Kelas 4 SD</option>
                      <option value="KELAS_5">Kelas 5 SD</option>
                      <option value="KELAS_6">Kelas 6 SD</option>
                      <option value="BUNDLE_ALL">⭐ Paket Bundling Semua Kelas (1-6)</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">
                      Peran (Role):
                    </label>
                    <select
                      value={newRole}
                      onChange={(e) => setNewRole(e.target.value as UserRole)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-300"
                    >
                      <option value="USER">PENGGUNA (Pembeli / Siswa)</option>
                      <option value="ADMIN">ADMINISTRATOR (Pengelola)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setIsCreateUserModalOpen(false)}
                    className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmittingUser}
                    className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black cursor-pointer shadow-xs transition-colors flex items-center gap-1.5"
                  >
                    <UserPlus className="w-3.5 h-3.5 text-slate-950" />
                    <span>{isSubmittingUser ? 'Menyimpan...' : 'Simpan & Buat Akun'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

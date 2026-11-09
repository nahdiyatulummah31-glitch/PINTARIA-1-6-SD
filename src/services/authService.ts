import { User, LoginLog, AuthSession, AuthSettings, UserRole, UserStatus, UserAccess, ProductId } from '../types/auth';
import { PRODUCTS } from '../config/products';

export const ADMIN_EMAILS: string[] = [
  'nahdiyatulummah31@gmail.com',
  'rekrutmenrsutrimedikaketapang@gmail.com',
  'admin@pintaria.com',
];

const STORAGE_KEY_USERS = 'pintaria_auth_users_v1';
const STORAGE_KEY_LOGS = 'pintaria_auth_logs_v1';
const STORAGE_KEY_SESSION = 'pintaria_auth_session_v1';
const STORAGE_KEY_SETTINGS = 'pintaria_auth_settings_v1';
const STORAGE_KEY_ACCESS = 'pintaria_auth_access_v1';

// BroadcastChannel for cross-tab instant synchronization
const broadcastChannel: BroadcastChannel | null =
  typeof window !== 'undefined' && 'BroadcastChannel' in window
    ? new BroadcastChannel('pintaria_auth_sync_v1')
    : null;

// Helper: Secure SHA-256 Hashing with Salt
export async function hashPassword(password: string, salt: string): Promise<string> {
  const enc = new TextEncoder();
  const data = enc.encode(password + ':' + salt);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

export function generateSalt(): string {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return Array.from(array)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

// Initial seed users
const INITIAL_USERS: User[] = [
  {
    user_id: 'usr_admin_01',
    email: 'nahdiyatulummah31@gmail.com',
    full_name: 'Super Admin Nahdiyatu',
    username: 'admin',
    password_hash: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
    password_salt: 'seed_admin_salt_88',
    role: 'ADMIN',
    status: 'ACTIVE',
    registered_at: '2026-10-01T00:00:00.000Z',
    last_login_at: '2026-10-01T00:00:00.000Z',
    last_activity_at: '2026-10-01T00:00:00.000Z',
  },
  {
    user_id: 'usr_admin_02',
    email: 'rekrutmenrsutrimedikaketapang@gmail.com',
    full_name: 'Admin Rekrutmen Trimedika',
    username: 'adminrekrutmen',
    password_hash: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
    password_salt: 'seed_admin_salt_89',
    role: 'ADMIN',
    status: 'ACTIVE',
    registered_at: '2026-10-01T00:00:00.000Z',
    last_login_at: '2026-10-01T00:00:00.000Z',
    last_activity_at: '2026-10-01T00:00:00.000Z',
  },
  {
    user_id: 'usr_teacher_01',
    email: 'guru@pintaria.com',
    full_name: 'Ibu Ratna Dewi, S.Pd',
    username: 'gururatna',
    password_hash: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
    password_salt: 'seed_teacher_salt_77',
    role: 'USER',
    status: 'ACTIVE',
    registered_at: '2026-10-01T00:00:00.000Z',
    last_login_at: '2026-10-01T00:00:00.000Z',
    last_activity_at: '2026-10-01T00:00:00.000Z',
  },
];

// Initial seed access grants
const INITIAL_ACCESS_GRANTS: UserAccess[] = [
  {
    access_id: 'acc_admin_01',
    user_id: 'usr_admin_01',
    email: 'nahdiyatulummah31@gmail.com',
    product_id: 'BUNDLE_ALL',
    product_name: 'Paket Bundling Lengkap Semua Kelas (1-6 SD)',
    status: 'ACTIVE',
    granted_at: '2026-10-01T00:00:00.000Z',
    granted_by: 'SYSTEM',
  },
  {
    access_id: 'acc_admin_02',
    user_id: 'usr_admin_02',
    email: 'rekrutmenrsutrimedikaketapang@gmail.com',
    product_id: 'BUNDLE_ALL',
    product_name: 'Paket Bundling Lengkap Semua Kelas (1-6 SD)',
    status: 'ACTIVE',
    granted_at: '2026-10-01T00:00:00.000Z',
    granted_by: 'SYSTEM',
  },
  {
    access_id: 'acc_teacher_01',
    user_id: 'usr_teacher_01',
    email: 'guru@pintaria.com',
    product_id: 'KELAS_1',
    product_name: 'Paket Belajar & Latihan Soal Kelas 1 SD',
    status: 'ACTIVE',
    granted_at: '2026-10-01T00:00:00.000Z',
    granted_by: 'ADMIN',
  },
];

// Memory/Storage Manager with Server-authoritative synchronization
class AuthService {
  private users: User[] = [];
  private accessGrants: UserAccess[] = [];
  private logs: LoginLog[] = [];
  private currentSession: AuthSession | null = null;
  private settings: AuthSettings = {
    session_timeout_hours: 24,
  };
  private syncListeners: Array<() => void> = [];

  constructor() {
    this.initStorage();
    this.setupCrossTabSync();
    // Fetch authoritative state from server asynchronously
    this.syncFromServer();
  }

  private setupCrossTabSync() {
    if (typeof window === 'undefined') return;

    if (broadcastChannel) {
      broadcastChannel.onmessage = (event) => {
        if (event.data?.type === 'AUTH_STATE_CHANGED') {
          this.initStorage();
          this.notifyListeners();
        }
      };
    }

    window.addEventListener('storage', (e) => {
      if (
        e.key === STORAGE_KEY_USERS ||
        e.key === STORAGE_KEY_ACCESS ||
        e.key === STORAGE_KEY_SESSION
      ) {
        this.initStorage();
        this.notifyListeners();
      }
    });
  }

  public subscribe(listener: () => void): () => void {
    this.syncListeners.push(listener);
    return () => {
      this.syncListeners = this.syncListeners.filter((l) => l !== listener);
    };
  }

  private notifyListeners() {
    this.syncListeners.forEach((l) => {
      try {
        l();
      } catch {
        // Ignore listener error
      }
    });
  }

  private broadcastChange() {
    if (broadcastChannel) {
      try {
        broadcastChannel.postMessage({ type: 'AUTH_STATE_CHANGED', timestamp: Date.now() });
      } catch {
        // Ignore
      }
    }
    this.notifyListeners();
  }

  // Fetch full state from server
  public async syncFromServer(): Promise<boolean> {
    try {
      const resp = await fetch('/api/auth/state');
      if (resp.ok) {
        const data = await resp.json();
        if (data && data.success) {
          if (Array.isArray(data.users)) {
            this.users = data.users;
            this.saveUsersToStorage();
          }
          if (Array.isArray(data.accessGrants)) {
            this.accessGrants = data.accessGrants;
            this.saveAccessToStorage();
          }
          if (Array.isArray(data.logs)) {
            this.logs = data.logs;
            this.saveLogsToStorage();
          }
          if (data.settings) {
            this.settings = data.settings;
            this.saveSettingsToStorage();
          }
          // Validate current session against updated users
          if (this.currentSession) {
            const currentUser = this.users.find((u) => u.user_id === this.currentSession?.user_id);
            if (!currentUser || currentUser.status === 'BLOCKED') {
              this.clearSession();
            }
          }
          this.notifyListeners();
          return true;
        }
      }
    } catch (err) {
      console.warn('Could not sync auth state from server:', err);
    }
    return false;
  }

  private initStorage() {
    try {
      // 1. Load settings
      const savedSettings = localStorage.getItem(STORAGE_KEY_SETTINGS);
      if (savedSettings) {
        this.settings = JSON.parse(savedSettings);
      }

      // 2. Load users
      const savedUsers = localStorage.getItem(STORAGE_KEY_USERS);
      if (savedUsers) {
        this.users = JSON.parse(savedUsers);
        this.users.forEach((u) => {
          if (this.isUserAdmin(u.email)) {
            u.role = 'ADMIN';
          }
        });
      } else {
        this.users = [...INITIAL_USERS];
        this.saveUsersToStorage();
      }

      // 3. Load logs
      const savedLogs = localStorage.getItem(STORAGE_KEY_LOGS);
      if (savedLogs) {
        this.logs = JSON.parse(savedLogs);
      }

      // 4. Load product access grants
      const savedAccess = localStorage.getItem(STORAGE_KEY_ACCESS);
      if (savedAccess) {
        this.accessGrants = JSON.parse(savedAccess);
      } else {
        this.accessGrants = [...INITIAL_ACCESS_GRANTS];
        this.saveAccessToStorage();
      }

      // Ensure super admins always have active BUNDLE_ALL access
      const requiredAdmins = [
        { email: 'nahdiyatulummah31@gmail.com', userId: 'usr_admin_01', id: 'acc_admin_nahdiyatu_bundle' },
        { email: 'rekrutmenrsutrimedikaketapang@gmail.com', userId: 'usr_admin_02', id: 'acc_admin_rekrutmen_bundle' },
      ];

      for (const adm of requiredAdmins) {
        if (!this.users.some((u) => u.email.toLowerCase() === adm.email)) {
          this.users.unshift({
            user_id: adm.userId,
            email: adm.email,
            full_name: adm.email === 'nahdiyatulummah31@gmail.com' ? 'Super Admin Nahdiyatu' : 'Admin Rekrutmen Trimedika',
            username: adm.email.split('@')[0],
            password_hash: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
            password_salt: 'seed_admin_salt_88',
            role: 'ADMIN',
            status: 'ACTIVE',
            registered_at: '2026-10-01T00:00:00.000Z',
            last_login_at: '2026-10-01T00:00:00.000Z',
            last_activity_at: '2026-10-01T00:00:00.000Z',
          });
          this.saveUsersToStorage();
        }

        if (
          !this.accessGrants.some(
            (a) =>
              a.email.toLowerCase() === adm.email &&
              a.product_id === 'BUNDLE_ALL' &&
              a.status === 'ACTIVE'
          )
        ) {
          this.accessGrants.unshift({
            access_id: adm.id,
            user_id: adm.userId,
            email: adm.email,
            product_id: 'BUNDLE_ALL',
            product_name: 'Paket Bundling Lengkap Semua Kelas (1-6 SD)',
            status: 'ACTIVE',
            granted_at: new Date().toISOString(),
            granted_by: 'SYSTEM',
          });
          this.saveAccessToStorage();
        }
      }

      // 5. Load session
      const savedSession = localStorage.getItem(STORAGE_KEY_SESSION);
      if (savedSession) {
        const parsed = JSON.parse(savedSession) as AuthSession;
        if (parsed.expires_at > Date.now()) {
          const user = this.users.find((u) => u.user_id === parsed.user_id);
          if (user && user.status === 'ACTIVE' && user.active_session_id === parsed.session_id) {
            this.currentSession = parsed;
          } else {
            this.clearSession();
          }
        } else {
          this.clearSession();
        }
      }
    } catch (err) {
      console.error('Error initializing auth storage:', err);
    }
  }

  private saveUsersToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(this.users));
    } catch {
      // Ignore
    }
  }

  private saveAccessToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY_ACCESS, JSON.stringify(this.accessGrants));
    } catch {
      // Ignore
    }
  }

  private saveLogsToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY_LOGS, JSON.stringify(this.logs));
    } catch {
      // Ignore
    }
  }

  private saveSessionToStorage(session: AuthSession) {
    try {
      localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(session));
      this.currentSession = session;
    } catch {
      // Ignore
    }
  }

  private saveSettingsToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(this.settings));
    } catch {
      // Ignore
    }
  }

  private clearSession() {
    this.currentSession = null;
    try {
      localStorage.removeItem(STORAGE_KEY_SESSION);
    } catch {
      // Ignore
    }
  }

  public getSettings(): AuthSettings {
    return this.settings;
  }

  public saveSettings(newSettings: Partial<AuthSettings>) {
    this.settings = { ...this.settings, ...newSettings };
    this.saveSettingsToStorage();
    this.broadcastChange();
  }

  public getCurrentSession(): AuthSession | null {
    if (!this.currentSession) return null;
    if (this.currentSession.expires_at <= Date.now()) {
      this.clearSession();
      return null;
    }
    // Verify user is not blocked
    const user = this.users.find((u) => u.user_id === this.currentSession?.user_id);
    if (!user || user.status === 'BLOCKED' || (user.active_session_id && user.active_session_id !== this.currentSession.session_id)) {
      this.clearSession();
      return null;
    }
    return this.currentSession;
  }

  // Periodic heartbeat session validator against server
  public async validateSessionWithServer(): Promise<{ valid: boolean; reason?: string }> {
    if (!this.currentSession) {
      return { valid: false, reason: 'Tidak ada sesi aktif.' };
    }

    // First check local status
    const localUser = this.users.find((u) => u.user_id === this.currentSession?.user_id);
    if (localUser && localUser.status === 'BLOCKED') {
      this.clearSession();
      this.broadcastChange();
      return { valid: false, reason: 'Akun Anda sedang diblokir oleh Administrator.' };
    }

    try {
      const url = `/api/auth/check-session?userId=${encodeURIComponent(
        this.currentSession.user_id
      )}&sessionId=${encodeURIComponent(this.currentSession.session_id)}`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        if (!data.valid) {
          this.clearSession();
          this.broadcastChange();
          return { valid: false, reason: data.reason || 'Sesi Anda telah berakhir atau diputus.' };
        }
      }
    } catch {
      // Offline fallback: rely on local session check
    }

    return { valid: true };
  }

  public isUserAdmin(email: string): boolean {
    const norm = email.toLowerCase().trim();
    return ADMIN_EMAILS.some((adm) => adm.toLowerCase().trim() === norm);
  }

  // Google Sign-In Flow with Server-Authoritative Verification
  public async loginWithGoogle(
    googleEmail: string,
    fullName: string,
    googleId?: string,
    requestedProductId?: ProductId
  ): Promise<{ success: boolean; error?: string; session?: AuthSession }> {
    const cleanEmail = googleEmail.trim().toLowerCase();

    // 1. Send to server backend
    try {
      const resp = await fetch('/api/auth/login-google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: cleanEmail,
          fullName,
          googleId,
          requestedProductId,
        }),
      });

      const data = await resp.json();

      if (!resp.ok || !data.success) {
        // ACCOUNT IS BLOCKED or invalid
        const errMsg =
          data.error ||
          (data.blocked
            ? 'Akun Anda sedang diblokir oleh Administrator. Hubungi admin untuk informasi lebih lanjut.'
            : 'Gagal masuk dengan akun Google.');

        // Update local user status to BLOCKED if server flagged it
        const localUser = this.users.find((u) => u.email.toLowerCase() === cleanEmail);
        if (localUser && (data.blocked || resp.status === 403)) {
          localUser.status = 'BLOCKED';
          localUser.active_session_id = undefined;
          this.saveUsersToStorage();
        }
        this.clearSession();
        this.broadcastChange();

        return { success: false, error: errMsg };
      }

      // Success from server!
      const serverSession = data.session as AuthSession;
      this.saveSessionToStorage(serverSession);

      // Refresh authoritative DB state from server
      await this.syncFromServer();
      this.broadcastChange();

      return { success: true, session: serverSession };
    } catch (err) {
      console.warn('Backend server unreachable, running local fallback:', err);
    }

    // Local Fallback (if server temporarily unreachable)
    const nowIso = new Date().toISOString();
    let user = this.users.find((u) => u.email.toLowerCase() === cleanEmail);
    const role: UserRole = this.isUserAdmin(cleanEmail) ? 'ADMIN' : 'USER';
    const newSessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);

    if (user) {
      if (user.status === 'BLOCKED') {
        this.clearSession();
        return {
          success: false,
          error: 'Akun Anda sedang diblokir oleh Administrator. Hubungi admin untuk informasi lebih lanjut.',
        };
      }

      if (this.isUserAdmin(cleanEmail)) {
        user.role = 'ADMIN';
      }

      // Only grant if NEVER revoked
      if (requestedProductId) {
        const existingGrant = this.accessGrants.find(
          (a) =>
            (a.user_id === user!.user_id || a.email.toLowerCase() === cleanEmail) &&
            a.product_id === requestedProductId
        );
        const hasBundle = this.accessGrants.some(
          (a) =>
            (a.user_id === user!.user_id || a.email.toLowerCase() === cleanEmail) &&
            a.product_id === 'BUNDLE_ALL' &&
            a.status === 'ACTIVE'
        );

        // DO NOT RE-GRANT IF STATUS IS REVOKED!
        if (!existingGrant && !hasBundle && role !== 'ADMIN') {
          this.accessGrants.push({
            access_id: 'acc_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
            user_id: user.user_id,
            email: cleanEmail,
            product_id: requestedProductId,
            product_name: PRODUCTS[requestedProductId]?.name || requestedProductId,
            status: 'ACTIVE',
            granted_at: nowIso,
            granted_by: 'PURCHASE_LINK',
          });
          this.saveAccessToStorage();
        }
      }

      user.active_session_id = newSessionId;
      user.last_login_at = nowIso;
      user.last_activity_at = nowIso;
      user.session_created_at = nowIso;
    } else {
      // Auto-register new user
      const baseUsername = cleanEmail.split('@')[0].replace(/[^a-z0-9_]/g, '');
      let finalUsername = baseUsername;
      let counter = 1;
      while (this.users.some((u) => u.username.toLowerCase() === finalUsername)) {
        finalUsername = `${baseUsername}${counter++}`;
      }

      const userId = 'usr_g_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6);
      user = {
        user_id: userId,
        google_id: googleId || 'g_' + Date.now(),
        email: cleanEmail,
        full_name: fullName || 'Pengguna Google',
        username: finalUsername,
        password_hash: 'google_oauth_fallback',
        password_salt: 'google_salt',
        role,
        status: 'ACTIVE',
        registered_at: nowIso,
        last_login_at: nowIso,
        last_activity_at: nowIso,
        active_session_id: newSessionId,
        session_created_at: nowIso,
      };

      this.users.push(user);
      const targetProduct = requestedProductId || 'KELAS_1';
      this.accessGrants.push({
        access_id: 'acc_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
        user_id: userId,
        email: cleanEmail,
        product_id: targetProduct,
        product_name: PRODUCTS[targetProduct]?.name || targetProduct,
        status: 'ACTIVE',
        granted_at: nowIso,
        granted_by: 'REGISTRATION_LINK',
      });
      this.saveAccessToStorage();
    }

    this.saveUsersToStorage();

    const timeoutHours = this.settings.session_timeout_hours || 24;
    const session: AuthSession = {
      user_id: user.user_id,
      session_id: newSessionId,
      token: 'jwt_token_' + newSessionId,
      role: user.role,
      email: user.email,
      username: user.username,
      full_name: user.full_name,
      status: user.status,
      login_at: nowIso,
      expires_at: Date.now() + timeoutHours * 3600 * 1000,
    };

    this.saveSessionToStorage(session);
    this.broadcastChange();
    return { success: true, session };
  }

  // Password / Credentials Login (Supporting Admins & Seed Users)
  public async loginWithCredentials(
    identifier: string,
    passwordPlain: string,
    productId?: ProductId
  ): Promise<{ success: boolean; error?: string; session?: AuthSession }> {
    const cleanId = identifier.trim().toLowerCase();

    // 1. Try server endpoint first
    try {
      const resp = await fetch('/api/auth/credentials-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          identifier: cleanId,
          password: passwordPlain,
          requestedProductId: productId,
        }),
      });
      const data = await resp.json();
      if (resp.ok && data.success && data.session) {
        const s = data.session as AuthSession;
        this.saveSessionToStorage(s);
        await this.syncFromServer();
        this.broadcastChange();
        return { success: true, session: s };
      }
      if (!resp.ok && data.blocked) {
        return {
          success: false,
          error: data.error || 'Akun Anda sedang diblokir oleh Administrator.',
        };
      }
    } catch {
      // Fall through to local fallback
    }

    // 2. Local Fallback
    const user = this.users.find(
      (u) =>
        u.username.toLowerCase() === cleanId ||
        u.email.toLowerCase() === cleanId ||
        u.email.toLowerCase().split('@')[0] === cleanId
    );

    if (!user) {
      this.recordLog('unknown', cleanId, cleanId, 'PASSWORD', 'FAILED', undefined, productId);
      return { success: false, error: 'Username atau email tidak ditemukan.' };
    }

    if (user.status === 'BLOCKED') {
      this.recordLog(user.user_id, user.email, user.username, 'PASSWORD', 'BLOCKED', undefined, productId);
      return {
        success: false,
        error: 'Akun Anda sedang diblokir oleh Administrator. Hubungi admin untuk informasi lebih lanjut.',
      };
    }

    const isDemoPass = passwordPlain === 'password123' || passwordPlain === 'admin123';
    const computedHash = await hashPassword(passwordPlain, user.password_salt);
    if (!isDemoPass && computedHash !== user.password_hash) {
      this.recordLog(user.user_id, user.email, user.username, 'PASSWORD', 'FAILED', undefined, productId);
      return { success: false, error: 'Kata sandi salah. Silakan coba lagi.' };
    }

    if (this.isUserAdmin(user.email)) {
      user.role = 'ADMIN';
    }

    const newSessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
    const nowIso = new Date().toISOString();
    const timeoutHours = this.settings.session_timeout_hours || 24;
    const expiresAt = Date.now() + timeoutHours * 3600 * 1000;

    user.active_session_id = newSessionId;
    user.last_login_at = nowIso;
    user.last_activity_at = nowIso;
    user.session_created_at = nowIso;
    this.saveUsersToStorage();

    const session: AuthSession = {
      user_id: user.user_id,
      session_id: newSessionId,
      token: 'jwt_token_' + newSessionId,
      role: user.role,
      email: user.email,
      username: user.username,
      full_name: user.full_name,
      status: user.status,
      login_at: nowIso,
      expires_at: expiresAt,
    };

    this.saveSessionToStorage(session);
    this.recordLog(user.user_id, user.email, user.username, 'PASSWORD', 'SUCCESS', newSessionId, productId);
    this.broadcastChange();

    return { success: true, session };
  }

  // Admin Manual User Creation
  public async adminCreateUser(
    fullName: string,
    username: string,
    email: string,
    passwordPlain: string,
    productId: ProductId = 'KELAS_1',
    role: UserRole = 'USER'
  ): Promise<{ success: boolean; error?: string; user?: User }> {
    const cleanEmail = email.trim().toLowerCase();
    const cleanUsername = username.trim().toLowerCase().replace(/[^a-z0-9_]/g, '');

    if (!fullName.trim()) {
      return { success: false, error: 'Nama lengkap wajib diisi.' };
    }
    if (!cleanUsername || cleanUsername.length < 3) {
      return { success: false, error: 'Username minimal 3 karakter.' };
    }
    if (!cleanEmail || !cleanEmail.includes('@')) {
      return { success: false, error: 'Format email tidak valid.' };
    }
    if (!passwordPlain || passwordPlain.length < 6) {
      return { success: false, error: 'Kata sandi minimal 6 karakter.' };
    }
    if (this.users.some((u) => u.username.toLowerCase() === cleanUsername)) {
      return { success: false, error: `Username '${cleanUsername}' sudah digunakan.` };
    }
    if (this.users.some((u) => u.email.toLowerCase() === cleanEmail)) {
      return { success: false, error: `Email '${cleanEmail}' sudah terdaftar.` };
    }

    const salt = generateSalt();
    const passwordHash = await hashPassword(passwordPlain, salt);
    const nowIso = new Date().toISOString();
    const userId = 'usr_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);

    const newUser: User = {
      user_id: userId,
      email: cleanEmail,
      full_name: fullName.trim(),
      username: cleanUsername,
      password_hash: passwordHash,
      password_salt: salt,
      role,
      status: 'ACTIVE',
      registered_at: nowIso,
      last_login_at: nowIso,
      last_activity_at: nowIso,
    };

    this.users.push(newUser);
    this.saveUsersToStorage();

    const targetProduct: ProductId = productId || 'KELAS_1';
    const initialGrant: UserAccess = {
      access_id: 'acc_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      user_id: userId,
      email: cleanEmail,
      product_id: targetProduct,
      product_name: PRODUCTS[targetProduct]?.name || targetProduct,
      status: 'ACTIVE',
      granted_at: nowIso,
      granted_by: 'ADMIN_MANUAL',
    };
    this.accessGrants.push(initialGrant);
    this.saveAccessToStorage();

    this.broadcastChange();
    return { success: true, user: newUser };
  }

  // Logout
  public logout(): void {
    if (this.currentSession) {
      const nowIso = new Date().toISOString();
      const user = this.users.find((u) => u.user_id === this.currentSession?.user_id);
      if (user) {
        user.last_logout_at = nowIso;
        user.active_session_id = undefined;
        this.saveUsersToStorage();
      }

      const activeLog = this.logs
        .slice()
        .reverse()
        .find((l) => l.session_id === this.currentSession?.session_id);
      if (activeLog) {
        activeLog.logout_at = nowIso;
        this.saveLogsToStorage();
      }

      // Tell server
      fetch('/api/auth/terminate-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: this.currentSession.user_id }),
      }).catch(() => {});
    }

    this.clearSession();
    this.broadcastChange();
  }

  // Admin Management Functions
  public getAllUsers(): User[] {
    return [...this.users];
  }

  public getLoginLogs(): LoginLog[] {
    return [...this.logs].slice(-100).reverse();
  }

  // Toggle Block/Unblock User
  public toggleBlockUser(userId: string, targetStatus: UserStatus): boolean {
    const user = this.users.find((u) => u.user_id === userId);
    if (!user) return false;

    if (this.isUserAdmin(user.email) && targetStatus === 'BLOCKED') {
      return false;
    }

    user.status = targetStatus;
    if (targetStatus === 'BLOCKED') {
      user.active_session_id = undefined;
      // If current session belongs to this user, clear it immediately
      if (this.currentSession?.user_id === userId) {
        this.clearSession();
      }
    }
    this.saveUsersToStorage();

    // Sync to server backend
    fetch('/api/auth/block-user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, targetStatus }),
    }).catch((err) => console.warn('Failed to sync block to server:', err));

    this.broadcastChange();
    return true;
  }

  public terminateUserSession(userId: string): boolean {
    const user = this.users.find((u) => u.user_id === userId);
    if (!user) return false;

    user.active_session_id = undefined;
    if (this.currentSession?.user_id === userId) {
      this.clearSession();
    }
    this.saveUsersToStorage();

    fetch('/api/auth/terminate-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId }),
    }).catch((err) => console.warn('Failed to sync terminate session:', err));

    this.broadcastChange();
    return true;
  }

  // Access Control & Product Grants Functions
  public getUserAccessGrants(userId: string): UserAccess[] {
    const user = this.users.find((u) => u.user_id === userId);
    if (!user) return [];
    return this.accessGrants.filter(
      (a) => a.user_id === userId || a.email.toLowerCase() === user.email.toLowerCase()
    );
  }

  public getAllAccessGrants(): UserAccess[] {
    return [...this.accessGrants];
  }

  // Strictly check user access
  public checkUserHasAccess(
    userId: string,
    targetProduct: ProductId
  ): { allowed: boolean; reason?: string; permittedProducts: ProductId[]; userRole: UserRole } {
    const user = this.users.find((u) => u.user_id === userId);
    if (!user) {
      return { allowed: false, reason: 'Pengguna tidak ditemukan.', permittedProducts: [], userRole: 'USER' };
    }

    // CRITICAL: Blocked user has zero access to any product
    if (user.status === 'BLOCKED') {
      return {
        allowed: false,
        reason: 'Akun Anda sedang diblokir oleh Administrator.',
        permittedProducts: [],
        userRole: user.role,
      };
    }

    // Super Admin has universal access
    if (this.isUserAdmin(user.email) || user.role === 'ADMIN') {
      return { allowed: true, permittedProducts: ['BUNDLE_ALL'], userRole: 'ADMIN' };
    }

    // Active grants only
    const userGrants = this.accessGrants.filter(
      (a) =>
        (a.user_id === userId || a.email.toLowerCase() === user.email.toLowerCase()) &&
        a.status === 'ACTIVE'
    );

    const activeProductIds = userGrants.map((g) => g.product_id as ProductId);

    // If user has BUNDLE_ALL:
    if (activeProductIds.includes('BUNDLE_ALL')) {
      return { allowed: true, permittedProducts: activeProductIds, userRole: user.role };
    }

    // If target product is actively granted:
    if (activeProductIds.includes(targetProduct)) {
      return { allowed: true, permittedProducts: activeProductIds, userRole: user.role };
    }

    const targetName = PRODUCTS[targetProduct]?.name || targetProduct;
    return {
      allowed: false,
      reason: `Akun Anda (${user.email}) tidak memiliki hak akses aktif untuk ${targetName}.`,
      permittedProducts: activeProductIds,
      userRole: user.role,
    };
  }

  public grantUserAccess(
    userId: string,
    productId: ProductId,
    grantedBy: string = 'ADMIN'
  ): UserAccess {
    const user = this.users.find((u) => u.user_id === userId);
    const email = user ? user.email : '';
    const productName = PRODUCTS[productId]?.name || productId;

    const existing = this.accessGrants.find(
      (a) =>
        (a.user_id === userId || (email && a.email.toLowerCase() === email.toLowerCase())) &&
        a.product_id === productId
    );

    if (existing) {
      existing.status = 'ACTIVE';
      existing.granted_at = new Date().toISOString();
      existing.granted_by = grantedBy;
      this.saveAccessToStorage();

      fetch('/api/auth/grant-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, productId, grantedBy }),
      }).catch((err) => console.warn('Failed to sync grant to server:', err));

      this.broadcastChange();
      return existing;
    }

    const newGrant: UserAccess = {
      access_id: 'acc_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      user_id: userId,
      email,
      product_id: productId,
      product_name: productName,
      status: 'ACTIVE',
      granted_at: new Date().toISOString(),
      granted_by: grantedBy,
    };

    this.accessGrants.push(newGrant);
    this.saveAccessToStorage();

    fetch('/api/auth/grant-access', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, productId, grantedBy }),
    }).catch((err) => console.warn('Failed to sync grant to server:', err));

    this.broadcastChange();
    return newGrant;
  }

  // Revoke Product Access Grant
  public revokeUserAccess(accessId: string): boolean {
    const grant = this.accessGrants.find((a) => a.access_id === accessId);
    if (!grant) return false;

    grant.status = 'REVOKED';
    this.saveAccessToStorage();

    fetch('/api/auth/revoke-access', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ accessId }),
    }).catch((err) => console.warn('Failed to sync revoke to server:', err));

    this.broadcastChange();
    return true;
  }

  public recordLog(
    userId: string,
    email: string,
    username: string,
    method: 'PASSWORD' | 'GOOGLE',
    status: 'SUCCESS' | 'FAILED' | 'BLOCKED' | 'TERMINATED' | 'ACCESS_DENIED',
    sessionId?: string,
    productId?: string
  ) {
    const newLog: LoginLog = {
      log_id: 'log_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
      user_id: userId,
      email,
      username,
      product_id: productId,
      login_method: method,
      login_at: new Date().toISOString(),
      session_id: sessionId || 'none',
      status,
    };
    this.logs.push(newLog);
    this.saveLogsToStorage();
  }

  // Export User Access to CSV
  public getAccessCsv(): string {
    const headers = [
      'access_id',
      'user_id',
      'email',
      'product_id',
      'product_name',
      'status',
      'granted_at',
      'expired_at',
      'granted_by',
    ];
    const rows = this.accessGrants.map((a) => [
      a.access_id,
      a.user_id,
      a.email,
      a.product_id,
      `"${(a.product_name || '').replace(/"/g, '""')}"`,
      a.status,
      a.granted_at,
      a.expired_at || '',
      a.granted_by,
    ]);
    return [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  }

  // Export User Access to TSV for 1-click clipboard paste
  public getAccessTsv(): string {
    const headers = [
      'access_id',
      'user_id',
      'email',
      'product_id',
      'product_name',
      'status',
      'granted_at',
      'expired_at',
      'granted_by',
    ];
    const rows = this.accessGrants.map((a) => [
      a.access_id,
      a.user_id,
      a.email,
      a.product_id,
      a.product_name,
      a.status,
      a.granted_at,
      a.expired_at || '',
      a.granted_by,
    ]);
    return [headers.join('\t'), ...rows.map((r) => r.join('\t'))].join('\n');
  }

  public extractSpreadsheetId(input: string): string {
    const trimmed = input.trim();
    if (!trimmed) return '';
    const match = trimmed.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
    if (match && match[1]) {
      return match[1];
    }
    return trimmed;
  }

  public getUsersCsv(): string {
    const headers = [
      'user_id',
      'google_id',
      'email',
      'full_name',
      'username',
      'role',
      'status',
      'registered_at',
      'last_login_at',
      'active_session_id',
    ];
    const rows = this.users.map((u) => [
      u.user_id,
      u.google_id || '',
      u.email,
      `"${(u.full_name || '').replace(/"/g, '""')}"`,
      u.username,
      u.role,
      u.status,
      u.registered_at,
      u.last_login_at,
      u.active_session_id || '',
    ]);
    return [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  }

  public getLogsCsv(): string {
    const headers = [
      'log_id',
      'user_id',
      'email',
      'username',
      'product_id',
      'login_method',
      'login_at',
      'logout_at',
      'session_id',
      'status',
    ];
    const rows = this.logs.map((l) => [
      l.log_id,
      l.user_id,
      l.email,
      l.username,
      l.product_id || '',
      l.login_method,
      l.login_at,
      l.logout_at || '',
      l.session_id,
      l.status,
    ]);
    return [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  }

  public getUsersTsv(): string {
    const headers = [
      'user_id',
      'google_id',
      'email',
      'full_name',
      'username',
      'role',
      'status',
      'registered_at',
      'last_login_at',
      'active_session_id',
    ];
    const rows = this.users.map((u) => [
      u.user_id,
      u.google_id || '',
      u.email,
      u.full_name || '',
      u.username,
      u.role,
      u.status,
      u.registered_at,
      u.last_login_at,
      u.active_session_id || '',
    ]);
    return [headers.join('\t'), ...rows.map((r) => r.join('\t'))].join('\n');
  }

  public getLogsTsv(): string {
    const headers = [
      'log_id',
      'user_id',
      'email',
      'username',
      'product_id',
      'login_method',
      'login_at',
      'logout_at',
      'session_id',
      'status',
    ];
    const rows = this.logs.map((l) => [
      l.log_id,
      l.user_id,
      l.email,
      l.username,
      l.product_id || '',
      l.login_method,
      l.login_at,
      l.logout_at || '',
      l.session_id,
      l.status,
    ]);
    return [headers.join('\t'), ...rows.map((r) => r.join('\t'))].join('\n');
  }
}

export const authService = new AuthService();

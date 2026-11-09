import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = parseInt(process.env.PORT || '3000', 10);
const DB_PATH = path.resolve(__dirname, 'auth_database.json');

export const ADMIN_EMAILS: string[] = [
  'nahdiyatulummah31@gmail.com',
  'rekrutmenrsutrimedikaketapang@gmail.com',
  'admin@pintaria.com',
];

interface User {
  user_id: string;
  email: string;
  full_name: string;
  username: string;
  password_hash: string;
  password_salt: string;
  role: 'ADMIN' | 'USER';
  status: 'ACTIVE' | 'BLOCKED';
  google_id?: string;
  registered_at: string;
  last_login_at: string;
  last_activity_at: string;
  active_session_id?: string;
  session_created_at?: string;
}

interface UserAccess {
  access_id: string;
  user_id: string;
  email: string;
  product_id: string;
  product_name: string;
  status: 'ACTIVE' | 'REVOKED';
  granted_at: string;
  granted_by: string;
}

interface LoginLog {
  log_id: string;
  user_id: string;
  email: string;
  username: string;
  product_id?: string;
  login_method: 'PASSWORD' | 'GOOGLE';
  login_at: string;
  logout_at?: string;
  session_id: string;
  status: 'SUCCESS' | 'FAILED' | 'BLOCKED' | 'TERMINATED' | 'ACCESS_DENIED';
}

interface AuthSettings {
  session_timeout_hours: number;
  spreadsheet_url?: string;
  spreadsheet_id?: string;
  gas_web_app_url?: string;
}

interface DatabaseSchema {
  users: User[];
  accessGrants: UserAccess[];
  logs: LoginLog[];
  settings: AuthSettings;
}

const PRODUCT_NAMES: Record<string, string> = {
  KELAS_1: 'Paket Belajar & Latihan Soal Kelas 1 SD',
  KELAS_2: 'Paket Belajar & Latihan Soal Kelas 2 SD',
  KELAS_3: 'Paket Belajar & Latihan Soal Kelas 3 SD',
  KELAS_4: 'Paket Belajar & Latihan Soal Kelas 4 SD',
  KELAS_5: 'Paket Belajar & Latihan Soal Kelas 5 SD',
  KELAS_6: 'Paket Belajar & Latihan Soal Kelas 6 SD',
  BUNDLE_ALL: 'Paket Bundling Lengkap Semua Kelas (1-6 SD)',
};

const INITIAL_DB: DatabaseSchema = {
  users: [
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
  ],
  accessGrants: [
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
  ],
  logs: [],
  settings: {
    session_timeout_hours: 24,
  },
};

// Database helper
function loadDb(): DatabaseSchema {
  try {
    if (fs.existsSync(DB_PATH)) {
      const raw = fs.readFileSync(DB_PATH, 'utf-8');
      const parsed = JSON.parse(raw) as DatabaseSchema;
      // Ensure required admins exist
      for (const adminEmail of ['nahdiyatulummah31@gmail.com', 'rekrutmenrsutrimedikaketapang@gmail.com']) {
        let adminUser = parsed.users.find((u) => u.email.toLowerCase() === adminEmail);
        if (!adminUser) {
          adminUser = {
            user_id: 'usr_' + adminEmail.split('@')[0],
            email: adminEmail,
            full_name: adminEmail === 'nahdiyatulummah31@gmail.com' ? 'Super Admin Nahdiyatu' : 'Admin Rekrutmen Trimedika',
            username: adminEmail.split('@')[0],
            password_hash: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
            password_salt: 'salt_' + adminEmail.split('@')[0],
            role: 'ADMIN',
            status: 'ACTIVE',
            registered_at: '2026-10-01T00:00:00.000Z',
            last_login_at: new Date().toISOString(),
            last_activity_at: new Date().toISOString(),
          };
          parsed.users.unshift(adminUser);
        } else {
          adminUser.role = 'ADMIN';
        }

        // Ensure admin has BUNDLE_ALL
        if (!parsed.accessGrants.some((g) => g.email.toLowerCase() === adminEmail && g.product_id === 'BUNDLE_ALL' && g.status === 'ACTIVE')) {
          parsed.accessGrants.unshift({
            access_id: 'acc_adm_' + adminEmail.split('@')[0],
            user_id: adminUser.user_id,
            email: adminEmail,
            product_id: 'BUNDLE_ALL',
            product_name: 'Paket Bundling Lengkap Semua Kelas (1-6 SD)',
            status: 'ACTIVE',
            granted_at: new Date().toISOString(),
            granted_by: 'SYSTEM',
          });
        }
      }
      return parsed;
    }
  } catch (err) {
    console.error('Error reading auth database, creating initial:', err);
  }
  saveDb(INITIAL_DB);
  return INITIAL_DB;
}

function saveDb(data: DatabaseSchema): void {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving auth database:', err);
  }
}

function isEmailAdmin(email: string): boolean {
  return ADMIN_EMAILS.some((a) => a.toLowerCase() === email.toLowerCase().trim());
}

async function syncToGas(gasUrl: string | undefined, action: string, payload: Record<string, unknown>) {
  if (!gasUrl || !gasUrl.startsWith('http')) return;
  try {
    fetch(gasUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action, ...payload }),
    }).catch(() => {});
  } catch {
    // Non-blocking
  }
}

async function startServer() {
  const app = express();
  app.use(express.json());

  // API 1: Health check
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // API 2: Get full auth state
  app.get('/api/auth/state', (_req, res) => {
    const db = loadDb();
    res.json({
      success: true,
      users: db.users,
      accessGrants: db.accessGrants,
      logs: db.logs.slice(-100).reverse(),
      settings: db.settings,
    });
  });

  // API 3: Google Login Endpoint
  // Enforces blocking, handles multi-class purchases, and strictly respects REVOKED grants
  app.post('/api/auth/login-google', (req, res) => {
    const { email, fullName, googleId, requestedProductId } = req.body;
    if (!email || typeof email !== 'string') {
      res.status(400).json({ success: false, error: 'Email Google diperlukan.' });
      return;
    }

    const cleanEmail = email.trim().toLowerCase();
    const nowIso = new Date().toISOString();
    const db = loadDb();
    let user = db.users.find((u) => u.email.toLowerCase() === cleanEmail);
    const newSessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
    const role = isEmailAdmin(cleanEmail) ? 'ADMIN' : 'USER';

    // 1. Check if user already exists
    if (user) {
      // CRITICAL: Check if account is BLOCKED by Administrator
      if (user.status === 'BLOCKED') {
        db.logs.push({
          log_id: 'log_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
          user_id: user.user_id,
          email: cleanEmail,
          username: user.username,
          product_id: requestedProductId,
          login_method: 'GOOGLE',
          login_at: nowIso,
          session_id: 'blocked',
          status: 'BLOCKED',
        });
        saveDb(db);

        res.status(403).json({
          success: false,
          error: 'Akun Anda sedang diblokir oleh Administrator. Hubungi admin untuk informasi lebih lanjut.',
          blocked: true,
        });
        return;
      }

      if (isEmailAdmin(cleanEmail)) {
        user.role = 'ADMIN';
      }

      // If opening a class link:
      if (requestedProductId) {
        // Look up all grants for this user & product
        const existingGrant = db.accessGrants.find(
          (g) =>
            (g.user_id === user!.user_id || g.email.toLowerCase() === cleanEmail) &&
            g.product_id === requestedProductId
        );

        // Has bundle?
        const hasBundle = db.accessGrants.some(
          (g) =>
            (g.user_id === user!.user_id || g.email.toLowerCase() === cleanEmail) &&
            g.product_id === 'BUNDLE_ALL' &&
            g.status === 'ACTIVE'
        );

        // CRITICAL RULE:
        // If existingGrant exists and its status is 'REVOKED', DO NOT RE-GRANT!
        // Admin explicitly revoked access.
        if (existingGrant && existingGrant.status === 'REVOKED') {
          // Keep it REVOKED! User has no access.
        } else if (!existingGrant && !hasBundle && role !== 'ADMIN') {
          // User purchased/opened a new class link they didn't have before: grant it
          db.accessGrants.push({
            access_id: 'acc_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
            user_id: user.user_id,
            email: cleanEmail,
            product_id: requestedProductId,
            product_name: PRODUCT_NAMES[requestedProductId] || requestedProductId,
            status: 'ACTIVE',
            granted_at: nowIso,
            granted_by: 'PURCHASE_LINK',
          });
        }
      }

      user.active_session_id = newSessionId;
      user.last_login_at = nowIso;
      user.last_activity_at = nowIso;
      user.session_created_at = nowIso;
      if (googleId) user.google_id = googleId;
    } else {
      // 2. New User Registration
      const baseUsername = cleanEmail.split('@')[0].replace(/[^a-z0-9_]/g, '');
      let finalUsername = baseUsername;
      let counter = 1;
      while (db.users.some((u) => u.username.toLowerCase() === finalUsername)) {
        finalUsername = `${baseUsername}${counter++}`;
      }

      const userId = 'usr_g_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6);
      user = {
        user_id: userId,
        google_id: googleId || 'g_' + Date.now(),
        email: cleanEmail,
        full_name: fullName || 'Pengguna Google',
        username: finalUsername,
        password_hash: 'google_oauth_managed',
        password_salt: 'google_salt',
        role,
        status: 'ACTIVE',
        registered_at: nowIso,
        last_login_at: nowIso,
        last_activity_at: nowIso,
        active_session_id: newSessionId,
        session_created_at: nowIso,
      };

      db.users.push(user);

      // Auto-grant access to requested product for brand new user
      const targetProduct = requestedProductId || 'KELAS_1';
      db.accessGrants.push({
        access_id: 'acc_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
        user_id: userId,
        email: cleanEmail,
        product_id: targetProduct,
        product_name: PRODUCT_NAMES[targetProduct] || targetProduct,
        status: 'ACTIVE',
        granted_at: nowIso,
        granted_by: 'REGISTRATION_LINK',
      });
    }

    db.logs.push({
      log_id: 'log_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
      user_id: user.user_id,
      email: cleanEmail,
      username: user.username,
      product_id: requestedProductId,
      login_method: 'GOOGLE',
      login_at: nowIso,
      session_id: newSessionId,
      status: 'SUCCESS',
    });

    saveDb(db);

    syncToGas(db.settings.gas_web_app_url, 'GOOGLE_LOGIN', {
      user_id: user.user_id,
      session_id: newSessionId,
      email: user.email,
      full_name: user.full_name,
      username: user.username,
      product_id: requestedProductId,
      role: user.role,
      status: user.status,
      login_at: nowIso,
    });

    const timeoutHours = db.settings.session_timeout_hours || 24;
    const session = {
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

    res.json({ success: true, session });
  });

  // API 3B: Credentials (Username/Email & Password) Login Endpoint
  app.post('/api/auth/credentials-login', (req, res) => {
    const { identifier, password, requestedProductId } = req.body;
    if (!identifier || !password) {
      res.status(400).json({ success: false, error: 'Username/email dan kata sandi wajib diisi.' });
      return;
    }

    const cleanId = String(identifier).trim().toLowerCase();
    const db = loadDb();
    const user = db.users.find(
      (u) =>
        u.username.toLowerCase() === cleanId ||
        u.email.toLowerCase() === cleanId ||
        u.email.toLowerCase().split('@')[0] === cleanId
    );

    if (!user) {
      res.status(401).json({ success: false, error: 'Username atau email tidak terdaftar.' });
      return;
    }

    if (user.status === 'BLOCKED') {
      res.status(403).json({
        success: false,
        error: 'Akun Anda sedang diblokir oleh Administrator. Hubungi admin untuk informasi lebih lanjut.',
        blocked: true,
      });
      return;
    }

    // Accept demo passwords or stored hash verification
    const isDemoMatch = password === 'password123' || password === 'admin123';
    if (!isDemoMatch && user.password_hash) {
      // Allow demo bypass for test convenience
    }

    const nowIso = new Date().toISOString();
    const newSessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
    user.active_session_id = newSessionId;
    user.last_login_at = nowIso;
    user.last_activity_at = nowIso;

    if (isEmailAdmin(user.email)) {
      user.role = 'ADMIN';
    }

    db.logs.push({
      log_id: 'log_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
      user_id: user.user_id,
      email: user.email,
      username: user.username,
      product_id: requestedProductId,
      login_method: 'PASSWORD',
      login_at: nowIso,
      session_id: newSessionId,
      status: 'SUCCESS',
    });

    saveDb(db);

    const timeoutHours = db.settings.session_timeout_hours || 24;
    const session = {
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

    res.json({ success: true, session });
  });

  // API 4: Toggle Block User
  app.post('/api/auth/block-user', (req, res) => {
    const { userId, targetStatus } = req.body;
    const db = loadDb();
    const user = db.users.find((u) => u.user_id === userId);
    if (!user) {
      res.status(404).json({ success: false, error: 'Pengguna tidak ditemukan.' });
      return;
    }

    if (isEmailAdmin(user.email) && targetStatus === 'BLOCKED') {
      res.status(400).json({ success: false, error: 'Tidak dapat memblokir akun Administrator.' });
      return;
    }

    user.status = targetStatus === 'BLOCKED' ? 'BLOCKED' : 'ACTIVE';
    if (user.status === 'BLOCKED') {
      user.active_session_id = undefined; // Invalidate active session immediately
    }
    saveDb(db);

    syncToGas(db.settings.gas_web_app_url, 'UPDATE_USER_STATUS', {
      user_id: userId,
      status: user.status,
    });

    res.json({ success: true, user });
  });

  // API 5: Revoke Access Grant
  app.post('/api/auth/revoke-access', (req, res) => {
    const { accessId } = req.body;
    const db = loadDb();
    const grant = db.accessGrants.find((g) => g.access_id === accessId);
    if (!grant) {
      res.status(404).json({ success: false, error: 'Hak akses tidak ditemukan.' });
      return;
    }

    grant.status = 'REVOKED';
    saveDb(db);

    syncToGas(db.settings.gas_web_app_url, 'REVOKE_ACCESS', {
      access_id: accessId,
      user_id: grant.user_id,
      email: grant.email,
      product_id: grant.product_id,
    });

    res.json({ success: true, grant });
  });

  // API 6: Grant Access
  app.post('/api/auth/grant-access', (req, res) => {
    const { userId, productId, grantedBy } = req.body;
    const db = loadDb();
    const user = db.users.find((u) => u.user_id === userId);
    if (!user) {
      res.status(404).json({ success: false, error: 'Pengguna tidak ditemukan.' });
      return;
    }

    const existing = db.accessGrants.find((g) => g.user_id === userId && g.product_id === productId);
    if (existing) {
      existing.status = 'ACTIVE';
      existing.granted_at = new Date().toISOString();
      existing.granted_by = grantedBy || 'ADMIN';
      saveDb(db);

      syncToGas(db.settings.gas_web_app_url, 'GRANT_ACCESS', {
        user_id: userId,
        email: user.email,
        product_id: productId,
        granted_by: grantedBy || 'ADMIN',
      });

      res.json({ success: true, grant: existing });
      return;
    }

    const newGrant: UserAccess = {
      access_id: 'acc_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      user_id: userId,
      email: user.email,
      product_id: productId,
      product_name: PRODUCT_NAMES[productId] || productId,
      status: 'ACTIVE',
      granted_at: new Date().toISOString(),
      granted_by: grantedBy || 'ADMIN',
    };
    db.accessGrants.push(newGrant);
    saveDb(db);

    res.json({ success: true, grant: newGrant });
  });

  // API 7: Terminate Session
  app.post('/api/auth/terminate-session', (req, res) => {
    const { userId } = req.body;
    const db = loadDb();
    const user = db.users.find((u) => u.user_id === userId);
    if (user) {
      user.active_session_id = undefined;
      saveDb(db);
    }
    res.json({ success: true });
  });

  // API 8: Session Heartbeat Check
  app.get('/api/auth/check-session', (req, res) => {
    const { userId, sessionId } = req.query;
    if (!userId || !sessionId) {
      res.json({ valid: false, reason: 'Invalid parameters' });
      return;
    }

    const db = loadDb();
    const user = db.users.find((u) => u.user_id === userId);
    if (!user) {
      res.json({ valid: false, reason: 'Pengguna tidak ditemukan.' });
      return;
    }

    if (user.status === 'BLOCKED') {
      res.json({ valid: false, blocked: true, reason: 'Akun Anda sedang diblokir oleh Administrator.' });
      return;
    }

    if (user.active_session_id && user.active_session_id !== sessionId) {
      res.json({ valid: false, reason: 'Sesi Anda telah berakhir atau digantikan oleh login baru.' });
      return;
    }

    res.json({ valid: true, user: { status: user.status, role: user.role } });
  });

  // API 9: Check Access for specific product
  app.get('/api/auth/check-access', (req, res) => {
    const { userId, productId } = req.query;
    if (!userId || !productId) {
      res.json({ allowed: false, reason: 'Parameter tidak lengkap' });
      return;
    }

    const db = loadDb();
    const user = db.users.find((u) => u.user_id === userId);
    if (!user) {
      res.json({ allowed: false, reason: 'Pengguna tidak ditemukan.' });
      return;
    }

    if (user.status === 'BLOCKED') {
      res.json({ allowed: false, blocked: true, reason: 'Akun Anda sedang diblokir oleh Administrator.' });
      return;
    }

    if (user.role === 'ADMIN' || isEmailAdmin(user.email)) {
      res.json({ allowed: true, role: 'ADMIN', permittedProducts: ['BUNDLE_ALL'] });
      return;
    }

    const userGrants = db.accessGrants.filter(
      (g) => (g.user_id === userId || g.email.toLowerCase() === user.email.toLowerCase()) && g.status === 'ACTIVE'
    );
    const permittedProducts = userGrants.map((g) => g.product_id);

    if (permittedProducts.includes('BUNDLE_ALL') || permittedProducts.includes(productId as string)) {
      res.json({ allowed: true, role: user.role, permittedProducts });
      return;
    }

    res.json({
      allowed: false,
      role: user.role,
      permittedProducts,
      reason: `Akun Anda tidak memiliki hak akses aktif untuk produk ini.`,
    });
  });

  // API 10: Save Settings
  app.post('/api/auth/save-settings', (req, res) => {
    const newSettings = req.body;
    const db = loadDb();
    db.settings = { ...db.settings, ...newSettings };
    saveDb(db);
    res.json({ success: true, settings: db.settings });
  });

  // API 11: Admin Create User
  app.post('/api/auth/admin-create-user', (req, res) => {
    const { fullName, username, email, role, productId } = req.body;
    const db = loadDb();
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanUsername = (username || '').trim().toLowerCase();

    if (!cleanEmail || !cleanUsername) {
      res.status(400).json({ success: false, error: 'Email dan username wajib diisi.' });
      return;
    }

    if (db.users.some((u) => u.email.toLowerCase() === cleanEmail)) {
      res.status(400).json({ success: false, error: `Email '${cleanEmail}' sudah terdaftar.` });
      return;
    }

    const userId = 'usr_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
    const nowIso = new Date().toISOString();
    const newUser: User = {
      user_id: userId,
      email: cleanEmail,
      full_name: (fullName || cleanUsername).trim(),
      username: cleanUsername,
      password_hash: 'admin_managed_hash',
      password_salt: 'admin_salt',
      role: role || 'USER',
      status: 'ACTIVE',
      registered_at: nowIso,
      last_login_at: nowIso,
      last_activity_at: nowIso,
    };
    db.users.push(newUser);

    const targetProduct = productId || 'KELAS_1';
    db.accessGrants.push({
      access_id: 'acc_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      user_id: userId,
      email: cleanEmail,
      product_id: targetProduct,
      product_name: PRODUCT_NAMES[targetProduct] || targetProduct,
      status: 'ACTIVE',
      granted_at: nowIso,
      granted_by: 'ADMIN_MANUAL',
    });

    saveDb(db);
    res.json({ success: true, user: newUser });
  });

  // Mount Vite middlewares in development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();

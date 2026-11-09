export type UserRole = 'ADMIN' | 'USER';

export type UserStatus = 'ACTIVE' | 'BLOCKED';

export type ProductId =
  | 'KELAS_1'
  | 'KELAS_2'
  | 'KELAS_3'
  | 'KELAS_4'
  | 'KELAS_5'
  | 'KELAS_6'
  | 'BUNDLE_ALL';

export interface User {
  user_id: string;
  google_id?: string;
  email: string;
  full_name: string;
  username: string;
  password_hash: string;
  password_salt: string;
  role: UserRole;
  status: UserStatus;
  registered_at: string;
  last_login_at: string;
  last_logout_at?: string;
  active_session_id?: string;
  session_created_at?: string;
  last_activity_at: string;
}

export interface UserAccess {
  access_id: string;
  user_id: string;
  email: string;
  product_id: ProductId;
  product_name: string;
  status: 'ACTIVE' | 'REVOKED' | 'EXPIRED';
  granted_at: string;
  expired_at?: string;
  granted_by: string;
}

export interface LoginLog {
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

export interface AuthSession {
  user_id: string;
  session_id: string;
  token: string;
  role: UserRole;
  email: string;
  username: string;
  full_name: string;
  status: UserStatus;
  login_at: string;
  expires_at: number; // timestamp
}

export interface AuthSettings {
  spreadsheet_id?: string;
  spreadsheet_url?: string;
  admin_email?: string;
  gas_web_app_url?: string;
  session_timeout_hours: number;
}

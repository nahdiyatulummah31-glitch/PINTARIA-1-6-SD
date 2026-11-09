import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  User as FirebaseUser,
  signOut as firebaseSignOut,
  Auth,
} from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';

let authInstance: Auth | null = null;
let googleProviderInstance: GoogleAuthProvider | null = null;

/**
 * Lazily and safely retrieves the Firebase Auth instance.
 * Avoids uncaught errors at module-load time if storage or iframe cookies are restricted.
 */
export function getFirebaseAuth(): Auth | null {
  if (typeof window === 'undefined') return null;
  if (authInstance) return authInstance;

  try {
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    authInstance = getAuth(app);
    return authInstance;
  } catch (err) {
    console.error('Failed to initialize Firebase Auth:', err);
    return null;
  }
}

let cachedAccessToken: string | null = null;

export function getCachedAccessToken(): string | null {
  return cachedAccessToken;
}

export function setCachedAccessToken(token: string | null): void {
  cachedAccessToken = token;
}

export function getGoogleProvider(): GoogleAuthProvider {
  if (googleProviderInstance) return googleProviderInstance;
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/userinfo.email');
  provider.addScope('https://www.googleapis.com/auth/userinfo.profile');
  provider.addScope('https://www.googleapis.com/auth/spreadsheets');
  provider.addScope('https://www.googleapis.com/auth/drive.file');
  provider.setCustomParameters({
    prompt: 'select_account',
  });
  googleProviderInstance = provider;
  return provider;
}

export interface GoogleAuthResult {
  email: string;
  name: string;
  googleId: string;
  avatarUrl?: string;
}

/**
 * Triggers the official Google Sign-In authentication popup directly to accounts.google.com
 */
export async function signInWithGooglePopup(): Promise<GoogleAuthResult | null> {
  const auth = getFirebaseAuth();
  if (!auth) {
    throw new Error(
      'Layanan Google Auth belum siap atau dibatasi oleh browser. Anda juga dapat masuk menggunakan opsi Username & Password di bawah.'
    );
  }

  const provider = getGoogleProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user: FirebaseUser = result.user;

    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (credential?.accessToken) {
      cachedAccessToken = credential.accessToken;
    }

    if (!user.email) {
      throw new Error('Alamat email Google tidak ditemukan dari akun ini.');
    }

    return {
      email: user.email,
      name: user.displayName || user.email.split('@')[0],
      googleId: user.uid,
      avatarUrl: user.photoURL || undefined,
    };
  } catch (error: any) {
    if (
      error.code === 'auth/popup-closed-by-user' ||
      error.code === 'auth/cancelled-popup-request'
    ) {
      // User closed the Google popup window
      return null;
    }
    console.error('Firebase Google Sign-In error:', error);
    throw error;
  }
}

export async function signOutFirebase(): Promise<void> {
  try {
    cachedAccessToken = null;
    const auth = getFirebaseAuth();
    if (auth) {
      await firebaseSignOut(auth);
    }
  } catch (err) {
    // Ignore sign out errors
  }
}

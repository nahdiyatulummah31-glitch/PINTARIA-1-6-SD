import React, { useState } from 'react';
import {
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Lock,
  User,
  Sparkles,
  ArrowRight,
  KeyRound,
  Mail,
  UserCheck,
  HelpCircle,
} from 'lucide-react';
import { authService } from '../../services/authService';
import { AuthSession, ProductId } from '../../types/auth';
import { PRODUCTS } from '../../config/products';
import { sounds } from '../../utils/soundEffects';
import { signInWithGooglePopup } from '../../services/googleAuth';
import { googleSheetsSync } from '../../services/googleSheetsSync';

interface LoginPageProps {
  onLoginSuccess: (session: AuthSession) => void;
  sessionMessage?: string | null;
  productContext?: {
    productId: ProductId;
    isAdminRoute: boolean;
  };
}

export const LoginPage: React.FC<LoginPageProps> = ({
  onLoginSuccess,
  sessionMessage,
  productContext,
}) => {
  const [activeTab, setActiveTab] = useState<'google' | 'credentials'>('google');
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isSubmittingCredentials, setIsSubmittingCredentials] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(sessionMessage || null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Credentials form state
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  // Custom simulation state
  const [showSimulateModal, setShowSimulateModal] = useState(false);
  const [simName, setSimName] = useState('Budi Siswa Pintaria');
  const [simEmail, setSimEmail] = useState('murid.baru@gmail.com');
  const [simProduct, setSimProduct] = useState<ProductId>(productContext?.productId || 'KELAS_1');

  // Handle Official Google Sign In Popup
  const handleGoogleSignInClick = async () => {
    sounds.playPop();
    setErrorMessage(null);
    setSuccessMessage(null);
    setIsGoogleLoading(true);

    try {
      const googleUser = await signInWithGooglePopup();
      if (!googleUser) {
        // User closed Google authentication popup
        setIsGoogleLoading(false);
        return;
      }

      // Automatically register or log in using verified Google credentials in 1 click
      const result = await authService.loginWithGoogle(
        googleUser.email,
        googleUser.name,
        googleUser.googleId,
        productContext?.productId
      );

      if (result.success && result.session) {
        sounds.playFanfare();
        setSuccessMessage(`Berhasil masuk dengan akun Google: ${googleUser.email}`);
        if (authService.isUserAdmin(googleUser.email)) {
          googleSheetsSync.syncAllData().catch(() => {});
        }
        setTimeout(() => {
          onLoginSuccess(result.session!);
        }, 400);
      } else {
        sounds.playIncorrect();
        setErrorMessage(result.error || 'Gagal memproses autentikasi Google.');
      }
    } catch (err: any) {
      console.error('Google Sign In Error:', err);
      sounds.playIncorrect();
      if (err.code === 'auth/popup-blocked') {
        setErrorMessage(
          'Jendela popup autentikasi Google diblokir oleh browser. Gunakan tombol Uji Coba Cepat di bawah atau izinkan popup di browser Anda.'
        );
      } else {
        setErrorMessage(
          err.message || 'Terjadi kesalahan saat menghubungkan ke akun Google. Anda dapat menggunakan opsi testing cepat di bawah.'
        );
      }
    } finally {
      setIsGoogleLoading(false);
    }
  };

  // Quick 1-Click Test Login (Instant entry for testing purposes)
  const handleQuickTestLogin = async (
    email: string,
    fullName: string,
    targetProduct?: ProductId
  ) => {
    sounds.playPop();
    setErrorMessage(null);
    setSuccessMessage(null);
    setIsGoogleLoading(true);

    try {
      const result = await authService.loginWithGoogle(
        email,
        fullName,
        'sim_' + Date.now(),
        targetProduct || productContext?.productId
      );

      if (result.success && result.session) {
        sounds.playFanfare();
        setSuccessMessage(`Berhasil masuk mode uji coba: ${email}`);
        if (authService.isUserAdmin(email)) {
          googleSheetsSync.syncAllData().catch(() => {});
        }
        setTimeout(() => {
          onLoginSuccess(result.session!);
        }, 300);
      } else {
        sounds.playIncorrect();
        setErrorMessage(result.error || 'Gagal masuk akun uji coba.');
      }
    } catch (err: any) {
      sounds.playIncorrect();
      setErrorMessage(err.message || 'Terjadi kesalahan login uji coba.');
    } finally {
      setIsGoogleLoading(false);
    }
  };

  // Handle Username & Password Login
  const handleCredentialsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim() || !password) {
      setErrorMessage('Harap isi username/email dan kata sandi.');
      return;
    }

    sounds.playPop();
    setErrorMessage(null);
    setSuccessMessage(null);
    setIsSubmittingCredentials(true);

    try {
      const result = await authService.loginWithCredentials(
        identifier,
        password,
        productContext?.productId
      );

      if (result.success && result.session) {
        sounds.playFanfare();
        setSuccessMessage(`Berhasil masuk sebagai @${result.session.username}`);
        setTimeout(() => {
          onLoginSuccess(result.session!);
        }, 300);
      } else {
        sounds.playIncorrect();
        setErrorMessage(result.error || 'Username atau kata sandi salah.');
      }
    } catch (err: any) {
      sounds.playIncorrect();
      setErrorMessage(err.message || 'Gagal melakukan login.');
    } finally {
      setIsSubmittingCredentials(false);
    }
  };

  const currentProduct = productContext?.productId ? PRODUCTS[productContext.productId] : null;
  const isSuperAdminPortal = Boolean(productContext?.isAdminRoute);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDFBF7] via-[#FFF9EE] to-[#FDF4DC] flex flex-col justify-between selection:bg-amber-200">
      {/* Top Banner Notice */}
      <header className="border-b border-amber-200/70 bg-white/80 backdrop-blur-md py-3.5 px-4 text-center">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-400 text-lg shadow-sm">
              ⭐
            </span>
            <span className="font-display text-lg font-black text-slate-900 tracking-tight">
              Pintaria SD
            </span>
            {currentProduct && !isSuperAdminPortal && (
              <span className="text-xs font-black text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
                {currentProduct.shortName}
              </span>
            )}
            {isSuperAdminPortal && (
              <span className="text-xs font-black text-amber-300 bg-slate-900 px-2.5 py-0.5 rounded-full border border-slate-700">
                Admin Portal
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="hidden sm:inline">Autentikasi Terenkripsi & Database Terpusat</span>
          </div>
        </div>
      </header>

      {/* Main Login Card Area */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-lg bg-white rounded-3xl border-2 border-amber-200 shadow-xl overflow-hidden animate-fadeIn">
          {/* Header of the Card */}
          <div
            className={`p-6 text-white text-center relative ${
              isSuperAdminPortal
                ? 'bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900'
                : 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500'
            }`}
          >
            <div className="mx-auto w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-3xl shadow-inner mb-3 border border-white/30">
              {isSuperAdminPortal ? '👑' : '🎓'}
            </div>
            <h1 className="font-display text-xl sm:text-2xl font-black tracking-tight text-white">
              {isSuperAdminPortal
                ? 'Portal Administrator'
                : currentProduct
                ? `Masuk ke ${currentProduct.shortName}`
                : 'Selamat Datang di Pintaria'}
            </h1>
            <p className="text-xs text-amber-100 mt-1.5 max-w-sm mx-auto leading-relaxed">
              {isSuperAdminPortal
                ? 'Halaman masuk pengelola sistem untuk memantau pengguna & database Google Spreadsheet.'
                : currentProduct
                ? `Masuk langsung untuk mengakses modul materi, bank soal, dan LKPD ${currentProduct.name}.`
                : 'Masuk dengan akun Google Anda untuk mengakses materi pembelajaran dan modul cetak.'}
            </p>
          </div>

          {/* Tab Selector: Google vs Credentials */}
          <div className="flex border-b border-slate-200 bg-slate-50 px-4 pt-2 gap-2">
            <button
              type="button"
              onClick={() => {
                sounds.playPop();
                setActiveTab('google');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-t-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'google'
                  ? 'bg-white text-amber-900 border-t-2 border-amber-500 shadow-2xs font-display'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>🌐 Akun Google</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-amber-100 text-amber-900 font-extrabold">
                Utama
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                sounds.playPop();
                setActiveTab('credentials');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-t-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'credentials'
                  ? 'bg-white text-amber-900 border-t-2 border-amber-500 shadow-2xs font-display'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <KeyRound className="w-3.5 h-3.5 text-amber-600" />
              <span>Username & Password</span>
            </button>
          </div>

          <div className="p-6 sm:p-7 space-y-5">
            {/* Alerts */}
            {errorMessage && (
              <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-start gap-2.5 animate-fadeIn">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div className="leading-snug flex-1">
                  <div>{errorMessage}</div>
                  <div className="mt-2 text-[11px] font-bold text-rose-900 flex items-center gap-1.5">
                    <span>💡 Tip:</span>
                    <span>Anda dapat langsung menggunakan tombol Uji Coba 1-Klik di bawah.</span>
                  </div>
                </div>
              </div>
            )}

            {successMessage && (
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-start gap-2.5 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="leading-snug font-bold">{successMessage}</div>
              </div>
            )}

            {/* TAB 1: GOOGLE SIGN-IN */}
            {activeTab === 'google' && (
              <div className="space-y-4">
                <button
                  type="button"
                  onClick={handleGoogleSignInClick}
                  disabled={isGoogleLoading}
                  className="w-full py-4 px-4 rounded-2xl border-2 border-amber-300 hover:border-amber-500 bg-white hover:bg-amber-50/50 text-slate-900 font-bold text-sm flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-60 group active:scale-[0.99]"
                >
                  {/* Official Google 'G' Logo */}
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.13C3.26 21.36 7.33 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.24C.45 8.15 0 9.92 0 12s.45 3.85 1.24 5.42l4.04-3.13z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.24 6.58l4.04 3.13c.95-2.83 3.6-4.96 6.72-4.96z"
                    />
                  </svg>
                  <span className="font-display">
                    {isGoogleLoading
                      ? 'Membuka Autentikasi Google...'
                      : 'Masuk Langsung dengan Akun Google'}
                  </span>
                </button>

                <p className="text-center text-[11px] text-slate-500">
                  Aman & resmi: data akun otomatis terdaftar dan tersimpan di database Pintaria.
                </p>
              </div>
            )}

            {/* TAB 2: USERNAME & PASSWORD */}
            {activeTab === 'credentials' && (
              <form onSubmit={handleCredentialsSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Username atau Alamat Email
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      placeholder="contoh: nahdiyatulummah31 atau gururatna"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white bg-slate-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Kata Sandi</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Masukkan kata sandi..."
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white bg-slate-50"
                    />
                  </div>
                </div>

                {/* Quick Autofill Buttons for Testing */}
                <div className="flex items-center gap-1.5 flex-wrap pt-1">
                  <span className="text-[10px] text-slate-500 font-bold">Isi Cepat:</span>
                  <button
                    type="button"
                    onClick={() => {
                      setIdentifier('nahdiyatulummah31');
                      setPassword('password123');
                    }}
                    className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 cursor-pointer"
                  >
                    👑 Super Admin
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIdentifier('gururatna');
                      setPassword('password123');
                    }}
                    className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 cursor-pointer"
                  >
                    🎓 Guru Kelas 1
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingCredentials}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>{isSubmittingCredentials ? 'Memeriksa Kredensial...' : 'Masuk dengan Username'}</span>
                </button>
              </form>
            )}

            {/* SEPARATOR */}
            <div className="relative py-2 flex items-center justify-center">
              <div className="border-t border-slate-200 w-full" />
              <span className="bg-white px-3 text-[11px] font-extrabold text-amber-900/80 uppercase tracking-wider relative">
                ⚡ Mode Uji Coba Cepat (Testing)
              </span>
            </div>

            {/* QUICK TEST BOX - Direct 1-Click for Instant Testing */}
            <div className="rounded-2xl border-2 border-amber-300/80 bg-gradient-to-br from-amber-50/70 via-orange-50/40 to-yellow-50/50 p-4 space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-black text-amber-950">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Akses Pengujian 1-Klik Langsung</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-200/80 text-amber-900">
                  Siap Uji
                </span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Ingin langsung menguji fitur aplikasi tanpa membuka jendela pop-up Google? Klik salah satu tombol di bawah untuk langsung masuk:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {/* 1. Super Admin Test */}
                <button
                  type="button"
                  onClick={() =>
                    handleQuickTestLogin(
                      'nahdiyatulummah31@gmail.com',
                      'Super Admin Nahdiyatu'
                    )
                  }
                  disabled={isGoogleLoading}
                  className="p-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white text-left font-bold text-xs shadow-xs hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="min-w-0 pr-1">
                    <div className="flex items-center gap-1 text-[11px] font-black text-amber-200">
                      <span>👑</span>
                      <span>Super Admin</span>
                    </div>
                    <div className="text-[10px] text-amber-100 truncate">
                      nahdiyatulummah31@gmail.com
                    </div>
                    <div className="text-[9px] text-amber-200/80 mt-0.5">
                      Akses Semua Kelas & Spreadsheet
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-amber-200 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </button>

                {/* 2. Teacher / Student Kelas 1 Test */}
                <button
                  type="button"
                  onClick={() =>
                    handleQuickTestLogin(
                      'guru@pintaria.com',
                      'Ibu Ratna Dewi, S.Pd',
                      'KELAS_1'
                    )
                  }
                  disabled={isGoogleLoading}
                  className="p-2.5 rounded-xl bg-white hover:bg-amber-50 border-2 border-amber-300 text-slate-900 text-left font-bold text-xs shadow-xs hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="min-w-0 pr-1">
                    <div className="flex items-center gap-1 text-[11px] font-black text-amber-900">
                      <span>🎓</span>
                      <span>Guru / Murid Kelas 1</span>
                    </div>
                    <div className="text-[10px] text-slate-600 truncate">
                      guru@pintaria.com
                    </div>
                    <div className="text-[9px] text-slate-500 mt-0.5">
                      Akses Modul Soal Kelas 1 SD
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-amber-600 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* 3. Custom Simulated Google User */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setShowSimulateModal(!showSimulateModal)}
                  className="w-full py-2 px-3 rounded-xl border border-dashed border-amber-400 bg-white/80 hover:bg-white text-amber-950 font-bold text-[11px] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <UserCheck className="w-3.5 h-3.5 text-amber-600" />
                  <span>
                    {showSimulateModal
                      ? 'Tutup Form Simulasi Akun Baru'
                      : '🧪 Uji Coba dengan Email Pembeli Lain (Simulasi Registrasi Otomatis)'}
                  </span>
                </button>

                {showSimulateModal && (
                  <div className="mt-3 p-3 rounded-xl bg-white border border-amber-200 space-y-2.5 animate-fadeIn">
                    <div className="text-[11px] font-bold text-slate-800">
                      Simulasikan Pembeli Baru dengan Akun Google:
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Nama Pembeli (contoh: Siti Aminah)"
                        value={simName}
                        onChange={(e) => setSimName(e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-slate-50 text-slate-900"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Google (contoh: sitiaminah@gmail.com)"
                        value={simEmail}
                        onChange={(e) => setSimEmail(e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-slate-50 text-slate-900"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <select
                        value={simProduct}
                        onChange={(e) => setSimProduct(e.target.value as ProductId)}
                        className="flex-1 px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-slate-50 text-slate-900 font-medium"
                      >
                        <option value="KELAS_1">Paket Kelas 1 SD</option>
                        <option value="KELAS_2">Paket Kelas 2 SD</option>
                        <option value="KELAS_3">Paket Kelas 3 SD</option>
                        <option value="KELAS_4">Paket Kelas 4 SD</option>
                        <option value="KELAS_5">Paket Kelas 5 SD</option>
                        <option value="KELAS_6">Paket Kelas 6 SD</option>
                        <option value="BUNDLE_ALL">Paket Lengkap Semua Kelas (1-6)</option>
                      </select>
                      <button
                        type="button"
                        onClick={() => handleQuickTestLogin(simEmail, simName, simProduct)}
                        disabled={isGoogleLoading || !simEmail.trim()}
                        className="py-1.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs cursor-pointer shadow-2xs"
                      >
                        Masuk & Tes
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mandatory Watermark Notice Footer */}
      <footer className="border-t border-amber-200/60 bg-white/90 py-3.5 px-4 text-center">
        <div className="max-w-4xl mx-auto text-[11px] sm:text-xs font-medium text-amber-950/80 leading-relaxed">
          © PINTARIA. Seluruh hak dilindungi. Dilarang memperjualbelikan, menggandakan, membagikan, atau mendistribusikan produk ini tanpa izin
        </div>
      </footer>
    </div>
  );
};

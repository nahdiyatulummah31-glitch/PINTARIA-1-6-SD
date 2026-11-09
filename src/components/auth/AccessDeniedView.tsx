import React from 'react';
import { Lock, ArrowLeft, LogOut, ExternalLink, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { ProductId } from '../../types/auth';
import { PRODUCTS } from '../../config/products';
import { sounds } from '../../utils/soundEffects';

interface AccessDeniedViewProps {
  userEmail: string;
  userName: string;
  targetProductId: ProductId;
  permittedProductIds: ProductId[];
  onLogout: () => void;
  onNavigateToProduct: (productId: ProductId) => void;
  customTitle?: string;
  customMessage?: string;
  isAdminBlocked?: boolean;
}

export const AccessDeniedView: React.FC<AccessDeniedViewProps> = ({
  userEmail,
  userName,
  targetProductId,
  permittedProductIds,
  onLogout,
  onNavigateToProduct,
  customTitle,
  customMessage,
  isAdminBlocked,
}) => {
  const targetProduct = PRODUCTS[targetProductId];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/60 via-slate-50 to-amber-50/40 flex flex-col justify-between selection:bg-amber-200">
      {/* Top Simple Header */}
      <header className="border-b border-amber-200/70 bg-white/90 backdrop-blur-md py-3 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-400 text-lg shadow-sm">
              ⭐
            </span>
            <div className="text-left">
              <span className="font-display font-black text-amber-950 text-sm">Pintaria SD</span>
              <span className="text-[10px] text-amber-700 block">Sistem Pembelajaran & Bank Soal SD</span>
            </div>
          </div>

          <button
            onClick={() => {
              sounds.playPop();
              onLogout();
            }}
            className="px-3 py-1.5 rounded-xl border border-slate-300 hover:border-rose-400 bg-white hover:bg-rose-50 text-slate-700 hover:text-rose-700 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Keluar Akun</span>
          </button>
        </div>
      </header>

      {/* Main Access Denied Card */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-lg rounded-3xl bg-white shadow-xl border-2 border-rose-200 p-6 sm:p-8 text-center space-y-5 animate-scaleIn">
          {/* Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-rose-50 border-2 border-rose-200 text-rose-600 shadow-inner">
            <Lock className="w-8 h-8" />
          </div>

          {/* Heading */}
          <div className="space-y-1">
            <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-[11px] font-black tracking-wide uppercase border border-rose-200 inline-block">
              {isAdminBlocked ? 'Akses Admin Khusus' : 'Akses Dibatasi'}
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-black text-slate-900 pt-1">
              {customTitle || 'Produk Ini Belum Termasuk di Akun Anda'}
            </h2>
            <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
              {customMessage || (
                <>
                  Hai <strong className="text-slate-800">{userName || userEmail}</strong>, tautan yang Anda buka memerlukan hak akses aktif untuk produk ini.
                </>
              )}
            </p>
          </div>

          {/* Product Requested vs User Products */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-left space-y-3 text-xs">
            <div className="flex items-start justify-between gap-2 pb-2 border-b border-slate-200/80">
              <span className="text-slate-500">Produk yang Dicoba Dibuka:</span>
              <span className="font-black text-rose-700 text-right">
                {targetProduct?.name || targetProductId}
              </span>
            </div>

            <div className="flex items-start justify-between gap-2">
              <span className="text-slate-500">Status Akun Anda ({userEmail}):</span>
              <span className="font-bold text-amber-800 text-right">
                {permittedProductIds.length > 0
                  ? `${permittedProductIds.length} Produk Terdaftar`
                  : 'Belum Ada Produk Aktif'}
              </span>
            </div>
          </div>

          {/* Contact Admin for Verification / Activation */}
          {!isAdminBlocked && targetProduct && (
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-300 text-center space-y-2.5 shadow-2xs animate-fadeIn">
              <div className="text-xs font-black text-amber-950">
                Akses Dikelola oleh Administrator Pintaria
              </div>
              <p className="text-[11px] text-amber-900 leading-relaxed max-w-sm mx-auto">
                Jika Anda telah membeli paket <strong>{targetProduct.name}</strong> atau mengalami kendala hak akses, silakan hubungi tim Administrator agar status akses email Anda diaktifkan.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-1">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Admin%20Pintaria%2C%20saya%20ingin%20konfirmasi%20akses%20kelas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-2xs inline-flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>💬 Hubungi Admin via WhatsApp</span>
                </a>
              </div>
            </div>
          )}

          {/* Permitted Products Shortcut */}
          {permittedProductIds.length > 0 && (
            <div className="space-y-2 text-left">
              <span className="text-[11px] font-black text-slate-700 uppercase tracking-wider block">
                Buka Produk yang Sudah Anda Miliki:
              </span>
              <div className="grid grid-cols-1 gap-2">
                {permittedProductIds.map((pid) => {
                  const prod = PRODUCTS[pid];
                  if (!prod) return null;
                  return (
                    <button
                      key={pid}
                      onClick={() => {
                        sounds.playFanfare();
                        onNavigateToProduct(pid);
                      }}
                      className="p-3 rounded-2xl bg-amber-50 hover:bg-amber-100/80 border border-amber-200 flex items-center justify-between text-left transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-amber-400 text-white text-xs font-black">
                          ✓
                        </span>
                        <div>
                          <div className="font-extrabold text-amber-950 text-xs group-hover:text-amber-900">
                            {prod.name}
                          </div>
                          <div className="text-[10px] text-amber-700 font-mono">
                            {prod.urlPath}
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-black text-amber-800 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        <span>Buka</span>
                        <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={() => {
                sounds.playPop();
                onLogout();
              }}
              className="flex-1 py-2.5 px-4 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>Ganti Akun Lain</span>
            </button>

            <a
              href="https://wa.me/?text=Halo%20Admin%20Pintaria,%20saya%20ingin%20upgrade%20atau%20mengaktifkan%20akses%20produk%20Pintaria%20SD"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-bold text-xs shadow-2xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Hubungi Admin</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </main>

      {/* Mandatory Watermark Notice Footer */}
      <footer className="border-t border-amber-200/60 bg-white/90 py-3 px-4 text-center">
        <div className="max-w-4xl mx-auto text-[11px] sm:text-xs font-medium text-amber-950/80 leading-relaxed">
          © PINTARIA. Seluruh hak dilindungi. Dilarang memperjualbelikan, menggandakan, membagikan, atau mendistribusikan produk ini tanpa izin
        </div>
      </footer>
    </div>
  );
};

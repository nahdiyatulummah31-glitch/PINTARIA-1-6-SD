import React, { useState, useEffect, useCallback } from 'react';
import { authService } from '../../services/authService';
import { AuthSession, ProductId } from '../../types/auth';
import { LoginPage } from './LoginPage';
import { AccessDeniedView } from './AccessDeniedView';
import { AdminDashboardModal } from './AdminDashboardModal';
import { getProductContextFromUrl, PRODUCTS } from '../../config/products';
import { Shield, LogOut, PackageCheck } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

interface AuthGateProps {
  children: React.ReactNode;
}

export const AuthGate: React.FC<AuthGateProps> = ({ children }) => {
  const [session, setSession] = useState<AuthSession | null>(() => authService.getCurrentSession());
  const [productContext, setProductContext] = useState(() => getProductContextFromUrl());
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [loggedOutReason, setLoggedOutReason] = useState<string | null>(null);

  // Synchronize product context whenever URL / history / hash changes
  useEffect(() => {
    const handleUrlChange = () => {
      setProductContext(getProductContextFromUrl());
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  // Listen to instant auth state changes (cross-tab broadcast & storage events)
  useEffect(() => {
    const unsubscribe = authService.subscribe(() => {
      const current = authService.getCurrentSession();
      if (!current) {
        if (session) {
          setSession(null);
          sounds.playIncorrect();
          setLoggedOutReason('Sesi akun Anda telah diakhiri atau akun Anda telah diblokir oleh Administrator.');
        }
      } else {
        setSession({ ...current });
      }
    });
    return unsubscribe;
  }, [session]);

  // Periodic heartbeat session validator against server (every 5 seconds)
  useEffect(() => {
    const checkSessionInterval = setInterval(async () => {
      if (!session) return;
      const validation = await authService.validateSessionWithServer();
      if (!validation.valid) {
        setSession(null);
        sounds.playIncorrect();
        setLoggedOutReason(validation.reason || 'Akun Anda sedang diblokir oleh Administrator.');
      }
    }, 5000);

    return () => clearInterval(checkSessionInterval);
  }, [session]);

  // If user opens /admin or ?admin=true and is already authenticated as ADMIN -> Auto open Admin Modal
  useEffect(() => {
    if (session && session.role === 'ADMIN' && productContext.isAdminRoute) {
      setIsAdminModalOpen(true);
    }
  }, [session, productContext.isAdminRoute]);

  // Ensure single-class product links (?kelas=N) are correctly synchronized so App.tsx locks to that class
  useEffect(() => {
    if (!session) return;

    // Check if user has active access before syncing
    const accessCheck = authService.checkUserHasAccess(session.user_id, productContext.productId);
    if (!accessCheck.allowed) return;

    const currentProd = PRODUCTS[productContext.productId];
    if (currentProd && currentProd.gradeNumber !== null) {
      const targetQuery = `kelas=${currentProd.gradeNumber}`;
      if (!window.location.search.includes(targetQuery)) {
        const newUrl = `?${targetQuery}${window.location.hash}`;
        window.history.replaceState(null, '', newUrl);
        window.dispatchEvent(new Event('popstate'));
      }
    }
  }, [session, productContext.productId]);

  const handleLoginSuccess = (newSession: AuthSession) => {
    setLoggedOutReason(null);
    setSession(newSession);
  };

  const handleLogout = useCallback(() => {
    sounds.playPop();
    authService.logout();
    setLoggedOutReason(null);
    setSession(null);
  }, []);

  const handleNavigateToProduct = (pid: ProductId) => {
    sounds.playPop();
    if (pid === 'BUNDLE_ALL') {
      window.location.href = window.location.pathname.includes('/bundle') ? '/bundle' : '?kelas=all';
    } else {
      const g = pid.replace('KELAS_', '');
      window.location.href = `?kelas=${g}`;
    }
  };

  // 1. If not authenticated -> Render Login Page with Product Context
  if (!session) {
    return (
      <LoginPage
        onLoginSuccess={handleLoginSuccess}
        sessionMessage={loggedOutReason}
        productContext={productContext}
      />
    );
  }

  // 2. User is logged in -> Perform Access Control Validation
  const isAdmin = session.role === 'ADMIN';

  // Case A: User is trying to access Admin Route (/admin)
  if (productContext.isAdminRoute && !isAdmin) {
    const userGrants = authService
      .getUserAccessGrants(session.user_id)
      .filter((g) => g.status === 'ACTIVE')
      .map((g) => g.product_id);

    return (
      <AccessDeniedView
        userEmail={session.email}
        userName={session.full_name || session.username}
        targetProductId={productContext.productId}
        permittedProductIds={userGrants}
        onLogout={handleLogout}
        onNavigateToProduct={handleNavigateToProduct}
        isAdminBlocked={true}
        customTitle="Akses Portal Administrator Terbatas"
        customMessage="Akun Anda bukan Administrator. Halaman manajemen pengguna dan database hanya dapat diakses oleh email Super Admin Pintaria yang terdaftar."
      />
    );
  }

  // Case B: User is opening a Product Link (e.g. /kelas1, /kelas2, /bundle)
  const accessCheck = authService.checkUserHasAccess(session.user_id, productContext.productId);

  if (!accessCheck.allowed) {
    const isBlocked = accessCheck.reason?.toLowerCase().includes('diblokir');
    return (
      <AccessDeniedView
        userEmail={session.email}
        userName={session.full_name || session.username}
        targetProductId={productContext.productId}
        permittedProductIds={accessCheck.permittedProducts}
        onLogout={handleLogout}
        onNavigateToProduct={handleNavigateToProduct}
        customTitle={isBlocked ? 'Akun Anda Sedang Diblokir' : 'Hak Akses Belum Tersedia / Dicabut'}
        customMessage={accessCheck.reason}
      />
    );
  }

  // 3. User is authorized! Render Existing App in full integrity
  const activeProduct = PRODUCTS[productContext.productId];
  const userActiveGrants = authService
    .getUserAccessGrants(session.user_id)
    .filter((g) => g.status === 'ACTIVE');
  const userOwnedProductIds = userActiveGrants.map((g) => g.product_id);

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Top User Status & Access Control Bar (Floating / Clean) */}
      <div className="bg-slate-900 text-white text-xs px-3 sm:px-6 py-1.5 flex items-center justify-between border-b border-slate-800 print:hidden z-50">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-black text-slate-950">
            {session.username.charAt(0).toUpperCase()}
          </span>
          <span className="font-bold text-slate-200">
            {session.full_name || session.username}
          </span>
          <span className="text-slate-500">•</span>
          <span
            className={`px-2 py-0.5 rounded text-[10px] font-black ${
              isAdmin
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'bg-slate-800 text-slate-300'
            }`}
          >
            {isAdmin ? '👑 SUPER ADMIN' : '👤 PENGGUNA'}
          </span>

          {activeProduct && (
            <>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400/10 text-amber-300 border border-amber-400/20 flex items-center gap-1">
                <PackageCheck className="w-3 h-3 text-amber-400" />
                <span>{activeProduct.badgeLabel}</span>
              </span>
            </>
          )}

          {/* Quick switcher if user owns multiple classes (e.g. Kelas 1 & Kelas 3) */}
          {userOwnedProductIds.length > 1 && !userOwnedProductIds.includes('BUNDLE_ALL') && (
            <div className="flex items-center gap-1 ml-1 bg-slate-800/80 px-2 py-0.5 rounded-lg border border-slate-700">
              <span className="text-slate-400 text-[10px] hidden sm:inline">Pindah Kelas:</span>
              {userOwnedProductIds.map((pid) => (
                <button
                  key={pid}
                  onClick={() => handleNavigateToProduct(pid)}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-extrabold cursor-pointer transition-colors ${
                    pid === productContext.productId
                      ? 'bg-amber-400 text-slate-950 font-black shadow-xs'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700'
                  }`}
                  title={`Buka ${PRODUCTS[pid]?.name || pid}`}
                >
                  {PRODUCTS[pid]?.shortName.replace(' SD', '') || pid}
                </button>
              ))}
            </div>
          )}

          <span className="text-slate-500 hidden md:inline">•</span>
          <span className="text-[11px] text-slate-400 hidden md:inline truncate max-w-xs">
            {session.email}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {isAdmin && (
            <button
              onClick={() => {
                sounds.playPop();
                setIsAdminModalOpen(true);
              }}
              className="px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-[11px] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              title="Buka menu pantau pengguna terdaftar & dashboard admin"
            >
              <Shield className="w-3.5 h-3.5 text-slate-950" />
              <span>👑 Pantau User & Admin Panel</span>
            </button>
          )}

          <button
            onClick={handleLogout}
            className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-rose-950/80 hover:text-rose-200 hover:border-rose-700 text-slate-300 border border-slate-700 font-bold text-[11px] transition-colors flex items-center gap-1 cursor-pointer"
            title="Keluar dari akun"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Keluar</span>
          </button>
        </div>
      </div>

      {/* EXISTING APP IN FULL INTEGRITY */}
      <div className="flex-1 w-full flex flex-col">
        {children}
      </div>

      {/* Floating Quick Button for Admin to monitor registered users easily */}
      {isAdmin && (
        <button
          onClick={() => {
            sounds.playPop();
            setIsAdminModalOpen(true);
          }}
          className="fixed bottom-14 right-4 sm:right-6 z-40 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs px-3.5 py-2.5 rounded-2xl shadow-xl border-2 border-amber-300 flex items-center gap-2 cursor-pointer transition-all hover:scale-105 active:scale-95 print:hidden group"
          title="Buka Menu Pantau Pengguna Terdaftar"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-slate-950 text-amber-400 text-xs shadow-inner">
            👑
          </span>
          <span className="font-display">Pantau User Terdaftar</span>
          <span className="px-1.5 py-0.5 rounded-full bg-slate-950/10 text-[10px] font-extrabold">
            Admin
          </span>
        </button>
      )}

      {/* Mandatory Watermark Notice across all pages */}
      <div className="bg-[#FFFDF7] border-t border-amber-200/80 py-2.5 px-4 text-center text-[11px] sm:text-xs font-semibold text-amber-950/85 tracking-wide print:hidden">
        © PINTARIA. Seluruh hak dilindungi. Dilarang memperjualbelikan, menggandakan, membagikan, atau mendistribusikan produk ini tanpa izin
      </div>

      {/* Admin Dashboard Modal */}
      {isAdmin && (
        <AdminDashboardModal
          isOpen={isAdminModalOpen}
          onClose={() => setIsAdminModalOpen(false)}
          currentUserEmail={session.email}
        />
      )}
    </div>
  );
};

import { ProductId } from '../types/auth';

export interface ProductConfig {
  id: ProductId;
  name: string;
  shortName: string;
  gradeNumber: number | null; // 1..6 or null for bundle
  urlPath: string;
  queryParam: string;
  badgeLabel: string;
  themeColor: string;
}

export const PRODUCTS: Record<ProductId, ProductConfig> = {
  KELAS_1: {
    id: 'KELAS_1',
    name: 'Paket Belajar & Latihan Soal Kelas 1 SD',
    shortName: 'Kelas 1 SD',
    gradeNumber: 1,
    urlPath: '/kelas1',
    queryParam: 'kelas=1',
    badgeLabel: 'Kelas 1',
    themeColor: 'from-amber-500 to-amber-600',
  },
  KELAS_2: {
    id: 'KELAS_2',
    name: 'Paket Belajar & Latihan Soal Kelas 2 SD',
    shortName: 'Kelas 2 SD',
    gradeNumber: 2,
    urlPath: '/kelas2',
    queryParam: 'kelas=2',
    badgeLabel: 'Kelas 2',
    themeColor: 'from-emerald-500 to-emerald-600',
  },
  KELAS_3: {
    id: 'KELAS_3',
    name: 'Paket Belajar & Latihan Soal Kelas 3 SD',
    shortName: 'Kelas 3 SD',
    gradeNumber: 3,
    urlPath: '/kelas3',
    queryParam: 'kelas=3',
    badgeLabel: 'Kelas 3',
    themeColor: 'from-sky-500 to-sky-600',
  },
  KELAS_4: {
    id: 'KELAS_4',
    name: 'Paket Belajar & Latihan Soal Kelas 4 SD',
    shortName: 'Kelas 4 SD',
    gradeNumber: 4,
    urlPath: '/kelas4',
    queryParam: 'kelas=4',
    badgeLabel: 'Kelas 4',
    themeColor: 'from-indigo-500 to-indigo-600',
  },
  KELAS_5: {
    id: 'KELAS_5',
    name: 'Paket Belajar & Latihan Soal Kelas 5 SD',
    shortName: 'Kelas 5 SD',
    gradeNumber: 5,
    urlPath: '/kelas5',
    queryParam: 'kelas=5',
    badgeLabel: 'Kelas 5',
    themeColor: 'from-purple-500 to-purple-600',
  },
  KELAS_6: {
    id: 'KELAS_6',
    name: 'Paket Belajar & Latihan Soal Kelas 6 SD',
    shortName: 'Kelas 6 SD',
    gradeNumber: 6,
    urlPath: '/kelas6',
    queryParam: 'kelas=6',
    badgeLabel: 'Kelas 6',
    themeColor: 'from-rose-500 to-rose-600',
  },
  BUNDLE_ALL: {
    id: 'BUNDLE_ALL',
    name: 'Paket Bundling Lengkap Semua Kelas (1-6 SD)',
    shortName: 'Bundling Kelas 1-6',
    gradeNumber: null,
    urlPath: '/bundle',
    queryParam: 'kelas=all',
    badgeLabel: 'Bundle Lengkap 1-6',
    themeColor: 'from-amber-600 to-amber-700',
  },
};

// Bundling definition mapping
export const BUNDLE_INCLUDED_PRODUCTS: ProductId[] = [
  'KELAS_1',
  'KELAS_2',
  'KELAS_3',
  'KELAS_4',
  'KELAS_5',
  'KELAS_6',
];

// Helper: check if a list of active product grants covers the target product
export function checkHasAccess(
  activeProductIds: ProductId[],
  targetProduct: ProductId
): boolean {
  if (activeProductIds.includes('BUNDLE_ALL')) {
    return true; // Bundle covers all classes and bundle view
  }
  return activeProductIds.includes(targetProduct);
}

// Helper: parse current URL to extract requested product and admin route flag
export function getProductContextFromUrl(): {
  productId: ProductId;
  isAdminRoute: boolean;
  rawPath: string;
} {
  if (typeof window === 'undefined') {
    return { productId: 'BUNDLE_ALL', isAdminRoute: false, rawPath: '/' };
  }

  const pathname = window.location.pathname.toLowerCase();
  const search = window.location.search.toLowerCase();
  const hash = window.location.hash.toLowerCase();

  // 1. Admin route detection (/admin, ?admin=true, #admin)
  if (
    pathname === '/admin' ||
    pathname.startsWith('/admin/') ||
    search.includes('admin=true') ||
    search.includes('admin=1') ||
    hash === '#admin' ||
    hash === '#/admin'
  ) {
    return { productId: 'BUNDLE_ALL', isAdminRoute: true, rawPath: '/admin' };
  }

  // 2. Class per class detection (/kelas1 .. /kelas6 or ?kelas=1 .. ?kelas=6)
  for (let g = 1; g <= 6; g++) {
    if (
      pathname === `/kelas${g}` ||
      pathname === `/kelas/${g}` ||
      pathname === `/grade${g}` ||
      pathname === `/grade/${g}` ||
      search.includes(`kelas=${g}`) ||
      search.includes(`grade=${g}`) ||
      hash === `#/kelas${g}` ||
      hash === `#kelas${g}`
    ) {
      return {
        productId: `KELAS_${g}` as ProductId,
        isAdminRoute: false,
        rawPath: `/kelas${g}`,
      };
    }
  }

  // 3. Bundling detection (/bundle, /bundling, ?kelas=all, ?kelas=semua)
  if (
    pathname === '/bundle' ||
    pathname === '/bundling' ||
    pathname === '/all' ||
    search.includes('kelas=all') ||
    search.includes('kelas=semua') ||
    search.includes('bundle') ||
    hash === '#/bundle' ||
    hash === '#bundle'
  ) {
    return {
      productId: 'BUNDLE_ALL',
      isAdminRoute: false,
      rawPath: '/bundle',
    };
  }

  // Default fallback: root URL without specific class param is treated as BUNDLE_ALL
  return {
    productId: 'BUNDLE_ALL',
    isAdminRoute: false,
    rawPath: pathname,
  };
}

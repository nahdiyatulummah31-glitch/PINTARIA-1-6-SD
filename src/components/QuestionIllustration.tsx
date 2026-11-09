import React, { useState } from 'react';
import { getAuthenticImage, AuthenticImageItem } from '../data/authenticImageRegistry';
import { getEducationalDiagram } from './diagrams';

interface QuestionIllustrationProps {
  imageKey?: string;
  imageCaption?: string;
  imageUrl?: string;
  className?: string;
  isPrint?: boolean;
}

const DEFAULT_INTERNET_FALLBACK = 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80';

export const QuestionIllustration: React.FC<QuestionIllustrationProps> = ({
  imageKey,
  imageCaption,
  imageUrl,
  className = '',
  isPrint = false,
}) => {
  if (!imageKey && !imageUrl) return null;

  // Retrieve dedicated educational diagram
  const diagramNode = getEducationalDiagram(imageKey);

  // Retrieve optional authentic photo
  const registryData = imageKey ? getAuthenticImage(imageKey) : null;
  const authenticData: AuthenticImageItem = registryData || (imageUrl ? {
    url: imageUrl,
    title: imageCaption || 'Ilustrasi Soal',
    credit: 'Sumber Edukasi Terbuka',
    description: imageCaption || 'Foto visual butir soal pembelajaran.'
  } : {
    url: DEFAULT_INTERNET_FALLBACK,
    title: imageCaption || 'Materi Pembelajaran',
    credit: 'Unsplash Educational Collection',
    description: imageCaption || 'Foto stimulus pembelajaran.'
  });

  // Default to educational diagram if available (100% synchronized with question text & options!)
  const [viewMode, setViewMode] = useState<'diagram' | 'photo'>(diagramNode ? 'diagram' : 'photo');
  const [currentUrl, setCurrentUrl] = useState<string>(authenticData.url);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [hasFailed, setHasFailed] = useState<boolean>(false);
  const [isZoomOpen, setIsZoomOpen] = useState<boolean>(false);

  // Synchronize when key changes
  React.useEffect(() => {
    setViewMode(diagramNode ? 'diagram' : 'photo');
    setCurrentUrl(authenticData.url);
    setImageLoaded(false);
    setHasFailed(false);
  }, [imageKey, authenticData.url, diagramNode]);

  const handleImageError = () => {
    if (!hasFailed && currentUrl !== DEFAULT_INTERNET_FALLBACK) {
      setHasFailed(true);
      setCurrentUrl(DEFAULT_INTERNET_FALLBACK);
    }
  };

  // If in Print Worksheet mode, always prioritize crisp vector diagram
  if (isPrint) {
    return (
      <div className={`my-2 p-2 rounded-xl border border-slate-300 bg-white ${className}`}>
        {imageCaption && (
          <p className="text-[11px] font-bold text-slate-700 italic mb-1.5">
            📌 {imageCaption}
          </p>
        )}
        <div className="flex items-center justify-center overflow-hidden">
          {diagramNode ? (
            <div className="w-full flex justify-center max-h-52">{diagramNode}</div>
          ) : (
            <img
              src={currentUrl}
              alt={imageCaption || 'Ilustrasi Soal'}
              className="max-h-48 object-contain rounded"
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        className={`my-2.5 sm:my-3 rounded-2xl border-2 border-amber-300/90 bg-amber-50/50 p-2.5 sm:p-3.5 shadow-2xs transition-all ${className}`}
      >
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between mb-2 gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-amber-100 px-2.5 py-1 text-[10px] sm:text-[11px] font-bold text-amber-900 border border-amber-300 shrink-0">
              <span>🖼️</span>
              <span>Soal Bergambar</span>
            </span>

            {diagramNode && (
              <span className="inline-flex items-center gap-1 rounded-md bg-emerald-100 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold text-emerald-800 border border-emerald-300">
                <span>📐</span>
                <span>Diagram Sinkron 100%</span>
              </span>
            )}
          </div>

          {/* Controls: Mode Switch & Zoom */}
          <div className="flex items-center gap-1.5 ml-auto">
            {diagramNode && (
              <div className="inline-flex items-center rounded-lg bg-white/90 p-0.5 border border-amber-200 text-[10px] font-bold shadow-2xs">
                <button
                  type="button"
                  onClick={() => setViewMode('diagram')}
                  className={`px-2 py-0.5 rounded-md transition-colors cursor-pointer ${
                    viewMode === 'diagram'
                      ? 'bg-amber-500 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Tampilkan Diagram Vektor Edukasi yang 100% cocok dengan pertanyaan"
                >
                  📊 Diagram Edukasi
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('photo')}
                  className={`px-2 py-0.5 rounded-md transition-colors cursor-pointer ${
                    viewMode === 'photo'
                      ? 'bg-amber-500 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Tampilkan Foto Asli dari Internet"
                >
                  📷 Foto Nyata
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={() => setIsZoomOpen(true)}
              className="inline-flex items-center gap-1 rounded-lg bg-white px-2.5 py-1 text-[10px] sm:text-[11px] font-bold text-slate-700 hover:bg-amber-100 border border-amber-200 transition-colors shadow-2xs cursor-pointer"
              title="Perbesar gambar ilustrasi"
            >
              <span>🔍</span>
              <span>Perbesar</span>
            </button>
          </div>
        </div>

        {/* Caption */}
        {imageCaption && (
          <div className="mb-2 text-[11px] sm:text-xs font-semibold text-slate-700 italic flex items-center gap-1.5">
            <span className="text-amber-600 font-bold not-italic">📌</span>
            <span>{imageCaption}</span>
          </div>
        )}

        {/* Display Canvas */}
        <div className="relative overflow-hidden rounded-xl bg-white border border-amber-200 flex flex-col items-center justify-center shadow-xs p-2 min-h-[140px]">
          {viewMode === 'diagram' && diagramNode ? (
            <div
              className="w-full flex items-center justify-center group cursor-pointer transition-transform hover:scale-[1.01]"
              onClick={() => setIsZoomOpen(true)}
              title="Klik untuk memperbesar diagram"
            >
              {diagramNode}
            </div>
          ) : (
            <div
              className="relative w-full flex items-center justify-center max-h-56 sm:max-h-64 overflow-hidden rounded-lg bg-slate-900/5 group cursor-pointer"
              onClick={() => setIsZoomOpen(true)}
            >
              <img
                src={currentUrl}
                alt={authenticData.title || imageCaption || 'Ilustrasi Soal'}
                className={`w-full max-h-56 sm:max-h-64 object-contain rounded-lg transition-transform duration-300 group-hover:scale-102 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                loading="lazy"
                crossOrigin="anonymous"
                onLoad={() => setImageLoaded(true)}
                onError={handleImageError}
              />

              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-100 animate-pulse text-xs text-slate-400 font-medium">
                  Memuat foto edukasi...
                </div>
              )}

              <div className="absolute bottom-2 right-2 rounded-md bg-black/60 backdrop-blur-xs text-white px-2 py-0.5 text-[9px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Klik untuk memperbesar 🔍
              </div>
            </div>
          )}

          {/* Footer Metadata */}
          <div className="w-full mt-2 flex flex-wrap items-center justify-between text-[10px] text-slate-500 px-1 border-t border-slate-100 pt-1.5 gap-1">
            <span className="font-semibold text-slate-800 truncate max-w-[260px] sm:max-w-[360px]">
              {viewMode === 'diagram' ? '📐 Diagram Vektor Edukasi Resmi' : `📷 ${authenticData.title}`}
            </span>
            <span className="text-[9px] text-slate-400 shrink-0 font-medium">
              {viewMode === 'diagram' ? 'Sinkron 100% dengan Soal' : authenticData.credit}
            </span>
          </div>
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setIsZoomOpen(false)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-2xl p-4 shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="w-full flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-base">🔍</span>
                <h4 className="font-bold text-slate-800 text-sm sm:text-base">
                  {viewMode === 'diagram' ? 'Detail Diagram Soal' : (authenticData.title || imageCaption || 'Ilustrasi Soal')}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setIsZoomOpen(false)}
                className="rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 p-1.5 transition-colors cursor-pointer text-sm font-bold"
                aria-label="Tutup"
              >
                ✕ Tutup
              </button>
            </div>

            {/* Large Content */}
            <div className="w-full flex items-center justify-center bg-slate-50 rounded-xl p-3 max-h-[70vh] overflow-auto">
              {viewMode === 'diagram' && diagramNode ? (
                <div className="w-full max-w-2xl py-2">{diagramNode}</div>
              ) : (
                <img
                  src={currentUrl}
                  alt={authenticData.title || imageCaption || 'Ilustrasi Soal'}
                  className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg shadow-sm"
                />
              )}
            </div>

            {/* Modal Caption */}
            {imageCaption && (
              <p className="mt-3 text-xs sm:text-sm font-semibold text-slate-700 text-center">
                📌 {imageCaption}
              </p>
            )}

            {/* Toggle in modal if diagram available */}
            {diagramNode && (
              <div className="mt-3 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setViewMode(viewMode === 'diagram' ? 'photo' : 'diagram')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold border border-amber-300 transition-colors cursor-pointer"
                >
                  <span>🔄</span>
                  <span>Ganti ke {viewMode === 'diagram' ? 'Foto Internet' : 'Diagram Edukasi'}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

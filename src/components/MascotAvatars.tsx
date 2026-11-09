import React from 'react';

interface MascotProps {
  name: 'kancil' | 'bubu' | 'mimi' | 'garuda' | 'lulu';
  size?: number;
  className?: string;
  expression?: 'happy' | 'thinking' | 'cheering' | 'wink';
}

export const MascotAvatar: React.FC<MascotProps> = ({
  name,
  size = 64,
  className = '',
  expression = 'happy',
}) => {
  if (name === 'kancil') {
    // Kancil Cerdik (Deer - clever, nimble, warm amber and cream)
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block ${className}`}
      >
        {/* Antlers / Ears */}
        <ellipse cx="34" cy="24" rx="8" ry="20" fill="#d97706" transform="rotate(-15 34 24)" />
        <ellipse cx="34" cy="24" rx="4" ry="12" fill="#fef3c7" transform="rotate(-15 34 24)" />
        <ellipse cx="66" cy="24" rx="8" ry="20" fill="#d97706" transform="rotate(15 66 24)" />
        <ellipse cx="66" cy="24" rx="4" ry="12" fill="#fef3c7" transform="rotate(15 66 24)" />
        {/* Little clever horns */}
        <path d="M38 20 Q35 10 32 8" stroke="#92400e" strokeWidth="3" strokeLinecap="round" />
        <path d="M62 20 Q65 10 68 8" stroke="#92400e" strokeWidth="3" strokeLinecap="round" />

        {/* Head */}
        <circle cx="50" cy="56" r="34" fill="#f59e0b" />
        {/* White muzzle cheeks */}
        <ellipse cx="50" cy="66" rx="20" ry="14" fill="#fffbeb" />

        {/* Big bright eyes */}
        {expression === 'wink' ? (
          <>
            <path d="M36 50 Q41 45 46 50" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
            <circle cx="60" cy="49" r="6" fill="#1e293b" />
            <circle cx="58" cy="47" r="2.5" fill="#ffffff" />
          </>
        ) : expression === 'thinking' ? (
          <>
            <circle cx="40" cy="46" r="5" fill="#1e293b" />
            <circle cx="60" cy="46" r="5" fill="#1e293b" />
            <path d="M36 41 Q40 38 44 41" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M56 39 Q60 42 64 39" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round" />
          </>
        ) : (
          <>
            <circle cx="40" cy="48" r="6" fill="#1e293b" />
            <circle cx="38" cy="46" r="2.5" fill="#ffffff" />
            <circle cx="60" cy="48" r="6" fill="#1e293b" />
            <circle cx="58" cy="46" r="2.5" fill="#ffffff" />
          </>
        )}

        {/* Cute dark nose */}
        <ellipse cx="50" cy="61" rx="4.5" ry="3.5" fill="#78350f" />
        {/* Smile */}
        <path d="M44 68 Q50 74 56 68" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
        {/* Rosy blush */}
        <circle cx="30" cy="60" r="4.5" fill="#fb7185" opacity="0.6" />
        <circle cx="70" cy="60" r="4.5" fill="#fb7185" opacity="0.6" />
      </svg>
    );
  }

  if (name === 'bubu') {
    // Bubu Beruang (Bear - warm brown, cozy, inquisitive)
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block ${className}`}
      >
        {/* Round bear ears */}
        <circle cx="28" cy="26" r="14" fill="#854d0e" />
        <circle cx="28" cy="26" r="8" fill="#fef08a" />
        <circle cx="72" cy="26" r="14" fill="#854d0e" />
        <circle cx="72" cy="26" r="8" fill="#fef08a" />

        {/* Head */}
        <circle cx="50" cy="54" r="35" fill="#a16207" />
        {/* Muzzle */}
        <ellipse cx="50" cy="64" rx="20" ry="15" fill="#fef9c3" />

        {/* Eyes */}
        <circle cx="38" cy="47" r="5" fill="#1e293b" />
        <circle cx="36" cy="45" r="2" fill="#ffffff" />
        <circle cx="62" cy="47" r="5" fill="#1e293b" />
        <circle cx="60" cy="45" r="2" fill="#ffffff" />

        {/* Nose */}
        <ellipse cx="50" cy="59" rx="6" ry="4.5" fill="#451a03" />
        {/* Big cozy smile */}
        <path d="M43 67 Q50 74 57 67" stroke="#451a03" strokeWidth="3" strokeLinecap="round" />
        {/* Cheerful blush */}
        <circle cx="26" cy="57" r="5" fill="#f87171" opacity="0.5" />
        <circle cx="74" cy="57" r="5" fill="#f87171" opacity="0.5" />
      </svg>
    );
  }

  if (name === 'mimi') {
    // Mimi Kucing (Calico / Cream cat - playful, literary)
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block ${className}`}
      >
        {/* Pointy ears */}
        <polygon points="20,40 32,12 44,36" fill="#f97316" />
        <polygon points="26,37 32,18 38,34" fill="#fed7aa" />
        <polygon points="56,36 68,12 80,40" fill="#f97316" />
        <polygon points="62,34 68,18 74,37" fill="#fed7aa" />

        {/* Head */}
        <circle cx="50" cy="56" r="34" fill="#fb923c" />
        {/* White chest & muzzle */}
        <ellipse cx="50" cy="65" rx="18" ry="14" fill="#ffffff" />

        {/* Eyes */}
        <ellipse cx="38" cy="49" rx="6" ry="7" fill="#0284c7" />
        <circle cx="36" cy="46" r="2.5" fill="#ffffff" />
        <ellipse cx="62" cy="49" rx="6" ry="7" fill="#0284c7" />
        <circle cx="60" cy="46" r="2.5" fill="#ffffff" />

        {/* Pink nose */}
        <polygon points="47,60 53,60 50,64" fill="#ec4899" />
        {/* Cat mouth */}
        <path d="M45 66 Q50 71 50 64 Q50 71 55 66" stroke="#9a3412" strokeWidth="2.5" strokeLinecap="round" />
        {/* Whiskers */}
        <line x1="22" y1="62" x2="35" y2="64" stroke="#9a3412" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="68" x2="35" y2="67" stroke="#9a3412" strokeWidth="2" strokeLinecap="round" />
        <line x1="65" y1="64" x2="78" y2="62" stroke="#9a3412" strokeWidth="2" strokeLinecap="round" />
        <line x1="65" y1="67" x2="78" y2="68" stroke="#9a3412" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === 'garuda') {
    // Garuda Cilik (Courageous, golden eagle with friendly eye)
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block ${className}`}
      >
        {/* Crown feather tufts */}
        <path d="M50 8 L54 28 L46 28 Z" fill="#eab308" />
        <path d="M42 12 L48 30 L40 30 Z" fill="#ca8a04" />
        <path d="M58 12 L60 30 L52 30 Z" fill="#ca8a04" />

        {/* Head */}
        <circle cx="50" cy="54" r="34" fill="#facc15" />

        {/* Fierce yet friendly eyes */}
        <ellipse cx="38" cy="46" rx="6" ry="6.5" fill="#1e293b" />
        <circle cx="36" cy="44" r="2.5" fill="#ffffff" />
        <ellipse cx="62" cy="46" rx="6" ry="6.5" fill="#1e293b" />
        <circle cx="60" cy="44" r="2.5" fill="#ffffff" />

        {/* Proud Golden Beak */}
        <path d="M42 54 Q50 50 58 54 Q50 76 42 54 Z" fill="#ea580c" />
        <circle cx="28" cy="58" r="4.5" fill="#ef4444" opacity="0.4" />
        <circle cx="72" cy="58" r="4.5" fill="#ef4444" opacity="0.4" />
      </svg>
    );
  }

  // Lulu Kelinci (Rabbit - soft, lively, long ears)
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
    >
      {/* Tall bunny ears */}
      <ellipse cx="36" cy="20" rx="9" ry="22" fill="#e0e7ff" />
      <ellipse cx="36" cy="20" rx="4.5" ry="15" fill="#fbcfe8" />
      <ellipse cx="64" cy="20" rx="9" ry="22" fill="#e0e7ff" />
      <ellipse cx="64" cy="20" rx="4.5" ry="15" fill="#fbcfe8" />

      {/* Head */}
      <circle cx="50" cy="56" r="33" fill="#f1f5f9" />
      {/* Muzzle */}
      <ellipse cx="50" cy="65" rx="16" ry="12" fill="#ffffff" />

      {/* Big sparkling eyes */}
      <circle cx="38" cy="49" r="6" fill="#4338ca" />
      <circle cx="36" cy="47" r="2.5" fill="#ffffff" />
      <circle cx="62" cy="49" r="6" fill="#4338ca" />
      <circle cx="60" cy="47" r="2.5" fill="#ffffff" />

      {/* Pink nose & smile */}
      <ellipse cx="50" cy="62" rx="3.5" ry="2.5" fill="#ec4899" />
      <path d="M45 68 Q50 72 55 68" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" />
      {/* Rosy cheeks */}
      <circle cx="28" cy="59" r="5" fill="#fda4af" opacity="0.7" />
      <circle cx="72" cy="59" r="5" fill="#fda4af" opacity="0.7" />
    </svg>
  );
};

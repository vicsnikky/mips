import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'color';
  showSubtitle?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  variant = 'color',
  showSubtitle = true,
  className = '',
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const titleSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  const subtitleSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs',
    xl: 'text-sm',
  };

  const isDarkTheme = variant === 'dark';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Visual Logo Emblem */}
      <div
        className={`${iconSizes[size]} relative rounded-2xl flex items-center justify-center shrink-0 shadow-md transition-transform group-hover:scale-105 ${
          isDarkTheme
            ? 'bg-gradient-to-tr from-pink-500 via-rose-500 to-pink-400 text-white shadow-pink-900/30 ring-1 ring-white/15'
            : 'bg-gradient-to-tr from-pink-600 via-rose-500 to-pink-500 text-white shadow-pink-200 ring-2 ring-pink-100'
        }`}
      >
        {/* Custom Handcrafted Crochet Emblem SVG */}
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3/5 h-3/5"
        >
          {/* Yarn Ball Curves */}
          <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.2" strokeOpacity="0.3" />
          <path
            d="M12 28C14 18 20 12 30 14C36 15.5 37 23 33 29C29 35 19 37 14 31C10 26 12 16 22 11C28 8 36 10 39 17"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {/* Intertwined Heart / Loop in center */}
          <path
            d="M20 23C18 20 22 17 25 19.5C28 17 32 20 30 23.5C28 27 25 30 25 30C25 30 22 27 20 23Z"
            fill="currentColor"
            fillOpacity="0.95"
          />
          {/* Crochet Hook Diagonal Accent */}
          <path
            d="M37 9L29 17M37 9C38.5 7.5 40 8 40.5 8.5C41 9 41.5 10.5 40 12L32 20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        {/* Small sparkle pin */}
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-300 border-2 border-white shadow-xs animate-pulse" />
      </div>

      {/* Typography Brand Name */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1 leading-none">
          <span
            className={`font-black tracking-tight font-['Poppins'] ${titleSizes[size]} ${
              isDarkTheme
                ? 'text-white'
                : 'text-neutral-900 group-hover:text-pink-600 transition-colors'
            }`}
          >
            MIPS
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-pink-500 inline-block mb-1" />
        </div>

        {showSubtitle && (
          <span
            className={`tracking-[0.2em] uppercase font-bold ${subtitleSizes[size]} ${
              isDarkTheme ? 'text-pink-300' : 'text-pink-600'
            }`}
          >
            Handmade Crochet
          </span>
        )}
      </div>
    </div>
  );
};

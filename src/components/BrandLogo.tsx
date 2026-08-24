import React from 'react';

export const MIPS_LOGO_URL = 'https://i.ibb.co/v65sy7Yz/Chat-GPT-Image-Aug-24-2026-11-32-50-AM.png';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'color';
  showSubtitle?: boolean;
  className?: string;
  imageOnly?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  variant = 'color',
  showSubtitle = true,
  className = '',
  imageOnly = false,
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
      {/* Visual Logo Emblem Image */}
      <div
        className={`${iconSizes[size]} relative rounded-2xl overflow-hidden flex items-center justify-center shrink-0 shadow-md transition-transform group-hover:scale-105 ${
          isDarkTheme
            ? 'bg-white/10 ring-1 ring-white/20 shadow-pink-900/30'
            : 'bg-pink-50 ring-2 ring-pink-100 shadow-pink-200'
        }`}
      >
        <img
          src={MIPS_LOGO_URL}
          alt="MIPS Handmade Crochet Logo"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Subtle sparkle accent */}
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-300 border-2 border-white shadow-xs" />
      </div>

      {/* Typography Brand Name */}
      {!imageOnly && (
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
      )}
    </div>
  );
};

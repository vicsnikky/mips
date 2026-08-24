import React from 'react';
import { Heart, MessageCircle, Mail, MapPin, Sparkles, Instagram, ArrowUp } from 'lucide-react';
import {
  generateDirectChatWhatsAppLink,
  MIPS_EMAIL,
  MIPS_LOCATION,
  MIPS_WHATSAPP_DISPLAY,
  MIPS_INSTAGRAM_URL,
  MIPS_TIKTOK_URL,
} from '../utils/whatsapp';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="text-left group focus:outline-none"
            >
              <BrandLogo size="md" variant="dark" />
            </button>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              MIPS is a bespoke crochet brand creating premium, slow-fashion garments, luxury bags, everlasting floral bouquets, and one-of-a-kind custom commissions crafted stitch-by-stitch with love.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={generateDirectChatWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-600/30 hover:bg-emerald-600 text-emerald-400 hover:text-white flex items-center justify-center transition-colors"
                title="WhatsApp Direct"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
              <a
                href={MIPS_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-pink-600/30 hover:bg-pink-600 text-pink-400 hover:text-white flex items-center justify-center transition-colors"
                title="Instagram (@mips_._)"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={MIPS_TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-pink-600 text-neutral-300 hover:text-white flex items-center justify-center transition-colors font-bold text-xs"
                title="TikTok (@atii._._)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.32a6.34 6.34 0 0 0-.85-.06A6.34 6.34 0 0 0 3.14 15.6a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.58a8.3 8.3 0 0 0 4.82 1.52V6.69h-1.05z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-2 text-xs">
              {['home', 'shop', 'custom', 'gallery', 'about', 'testimonials', 'faq', 'contact'].map((sec) => (
                <li key={sec}>
                  <button
                    onClick={() => onNavigate(sec)}
                    className="hover:text-pink-400 transition-colors capitalize text-left"
                  >
                    {sec === 'custom' ? 'Custom Crochet' : sec === 'faq' ? 'FAQ' : sec}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">Shop Categories</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><button onClick={() => onNavigate('shop')} className="hover:text-pink-400 transition-colors">Bags &amp; Totes</button></li>
              <li><button onClick={() => onNavigate('shop')} className="hover:text-pink-400 transition-colors">Crochet Tops &amp; Sets</button></li>
              <li><button onClick={() => onNavigate('shop')} className="hover:text-pink-400 transition-colors">Everlasting Bouquets</button></li>
              <li><button onClick={() => onNavigate('shop')} className="hover:text-pink-400 transition-colors">Bucket Hats &amp; Wear</button></li>
              <li><button onClick={() => onNavigate('shop')} className="hover:text-pink-400 transition-colors">Baby Keepsakes</button></li>
              <li><button onClick={() => onNavigate('shop')} className="hover:text-pink-400 transition-colors">Home Décor Cushions</button></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">Direct Contact</h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>WhatsApp: {MIPS_WHATSAPP_DISPLAY}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <span>{MIPS_EMAIL}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <span>{MIPS_LOCATION}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>&copy; 2026 MIPS Crochet. All Rights Reserved. Crafted with</span>
            <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500 inline" />
            <span>for crochet lovers.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white bg-neutral-800/80 hover:bg-neutral-800 px-3.5 py-1.5 rounded-full transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

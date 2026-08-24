import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { generateDirectChatWhatsAppLink, MIPS_WHATSAPP_DISPLAY } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Speech bubble tooltip */}
      {showTooltip && (
        <div className="bg-white rounded-2xl p-3.5 shadow-xl border border-pink-100 max-w-xs animate-in slide-in-from-bottom-2 duration-300 relative group">
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss WhatsApp hint"
            className="absolute top-2 right-2 text-neutral-400 hover:text-neutral-600 p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[11px] font-bold text-neutral-900">MIPS Artisan Online</span>
          </div>
          
          <p className="text-xs text-neutral-600 pr-4">
            Need a custom crochet piece or fast quotation? Chat with us directly on WhatsApp!
          </p>

          <a
            href={generateDirectChatWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700"
          >
            <span>Start WhatsApp Chat</span>
            <span>→</span>
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        id="floating-whatsapp-btn"
        href={generateDirectChatWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with MIPS"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl shadow-emerald-400/50 hover:scale-110 transition-transform active:scale-95 focus:outline-none ring-4 ring-emerald-100"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
};

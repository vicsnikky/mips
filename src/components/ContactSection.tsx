import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock, Instagram, Send, Sparkles } from 'lucide-react';
import {
  generateDirectChatWhatsAppLink,
  MIPS_EMAIL,
  MIPS_LOCATION,
  MIPS_WHATSAPP_DISPLAY,
  MIPS_INSTAGRAM_URL,
  MIPS_INSTAGRAM_HANDLE,
  MIPS_TIKTOK_URL,
  MIPS_TIKTOK_HANDLE,
} from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const [quickMsg, setQuickMsg] = useState('');

  const handleQuickSend = (e: React.FormEvent) => {
    e.preventDefault();
    const link = generateDirectChatWhatsAppLink(quickMsg || undefined);
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#FAF7F5] border-t border-pink-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-pink-100 text-pink-700 px-3.5 py-1 rounded-full text-xs font-semibold">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Connect With MIPS
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            We are always thrilled to chat about custom crochet commissions, wholesale orders, or styling questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct WhatsApp Contact Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-pink-100 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">Official WhatsApp Business Desk</h3>
                  <p className="text-xs text-neutral-500">Fastest response time: usually within minutes</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-xs text-emerald-900 space-y-1">
                <p className="font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp Number: {MIPS_WHATSAPP_DISPLAY}</span>
                </p>
                <p className="text-emerald-700">
                  You can order existing catalog products or send custom photos directly to this number.
                </p>
              </div>

              {/* Quick Message Box */}
              <form onSubmit={handleQuickSend} className="space-y-3 pt-2">
                <label className="block text-xs font-bold text-neutral-800">
                  Type a quick question to start chatting on WhatsApp:
                </label>
                <div className="relative">
                  <textarea
                    rows={3}
                    value={quickMsg}
                    onChange={(e) => setQuickMsg(e.target.value)}
                    placeholder="e.g. Hello MIPS, I'd like to ask about making a custom crochet bucket hat with pink daisies..."
                    className="w-full p-3.5 rounded-2xl border border-neutral-200 text-xs sm:text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none transition-all placeholder:text-neutral-400"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-emerald-200 transition-all hover:scale-101 active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Chat With Us on WhatsApp</span>
                </button>
              </form>
            </div>

            {/* Business Hours */}
            <div className="pt-4 border-t border-pink-100 flex items-center gap-3 text-xs text-neutral-600">
              <Clock className="w-4 h-4 text-pink-600 shrink-0" />
              <span>Business &amp; Crafting Hours: Monday – Saturday (8:00 AM – 8:00 PM WAT)</span>
            </div>
          </div>

          {/* Right Column: Contact Details & Socials */}
          <div className="lg:col-span-5 bg-gradient-to-br from-pink-600 via-rose-500 to-pink-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-pink-200">
                  Get in Touch
                </span>
                <h3 className="text-2xl font-extrabold mt-1">MIPS Crochet Studio</h3>
                <p className="text-xs text-pink-100 mt-1">
                  Handcrafted with utmost care and delivered safely to you.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white/10 shrink-0">
                    <Phone className="w-4 h-4 text-pink-200" />
                  </div>
                  <div>
                    <p className="text-[11px] text-pink-200">Phone &amp; WhatsApp</p>
                    <p className="font-semibold">{MIPS_WHATSAPP_DISPLAY}</p>
                  </div>
                </div>

                <a
                  href={`mailto:${MIPS_EMAIL}`}
                  className="flex items-start gap-3 hover:opacity-90 transition-opacity"
                >
                  <div className="p-2 rounded-xl bg-white/10 shrink-0">
                    <Mail className="w-4 h-4 text-pink-200" />
                  </div>
                  <div>
                    <p className="text-[11px] text-pink-200">Email Address</p>
                    <p className="font-semibold break-all">{MIPS_EMAIL}</p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white/10 shrink-0">
                    <MapPin className="w-4 h-4 text-pink-200" />
                  </div>
                  <div>
                    <p className="text-[11px] text-pink-200">Location &amp; Delivery</p>
                    <p className="font-semibold">{MIPS_LOCATION}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Channels */}
            <div className="pt-4 border-t border-white/20 space-y-2.5">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-pink-200 block">
                Follow Our Stitch Journey
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={MIPS_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-3.5 py-2 rounded-full text-xs font-medium transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-200" />
                  <span>Instagram ({MIPS_INSTAGRAM_HANDLE})</span>
                </a>
                <a
                  href={MIPS_TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-3.5 py-2 rounded-full text-xs font-medium transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-pink-200" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.32a6.34 6.34 0 0 0-.85-.06A6.34 6.34 0 0 0 3.14 15.6a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.58a8.3 8.3 0 0 0 4.82 1.52V6.69h-1.05z" />
                  </svg>
                  <span>TikTok ({MIPS_TIKTOK_HANDLE})</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

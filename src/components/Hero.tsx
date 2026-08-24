import React from 'react';
import { ShoppingBag, Wand2, Sparkles, Heart, CheckCircle2, MessageCircle } from 'lucide-react';
import { generateDirectChatWhatsAppLink } from '../utils/whatsapp';

interface HeroProps {
  onShopClick: () => void;
  onCustomClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick, onCustomClick }) => {
  return (
    <section id="home" className="relative overflow-hidden pt-6 pb-16 lg:py-20 bg-gradient-to-b from-pink-50/70 via-[#FAF7F5] to-[#FAF7F5]">
      {/* Background Decorative Blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-pink-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-rose-200/30 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-pink-100/90 text-pink-700 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-xs border border-pink-200/60">
              <Sparkles className="w-3.5 h-3.5 text-pink-600 animate-spin" style={{ animationDuration: '8s' }} />
              <span>Artisanal Slow Fashion &amp; Custom Yarn Art</span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-neutral-900 tracking-tight leading-[1.15]">
              Beautiful Crochet, <br />
              <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500 bg-clip-text text-transparent">
                Made Just for You.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              At <strong>MIPS</strong>, we craft one-of-a-kind handmade crochet pieces designed to elevate your everyday style, home, and gifting. From bespoke clothing and luxury tote bags to everlasting floral bouquets and custom commissions—every stitch is made with love.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                id="hero-shop-btn"
                onClick={onShopClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-pink-600 hover:bg-pink-700 text-white px-7 py-3.5 rounded-full text-sm font-semibold shadow-md shadow-pink-200 hover:shadow-lg hover:shadow-pink-300 transition-all hover:-translate-y-0.5"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Shop Crochet</span>
              </button>

              <button
                id="hero-custom-btn"
                onClick={onCustomClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-pink-50 text-pink-700 border border-pink-200 px-6 py-3.5 rounded-full text-sm font-semibold shadow-xs hover:border-pink-300 transition-all hover:-translate-y-0.5"
              >
                <Wand2 className="w-4 h-4 text-pink-600" />
                <span>Request Custom Crochet</span>
              </button>
            </div>

            {/* Trust Points */}
            <div className="pt-6 border-t border-pink-100/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2 text-xs font-medium text-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
                <span>100% Hand-Stitched</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
                <span>Custom Fit &amp; Colours</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-neutral-700 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
                <span>Instant WhatsApp Checkout</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Collage & Interactive Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Feature Card */}
              <div className="relative rounded-3xl overflow-hidden bg-white p-3 shadow-xl shadow-pink-100/70 border border-pink-100 group">
                <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-pink-100">
                  <img
                    src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80"
                    alt="MIPS Handcrafted Crochet Collection"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                    <span className="text-xs uppercase tracking-wider font-semibold text-pink-300">
                      Signature Collection
                    </span>
                    <h3 className="text-xl font-bold">Blush Blossom Tote &amp; Wear</h3>
                    <p className="text-xs text-pink-100 mt-1">
                      Mercerized cotton with reinforced non-stretch weave.
                    </p>
                  </div>
                </div>

                {/* Floating Badge 1: Quick WhatsApp Floating Pill */}
                <div className="absolute -bottom-4 -left-4 sm:left-4 bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-2xl shadow-lg border border-pink-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s' }}>
                  <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold text-emerald-600 block">Direct Order</span>
                    <span className="text-xs font-semibold text-neutral-800">WhatsApp Fast Checkout</span>
                  </div>
                </div>

                {/* Floating Badge 2: Handcrafted with Love */}
                <div className="absolute -top-3 -right-3 bg-pink-600 text-white py-2 px-3.5 rounded-full shadow-md text-xs font-semibold flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 fill-white text-white" />
                  <span>Custom Orders Open</span>
                </div>
              </div>

              {/* Secondary thumbnail card */}
              <div className="hidden sm:block absolute -right-6 bottom-12 w-36 bg-white p-2 rounded-2xl shadow-lg border border-pink-100">
                <div className="aspect-square rounded-xl overflow-hidden mb-1.5">
                  <img
                    src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=400&q=80"
                    alt="Eternal Flower Bouquet"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[11px] font-bold text-neutral-800 truncate">Eternal Roses</p>
                <p className="text-[10px] text-pink-600 font-semibold">From ₦15,000</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

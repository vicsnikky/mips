import React from 'react';
import { Heart, Sparkles, Award, Scissors, MessageCircle } from 'lucide-react';
import { generateDirectChatWhatsAppLink } from '../utils/whatsapp';

export const AboutSection: React.FC<{ onExploreShop: () => void }> = ({ onExploreShop }) => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-gradient-to-b from-white via-[#FAF7F5] to-white border-t border-pink-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Brand Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image */}
              <div className="rounded-3xl overflow-hidden shadow-xl border border-pink-100 bg-white p-3">
                <div className="aspect-4/3 rounded-2xl overflow-hidden bg-pink-100">
                  <img
                    src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
                    alt="Handcrafting crochet at MIPS Studio"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Badge on Corner */}
              <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white p-4 rounded-2xl shadow-xl border border-pink-100 max-w-xs space-y-1.5 animate-in fade-in">
                <div className="flex items-center gap-1.5 text-pink-600 font-bold text-xs">
                  <Sparkles className="w-4 h-4" />
                  <span>Artisanal Excellence</span>
                </div>
                <p className="text-xs text-neutral-600">
                  Every stitch represents hours of focused, authentic hand-knitting craftsmanship.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Brand Story & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-3.5 py-1.5 rounded-full text-xs font-semibold">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Our Story &amp; Passion</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-snug">
              Behind the Brand: The Art of <br />
              <span className="text-pink-600">Slow, Conscious Fashion</span>
            </h2>

            <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
              <p>
                <strong>MIPS</strong> was born out of a genuine love for artisanal textiles, creative freedom, and sustainable slow fashion. In a world dominated by mass-produced, fast-fashion garments, we champion the timeless beauty of items woven stitch-by-stitch by human hands.
              </p>
              <p>
                Whether it is a custom textured cardigan, a bridal evening clutch, a bouquet of everlasting floral blooms, or an heirloom newborn baby set—we select only the finest hypoallergenic milk cotton, rich acrylics, and silk blends.
              </p>
              <p>
                We believe that clothing and accessories should fit your body, express your mood, and bring joy for years to come. That is why our bespoke service is at the very core of our brand.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-2xl bg-white border border-pink-100 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-xs text-neutral-900">
                  <Scissors className="w-4 h-4 text-pink-600" />
                  <span>Custom Tailoring</span>
                </div>
                <p className="text-[11px] text-neutral-500">Every design can be adapted to your exact measurements.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-pink-100 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-xs text-neutral-900">
                  <Award className="w-4 h-4 text-pink-600" />
                  <span>Premium Fibres</span>
                </div>
                <p className="text-[11px] text-neutral-500">Soft, skin-safe, breathable, and colorfast materials.</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onExploreShop}
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md transition-all"
              >
                Explore Collection
              </button>

              <a
                href={generateDirectChatWhatsAppLink('Hello MIPS! I would like to learn more about your brand and custom commissions.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-pink-50 text-neutral-800 border border-pink-200 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat with the Artisan</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

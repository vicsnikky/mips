import React, { useState } from 'react';
import { Sparkles, Eye, MessageCircle, X, Clock } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gallery';
import { GalleryItem } from '../types';
import { generateDirectChatWhatsAppLink } from '../utils/whatsapp';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'fashion' | 'bags' | 'accessories' | 'baby' | 'home' | 'gifts'>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const filters = [
    { key: 'all', label: 'All Works' },
    { key: 'fashion', label: 'Fashion & Wear' },
    { key: 'bags', label: 'Bags & Clutches' },
    { key: 'accessories', label: 'Accessories' },
    { key: 'baby', label: 'Baby Crochet' },
    { key: 'home', label: 'Home Décor' },
    { key: 'gifts', label: 'Gifts & Flowers' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.categoryKey === activeFilter);

  const handleRequestPiece = (item: GalleryItem) => {
    const msg = `Hello MIPS, I saw this piece in your gallery: "${item.title}" (${item.category}). Could I request a custom order of this style?`;
    const link = generateDirectChatWhatsAppLink(msg);
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white border-t border-pink-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 bg-pink-100 text-pink-700 px-3.5 py-1 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Artisan Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            MIPS Crochet Craft Gallery
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            A visual lookbook of bespoke pieces, client commissions, and handcrafted favorites.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 mb-10 scrollbar-none">
          {filters.map((f) => {
            const isSelected = activeFilter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-pink-600 text-white shadow-xs'
                    : 'bg-[#FAF7F5] text-neutral-600 hover:bg-pink-50 hover:text-pink-600 border border-pink-100/60'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#FAF7F5] border border-pink-100 cursor-pointer aspect-4/5 shadow-xs hover:shadow-xl hover:shadow-pink-100/60 transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-between p-4 sm:p-5 text-white">
                
                {/* Top Category Badge */}
                <div className="flex justify-between items-start">
                  <span className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider text-pink-200">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="space-y-1 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-bold text-sm sm:text-base leading-snug line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-pink-100 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] text-pink-300 font-medium pt-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Crafted in ~{item.craftTime}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-pink-100">
            <button
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 text-neutral-800 hover:text-pink-600 flex items-center justify-center shadow-md"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-4/3 w-full bg-neutral-100">
              <img
                src={activeLightboxItem.imageUrl}
                alt={activeLightboxItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-7 space-y-4">
              <div>
                <span className="text-[11px] font-bold text-pink-600 uppercase tracking-wider">
                  {activeLightboxItem.category}
                </span>
                <h3 className="text-xl font-extrabold text-neutral-900 mt-0.5">
                  {activeLightboxItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                  {activeLightboxItem.description}
                </p>
              </div>

              <div className="pt-3 border-t border-pink-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-neutral-500 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-pink-600" />
                  <span>Estimated craft time: {activeLightboxItem.craftTime}</span>
                </div>

                <button
                  onClick={() => handleRequestPiece(activeLightboxItem)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Request This Piece on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

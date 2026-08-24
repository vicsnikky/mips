import React from 'react';
import { Star, Heart, CheckCircle2, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-[#FAF7F5] border-t border-pink-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-pink-100 text-pink-700 px-3.5 py-1 rounded-full text-xs font-semibold">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Customer Love</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Loved by Crochet Enthusiasts
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Read what our wonderful clients have to say about our handmade quality, fit, and customer service.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 border border-pink-100 shadow-xs hover:shadow-lg hover:shadow-pink-100/40 transition-all duration-300 flex flex-col justify-between space-y-4 relative"
            >
              <div className="space-y-3">
                {/* Rating stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-pink-200" />
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Author & Product */}
              <div className="pt-3 border-t border-pink-50 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-pink-200"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1">
                    <h4 className="font-bold text-xs text-neutral-900 truncate">{t.name}</h4>
                    <CheckCircle2 className="w-3 h-3 text-pink-600 shrink-0" title="Verified Customer" />
                  </div>
                  <p className="text-[11px] text-neutral-400">{t.location}</p>
                  <p className="text-[10px] text-pink-600 font-medium truncate mt-0.5">
                    {t.productPurchased}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

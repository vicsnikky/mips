import React from 'react';
import { Heart, Sparkles, ShieldCheck, UserCheck, MessageCircle, PackageCheck } from 'lucide-react';

export const WhyChooseMips: React.FC = () => {
  const reasons = [
    {
      icon: Heart,
      title: 'Handmade With Love',
      description: 'Every single stitch is crafted by hand with careful attention, precision, and passion.',
      color: 'text-rose-500',
      bg: 'bg-rose-50',
    },
    {
      icon: Sparkles,
      title: 'Custom Designs',
      description: 'Send us any reference photo or dream concept from Pinterest; we bring your unique vision to reality.',
      color: 'text-pink-600',
      bg: 'bg-pink-50',
    },
    {
      icon: ShieldCheck,
      title: 'Premium Quality Yarn',
      description: 'We source only skin-friendly organic milk cotton, velvet chenille, and durable anti-pilling yarn.',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      icon: UserCheck,
      title: 'Made Just for You',
      description: 'Items can be customized to your precise body measurements, color palettes, and stylistic preferences.',
      color: 'text-pink-600',
      bg: 'bg-pink-50',
    },
    {
      icon: MessageCircle,
      title: 'Seamless WhatsApp Orders',
      description: 'No complicated registration required. Chat directly with the artisan, customize, and track your order easily.',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      icon: PackageCheck,
      title: 'Safe Nationwide Delivery',
      description: 'Carefully gift-packaged and shipped to all 36 states across Nigeria with reliable dispatch tracking.',
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-pink-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-pink-600">
            The MIPS Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Why Choose MIPS Crochet?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            We are dedicated to revitalizing handcrafted slow fashion through thoughtful designs and personalized customer care.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#FAF7F5] rounded-3xl p-6 sm:p-7 border border-pink-100/70 hover:border-pink-200 hover:shadow-lg hover:shadow-pink-100/40 transition-all duration-300 space-y-3.5 group"
              >
                <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 group-hover:text-pink-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

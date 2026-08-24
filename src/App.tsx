import React, { useState, useEffect } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ShopSection } from './components/ShopSection';
import { CustomCrochetSection } from './components/CustomCrochetSection';
import { WhyChooseMips } from './components/WhyChooseMips';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Product } from './types';
import { Sparkles, Check } from 'lucide-react';

const MainApp: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { selectedProductForModal, setSelectedProductForModal, toastMessage } = useCart();

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) {
      const yOffset = -80;
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F5] text-[#1E1B1E] relative selection:bg-pink-200 selection:text-pink-900">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-neutral-900 text-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 text-xs sm:text-sm font-medium animate-in fade-in slide-in-from-top-3 duration-300 border border-neutral-700">
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero */}
        <Hero
          onShopClick={() => handleNavigate('shop')}
          onCustomClick={() => handleNavigate('custom')}
        />

        {/* Shop Catalogue */}
        <ShopSection
          onViewDetails={(product: Product) => setSelectedProductForModal(product)}
          onCustomRequestClick={() => handleNavigate('custom')}
        />

        {/* Dedicated Custom Crochet Request Studio */}
        <CustomCrochetSection />

        {/* Why Choose MIPS */}
        <WhyChooseMips />

        {/* Gallery / Lookbook */}
        <GallerySection />

        {/* About MIPS */}
        <AboutSection onExploreShop={() => handleNavigate('shop')} />

        {/* Customer Testimonials */}
        <TestimonialsSection />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Modals & Overlays */}
      <ProductModal
        product={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
      />

      <CartDrawer />
      <CheckoutModal />
      <OrderSuccessModal />
      <FloatingWhatsApp />

    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <MainApp />
    </CartProvider>
  );
}

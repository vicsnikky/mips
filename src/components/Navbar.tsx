import React, { useState, useEffect } from 'react';
import { ShoppingBag, MessageCircle, Menu, X, Sparkles, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { generateDirectChatWhatsAppLink, MIPS_WHATSAPP_DISPLAY } from '../utils/whatsapp';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const { totalItems, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop Catalogue' },
    { id: 'custom', label: 'Custom Crochet' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About MIPS' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 text-white text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 shadow-inner">
        <Sparkles className="w-3.5 h-3.5 animate-pulse text-pink-200" />
        <span>Handmade slow fashion &amp; bespoke custom crochet pieces • Chat on WhatsApp: <strong>{MIPS_WHATSAPP_DISPLAY}</strong></span>
        <Sparkles className="w-3.5 h-3.5 animate-pulse text-pink-200 hidden sm:inline" />
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-pink-100 py-3'
            : 'bg-white/80 backdrop-blur-sm border-b border-pink-50 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            id="nav-brand-logo"
            onClick={() => handleNavClick('home')}
            className="text-left group focus:outline-none"
          >
            <BrandLogo size="md" />
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-pink-50 text-pink-600 font-semibold shadow-xs'
                      : 'text-neutral-600 hover:text-pink-600 hover:bg-pink-50/50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* WhatsApp Fast CTA */}
            <a
              id="nav-whatsapp-cta"
              href={generateDirectChatWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Chat</span>
            </a>

            {/* Cart Button */}
            <button
              id="nav-cart-trigger"
              onClick={() => setIsCartOpen(true)}
              aria-label="View Shopping Cart"
              className="relative p-2.5 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-700 transition-colors flex items-center justify-center focus:outline-none"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu trigger */}
            <button
              id="mobile-menu-trigger"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-pink-50 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-neutral-900/40 backdrop-blur-xs flex justify-end">
          <div className="w-4/5 max-w-xs bg-white h-full shadow-2xl flex flex-col p-6 overflow-y-auto animate-in slide-in-from-right duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-pink-100 mb-4">
              <BrandLogo size="sm" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 rounded-full hover:bg-pink-50 text-neutral-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-1 flex-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-pink-100/80 text-pink-700 font-semibold'
                      : 'text-neutral-700 hover:bg-pink-50 hover:text-pink-600'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-pink-100 space-y-3">
              <a
                href={generateDirectChatWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl text-sm font-medium shadow-sm hover:bg-emerald-700"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat Admin on WhatsApp</span>
              </a>

              <div className="text-center text-xs text-neutral-500 flex items-center justify-center gap-1 pt-2">
                <span>Crafted with love</span>
                <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500" />
                <span>in Nigeria</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

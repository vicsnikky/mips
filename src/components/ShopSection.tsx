import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Sparkles, Filter, X } from 'lucide-react';
import { ProductCategory, Product } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';

interface ShopSectionProps {
  onViewDetails: (product: Product) => void;
  onCustomRequestClick: () => void;
}

export const ShopSection: React.FC<ShopSectionProps> = ({ onViewDetails, onCustomRequestClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc' | 'newest'>('popular');
  const [maxPrice, setMaxPrice] = useState<number>(55000);

  const categories: { id: ProductCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Items', count: PRODUCTS.length },
    { id: 'bags', label: 'Bags & Totes', count: PRODUCTS.filter((p) => p.category === 'bags').length },
    { id: 'clothing', label: 'Clothing & Sets', count: PRODUCTS.filter((p) => p.category === 'clothing').length },
    { id: 'accessories', label: 'Accessories', count: PRODUCTS.filter((p) => p.category === 'accessories').length },
    { id: 'baby', label: 'Baby Items', count: PRODUCTS.filter((p) => p.category === 'baby').length },
    { id: 'home-decor', label: 'Home Décor', count: PRODUCTS.filter((p) => p.category === 'home-decor').length },
    { id: 'gifts', label: 'Gifts & Bouquets', count: PRODUCTS.filter((p) => p.category === 'gifts').length },
    { id: 'custom', label: 'Custom Crochet', count: PRODUCTS.filter((p) => p.category === 'custom').length },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        const matchesCategory = product.categoryName.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesCategory) return false;
      }
      // Price filter
      if (product.price > maxPrice) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      // default: popular (rating & reviews)
      return b.reviewCount - a.reviewCount;
    });
  }, [selectedCategory, searchQuery, sortBy, maxPrice]);

  return (
    <section id="shop" className="py-16 sm:py-20 bg-[#FAF7F5] border-t border-pink-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 bg-pink-100 text-pink-700 px-3.5 py-1 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Artisanal Collection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Explore the MIPS Crochet Catalogue
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Browse our handmade collections or request custom modifications in your preferred colorway and dimensions.
          </p>
        </div>

        {/* Search, Filter & Controls Toolbar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-pink-100 shadow-xs mb-8 space-y-4">
          
          {/* Top Row: Search and Sort */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Search Box */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                id="shop-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search bags, tops, bouquets, hats..."
                className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-pink-100 bg-[#FAF7F5] text-xs sm:text-sm focus:border-pink-500 focus:bg-white outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown & Price Cap */}
            <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
              <div className="flex items-center gap-2 text-xs font-medium text-neutral-600">
                <SlidersHorizontal className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                <span>Sort by:</span>
                <select
                  id="shop-sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-[#FAF7F5] border border-pink-100 rounded-xl px-3 py-2 text-xs font-semibold text-neutral-800 outline-none focus:border-pink-500 cursor-pointer"
                >
                  <option value="popular">Most Popular</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-pink-50">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`cat-tab-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                    isSelected
                      ? 'bg-pink-600 text-white shadow-xs shadow-pink-200'
                      : 'bg-[#FAF7F5] text-neutral-600 hover:bg-pink-50 hover:text-pink-700 border border-pink-100/50'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-neutral-200/60 text-neutral-600'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Custom Order Callout Banner inside Shop */}
        <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 rounded-2xl p-5 sm:p-6 text-white shadow-md mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-pink-200" />
              <span>Don't see your dream crochet item listed?</span>
            </h3>
            <p className="text-xs text-pink-100 max-w-xl">
              We make custom orders from reference photos, sketches, or ideas. Choose any yarn, colour, and fit!
            </p>
          </div>
          <button
            id="shop-banner-custom-btn"
            onClick={onCustomRequestClick}
            className="shrink-0 bg-white hover:bg-pink-50 text-pink-700 px-5 py-2.5 rounded-xl text-xs font-bold shadow-sm transition-all hover:scale-105 active:scale-95"
          >
            Submit Custom Request ✨
          </button>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-3xl p-12 text-center max-w-md mx-auto border border-pink-100 shadow-xs space-y-4">
            <div className="w-16 h-16 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center mx-auto">
              <Filter className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-neutral-800">No matching crochet items found</h3>
            <p className="text-xs text-neutral-500">
              Try adjusting your search keywords or switching category filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-xl text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { X, Star, ShoppingBag, MessageCircle, Heart, ShieldCheck, Clock, Sparkles, Check } from 'lucide-react';
import { Product, ColorOption } from '../types';
import { useCart } from '../context/CartContext';
import { formatNaira, generateProductWhatsAppLink } from '../utils/whatsapp';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addToCart, setIsCartOpen } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<ColorOption | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [customNote, setCustomNote] = useState('');
  const [activeTab, setActiveTab] = useState<'details' | 'care'>('details');
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedImageIndex(0);
      setSelectedColor(product.colors[0]);
      setSelectedSize(product.sizes ? product.sizes[0] : '');
      setQuantity(1);
      setCustomNote('');
      setIsAdded(false);
    }
  }, [product]);

  if (!product || !selectedColor) return null;

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize || undefined, quantity, customNote);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleDirectWhatsAppOrder = () => {
    const link = generateProductWhatsAppLink(
      product,
      selectedColor.name,
      selectedSize || undefined,
      quantity,
      customNote
    );
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-pink-100 flex flex-col my-auto">
        
        {/* Close Button */}
        <button
          id="product-modal-close"
          onClick={onClose}
          aria-label="Close product details"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs hover:bg-pink-100 text-neutral-600 hover:text-pink-600 flex items-center justify-center shadow-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 p-5 sm:p-7 md:p-8">
          
          {/* Left Column: Image Gallery */}
          <div className="md:col-span-6 space-y-3">
            {/* Main large image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-pink-50/50 border border-pink-100 shadow-inner">
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
              {product.isBestSeller && (
                <span className="absolute top-3 left-3 bg-pink-600 text-white text-[11px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow-xs">
                  Best Seller
                </span>
              )}
            </div>

            {/* Thumbnail selector */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      selectedImageIndex === idx
                        ? 'border-pink-500 ring-2 ring-pink-200'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${product.name} preview ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Quick Guarantees */}
            <div className="p-3.5 bg-[#FDF8FA] rounded-2xl border border-pink-100/60 space-y-2 text-xs text-neutral-600">
              <div className="flex items-center gap-2 font-medium text-neutral-700">
                <ShieldCheck className="w-4 h-4 text-pink-600 shrink-0" />
                <span>100% Handcrafted Artisanal Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-pink-600 shrink-0" />
                <span>Estimated Crafting Time: {product.estimatedCraftDays}–{product.estimatedCraftDays + 2} business days</span>
              </div>
            </div>
          </div>

          {/* Right Column: Customization & Actions */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-5">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs text-neutral-500 mb-1">
                <span className="font-semibold text-pink-600 uppercase tracking-wider text-[11px]">
                  {product.categoryName}
                </span>
                <div className="flex items-center gap-1 text-amber-500 font-semibold text-xs">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>{product.rating}</span>
                  <span className="text-neutral-400">({product.reviewCount} customer reviews)</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-extrabold text-neutral-900 tracking-tight leading-snug">
                {product.name}
              </h2>

              {/* Price */}
              <div className="flex items-baseline gap-3 mt-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-pink-700">
                  {formatNaira(product.price * quantity)}
                </span>
                {quantity > 1 && (
                  <span className="text-xs text-neutral-500 font-normal">
                    ({formatNaira(product.price)} each)
                  </span>
                )}
                {product.originalPrice && (
                  <span className="text-sm text-neutral-400 line-through">
                    {formatNaira(product.originalPrice * quantity)}
                  </span>
                )}
              </div>

              {/* Tabs: Description vs Care Guide */}
              <div className="flex items-center gap-4 border-b border-pink-100 mt-4 mb-3 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setActiveTab('details')}
                  className={`pb-2 transition-colors border-b-2 ${
                    activeTab === 'details'
                      ? 'border-pink-600 text-pink-600'
                      : 'border-transparent text-neutral-500 hover:text-neutral-800'
                  }`}
                >
                  Product Details
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('care')}
                  className={`pb-2 transition-colors border-b-2 ${
                    activeTab === 'care'
                      ? 'border-pink-600 text-pink-600'
                      : 'border-transparent text-neutral-500 hover:text-neutral-800'
                  }`}
                >
                  Care &amp; Washing Guide
                </button>
              </div>

              {activeTab === 'details' ? (
                <div className="space-y-2 text-xs text-neutral-600 leading-relaxed">
                  <p>{product.fullDescription}</p>
                  <div className="pt-2">
                    <span className="font-semibold text-neutral-800">Yarn / Material: </span>
                    <span>{product.material}</span>
                  </div>
                  {product.dimensions && (
                    <div>
                      <span className="font-semibold text-neutral-800">Dimensions: </span>
                      <span>{product.dimensions}</span>
                    </div>
                  )}
                </div>
              ) : (
                <ul className="space-y-1.5 text-xs text-neutral-600">
                  {product.careInstructions.map((inst, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-pink-500 mt-0.5 shrink-0" />
                      <span>{inst}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Color Selection */}
              <div className="mt-5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <label className="font-semibold text-neutral-800">
                    Select Colour: <span className="text-pink-600 font-normal">{selectedColor.name}</span>
                  </label>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((c) => {
                    const isSelected = selectedColor.name === c.name;
                    return (
                      <button
                        key={c.name}
                        type="button"
                        onClick={() => setSelectedColor(c)}
                        className={`px-3 py-1.5 rounded-xl border text-xs font-medium flex items-center gap-2 transition-all ${
                          isSelected
                            ? 'border-pink-500 bg-pink-50/80 text-pink-900 ring-2 ring-pink-200'
                            : 'border-neutral-200 hover:border-pink-200 text-neutral-700 bg-white'
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-neutral-300 shadow-2xs"
                          style={{ backgroundColor: c.hex }}
                        />
                        <span>{c.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Size Selection (if applicable) */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mt-4 space-y-2">
                  <label className="font-semibold text-neutral-800 text-xs block">
                    Select Size / Option:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((sz) => {
                      const isSelected = selectedSize === sz;
                      return (
                        <button
                          key={sz}
                          type="button"
                          onClick={() => setSelectedSize(sz)}
                          className={`px-3 py-1.5 rounded-xl border text-xs font-medium transition-all ${
                            isSelected
                              ? 'border-pink-600 bg-pink-600 text-white shadow-xs'
                              : 'border-neutral-200 hover:border-pink-200 text-neutral-700 bg-white'
                          }`}
                        >
                          {sz}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="mt-4 flex items-center gap-4">
                <label className="font-semibold text-neutral-800 text-xs">Quantity:</label>
                <div className="flex items-center border border-pink-200 rounded-xl bg-pink-50/30 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center font-bold text-neutral-600 hover:bg-pink-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-bold text-xs text-neutral-800">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center font-bold text-neutral-600 hover:bg-pink-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Custom Instructions / Special notes */}
              <div className="mt-4 space-y-1.5">
                <label className="text-[11px] font-semibold text-neutral-700 flex items-center justify-between">
                  <span>Custom Note / Exact Fit Preference (Optional):</span>
                </label>
                <input
                  type="text"
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="e.g. Please make the strap 5cm longer, or specify exact bust measurements..."
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-neutral-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none transition-all placeholder:text-neutral-400"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-pink-100 space-y-2.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Add to Cart */}
                <button
                  id="modal-add-to-cart"
                  onClick={handleAddToCart}
                  className="w-full inline-flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold shadow-md shadow-pink-200 transition-all active:scale-98"
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Cart!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Cart ({formatNaira(product.price * quantity)})</span>
                    </>
                  )}
                </button>

                {/* Direct WhatsApp Order */}
                <button
                  id="modal-direct-whatsapp"
                  onClick={handleDirectWhatsAppOrder}
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold shadow-sm transition-all active:scale-98"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Order Now on WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-neutral-400">
                Free consultation on colors &amp; custom sizing directly via WhatsApp.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

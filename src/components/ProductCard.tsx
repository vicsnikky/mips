import React, { useState } from 'react';
import { Eye, ShoppingBag, Star, Heart, Check } from 'lucide-react';
import { Product, ColorOption } from '../types';
import { useCart } from '../context/CartContext';
import { formatNaira } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState<ColorOption>(product.colors[0]);
  const [isLiked, setIsLiked] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product, selectedColor, product.sizes ? product.sizes[0] : undefined, 1);
    setTimeout(() => setIsAdding(false), 600);
  };

  return (
    <div
      id={`product-card-${product.id}`}
      className="group bg-white rounded-2xl overflow-hidden border border-pink-100/80 hover:border-pink-200 shadow-xs hover:shadow-xl hover:shadow-pink-100/50 transition-all duration-300 flex flex-col h-full relative"
    >
      {/* Image Container with overlay & actions */}
      <div
        className="relative aspect-4/3 sm:aspect-square overflow-hidden bg-neutral-100 cursor-pointer"
        onClick={() => onViewDetails(product)}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isBestSeller && (
            <span className="bg-pink-600 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-xs">
              Best Seller
            </span>
          )}
          {product.isNew && (
            <span className="bg-rose-500 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-xs">
              New Arrival
            </span>
          )}
        </div>

        {/* Wishlist Heart Toggle */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          aria-label="Save to favorites"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs text-neutral-600 hover:text-pink-600 flex items-center justify-center shadow-xs transition-colors"
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-pink-600 text-pink-600' : ''}`} />
        </button>

        {/* Quick View overlay on desktop */}
        <div className="absolute inset-0 bg-neutral-900/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="bg-white hover:bg-pink-50 text-neutral-800 hover:text-pink-700 px-4 py-2 rounded-full text-xs font-semibold shadow-md flex items-center gap-1.5 transition-all transform translate-y-2 group-hover:translate-y-0"
          >
            <Eye className="w-3.5 h-3.5 text-pink-600" />
            <span>View Details</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-neutral-500 mb-1">
            <span className="font-medium text-pink-600 uppercase tracking-wider text-[10px]">
              {product.categoryName}
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-semibold text-[11px]">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-neutral-400">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onViewDetails(product)}
            className="font-bold text-neutral-900 text-base group-hover:text-pink-600 transition-colors line-clamp-1 cursor-pointer"
          >
            {product.name}
          </h3>

          {/* Short description */}
          <p className="text-xs text-neutral-500 line-clamp-2 mt-1 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Color Swatches */}
        <div>
          <div className="flex items-center gap-1.5 pt-1">
            <span className="text-[11px] text-neutral-400 font-medium mr-1">Colours:</span>
            {product.colors.slice(0, 4).map((c) => {
              const isSelected = selectedColor.name === c.name;
              return (
                <button
                  key={c.name}
                  type="button"
                  title={c.name}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedColor(c);
                  }}
                  style={{ backgroundColor: c.hex }}
                  className={`w-4 h-4 rounded-full border transition-all ${
                    isSelected
                      ? 'ring-2 ring-pink-500 ring-offset-1 scale-110 border-white'
                      : 'border-neutral-200 hover:scale-105'
                  }`}
                />
              );
            })}
            {product.colors.length > 4 && (
              <span className="text-[10px] text-neutral-400 font-medium">
                +{product.colors.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Price and Cart Button */}
        <div className="pt-2 border-t border-pink-50 flex items-center justify-between gap-2">
          <div>
            <div className="text-base font-extrabold text-neutral-900">
              {formatNaira(product.price)}
            </div>
            {product.originalPrice && (
              <div className="text-[11px] text-neutral-400 line-through">
                {formatNaira(product.originalPrice)}
              </div>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              id={`btn-view-${product.id}`}
              onClick={() => onViewDetails(product)}
              className="p-2 rounded-xl text-neutral-600 hover:text-pink-600 hover:bg-pink-50 transition-colors"
              title="View full specs"
              aria-label={`View full specs for ${product.name}`}
            >
              <Eye className="w-4 h-4" />
            </button>

            <button
              id={`btn-add-cart-${product.id}`}
              onClick={handleQuickAdd}
              disabled={isAdding}
              className="inline-flex items-center gap-1.5 bg-pink-600 hover:bg-pink-700 text-white px-3.5 py-2 rounded-xl text-xs font-semibold shadow-xs hover:shadow-md transition-all active:scale-95"
            >
              {isAdding ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

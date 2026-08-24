import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Plus, Minus, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatNaira } from '../utils/whatsapp';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalAmount,
    setIsCheckoutOpen,
  } = useCart();

  if (!isCartOpen) return null;

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-neutral-900/50 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-5 border-b border-pink-100 flex items-center justify-between bg-[#FDF8FA]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-neutral-900 text-base">Shopping Bag</h2>
              <p className="text-xs text-neutral-500">{totalItems} {totalItems === 1 ? 'item' : 'items'} selected</p>
            </div>
          </div>
          <button
            id="cart-drawer-close"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart drawer"
            className="p-2 rounded-full hover:bg-pink-100 text-neutral-500 hover:text-pink-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-20 h-20 rounded-full bg-pink-50 text-pink-400 flex items-center justify-center">
                <ShoppingBag className="w-10 h-10 stroke-1" />
              </div>
              <div>
                <h3 className="font-bold text-neutral-800 text-base">Your shopping bag is empty</h3>
                <p className="text-xs text-neutral-500 max-w-xs mt-1">
                  Discover our handmade crochet clothing, bags, floral bouquets, and accessories!
                </p>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2.5 rounded-full text-xs font-semibold shadow-xs"
              >
                Browse Crochet Items
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between text-xs pb-2 border-b border-pink-50">
                <span className="text-neutral-500">Order Items</span>
                <button
                  onClick={clearCart}
                  className="text-neutral-400 hover:text-red-600 transition-colors"
                >
                  Clear Bag
                </button>
              </div>

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-2xl bg-[#FAF7F5] border border-pink-100/70 flex gap-3.5 relative group"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-20 rounded-xl object-cover border border-pink-100 shrink-0 bg-white"
                  />

                  {/* Details */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <h4 className="font-bold text-xs sm:text-sm text-neutral-900 line-clamp-1">
                      {item.product.name}
                    </h4>

                    {/* Color & Size Badges */}
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                      <span className="inline-flex items-center gap-1 bg-white px-2 py-0.5 rounded-md border border-neutral-200 text-neutral-700">
                        <span
                          className="w-2.5 h-2.5 rounded-full border border-neutral-300"
                          style={{ backgroundColor: item.selectedColor.hex }}
                        />
                        {item.selectedColor.name}
                      </span>
                      {item.selectedSize && (
                        <span className="bg-white px-2 py-0.5 rounded-md border border-neutral-200 text-neutral-700">
                          {item.selectedSize}
                        </span>
                      )}
                    </div>

                    {item.customNote && (
                      <p className="text-[10px] text-pink-700 italic truncate">
                        Note: {item.customNote}
                      </p>
                    )}

                    {/* Price and Counter */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="font-extrabold text-xs text-pink-700">
                        {formatNaira(item.product.price * item.quantity)}
                      </span>

                      {/* Quantity Controls */}
                      <div className="flex items-center border border-pink-200 rounded-lg bg-white overflow-hidden">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center text-neutral-600 hover:bg-pink-50"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center font-bold text-xs text-neutral-800">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center text-neutral-600 hover:bg-pink-50"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Remove ${item.product.name} from bag`}
                    className="text-neutral-400 hover:text-red-500 p-1 self-start transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Footer with Subtotal & Proceed to Checkout */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-pink-100 bg-[#FDF8FA] space-y-3.5">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-neutral-500">
                <span>Subtotal ({totalItems} items):</span>
                <span className="font-medium text-neutral-800">{formatNaira(totalAmount)}</span>
              </div>
              <div className="flex justify-between text-neutral-500">
                <span>Delivery:</span>
                <span className="font-medium text-pink-700">Calculated upon address</span>
              </div>
              <div className="flex justify-between text-sm font-extrabold text-neutral-900 pt-2 border-t border-pink-100">
                <span>Total Amount:</span>
                <span className="text-base text-pink-700">{formatNaira(totalAmount)}</span>
              </div>
            </div>

            <div className="space-y-2">
              <button
                id="cart-proceed-checkout-btn"
                onClick={handleProceedToCheckout}
                className="w-full inline-flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white py-3.5 px-4 rounded-xl text-sm font-bold shadow-md shadow-pink-200 transition-all hover:shadow-lg active:scale-98"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full text-center text-xs text-neutral-500 hover:text-neutral-800 py-1"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

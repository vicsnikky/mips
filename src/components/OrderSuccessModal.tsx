import React from 'react';
import { CheckCircle2, MessageCircle, ShoppingBag, Sparkles, X, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatNaira, generateCartOrderWhatsAppLink } from '../utils/whatsapp';

export const OrderSuccessModal: React.FC = () => {
  const { lastCompletedOrder, setLastCompletedOrder } = useCart();

  if (!lastCompletedOrder) return null;

  const handleReopenWhatsApp = () => {
    const link = generateCartOrderWhatsAppLink(
      lastCompletedOrder.items,
      lastCompletedOrder.customer,
      lastCompletedOrder.total,
      lastCompletedOrder.refId
    );
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in zoom-in-95 duration-200">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 sm:p-8 border border-pink-100 text-center space-y-5">
        
        {/* Close */}
        <button
          onClick={() => setLastCompletedOrder(null)}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-pink-100 text-neutral-500 hover:text-pink-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon */}
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-sm ring-8 ring-emerald-50/50">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        {/* Title */}
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-pink-600 block mb-1">
            Order Formatted &amp; Sent
          </span>
          <h2 className="text-2xl font-extrabold text-neutral-900">
            Thank You, {lastCompletedOrder.customer.fullName}!
          </h2>
          <p className="text-xs text-neutral-600 mt-1 max-w-sm mx-auto">
            Your order details have been forwarded to MIPS admin on WhatsApp.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-[#FAF7F5] rounded-2xl p-4 border border-pink-100 text-left space-y-2.5 text-xs">
          <div className="flex justify-between items-center pb-2 border-b border-pink-100 font-bold">
            <span className="text-neutral-600">Order Reference:</span>
            <span className="text-pink-700">#{lastCompletedOrder.refId}</span>
          </div>

          <div className="space-y-1 text-neutral-700">
            <p><span className="text-neutral-400">Phone:</span> {lastCompletedOrder.customer.whatsappNumber}</p>
            <p><span className="text-neutral-400">Destination:</span> {lastCompletedOrder.customer.city}, {lastCompletedOrder.customer.state}</p>
            <p><span className="text-neutral-400">Items:</span> {lastCompletedOrder.items.length} unique crochet pieces</p>
          </div>

          <div className="pt-2 border-t border-pink-100 flex justify-between font-extrabold text-sm">
            <span>Total Amount:</span>
            <span className="text-pink-700">{formatNaira(lastCompletedOrder.total)}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2.5 pt-2">
          <button
            onClick={handleReopenWhatsApp}
            className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-emerald-200 transition-all active:scale-98"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Open / Re-send Order on WhatsApp</span>
          </button>

          <button
            onClick={() => setLastCompletedOrder(null)}
            className="w-full inline-flex items-center justify-center gap-2 bg-pink-50 hover:bg-pink-100 text-pink-700 py-3 px-4 rounded-xl text-xs font-semibold transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Continue Browsing Catalogue</span>
          </button>
        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { X, MessageCircle, ShieldCheck, Truck, Check, ArrowLeft, Sparkles, MapPin, Phone, User, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';
import { CheckoutCustomerInfo } from '../types';
import { formatNaira, generateCartOrderWhatsAppLink, MIPS_WHATSAPP_DISPLAY } from '../utils/whatsapp';

export const CheckoutModal: React.FC = () => {
  const {
    cart,
    totalAmount,
    totalItems,
    isCheckoutOpen,
    setIsCheckoutOpen,
    setIsCartOpen,
    clearCart,
    setLastCompletedOrder,
  } = useCart();

  const [customer, setCustomer] = useState<CheckoutCustomerInfo>({
    fullName: '',
    whatsappNumber: '',
    alternatePhone: '',
    email: '',
    deliveryAddress: '',
    city: 'Lagos',
    state: 'Lagos',
    deliveryNotes: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nigerianStates = [
    'Lagos', 'Abuja (FCT)', 'Rivers', 'Oyo', 'Ogun', 'Enugu', 'Anambra', 'Delta',
    'Edo', 'Kaduna', 'Kano', 'Akwa Ibom', 'Abia', 'Cross River', 'Imo', 'Ondo',
    'Osun', 'Kwara', 'Plateau', 'Benue', 'Bauchi', 'Bayelsa', 'Bornu', 'Ebonyi',
    'Ekiti', 'Gombe', 'Jigawa', 'Katsina', 'Kebbi', 'Kogi', 'Nasarawa', 'Niger',
    'Sokoto', 'Taraba', 'Yobe', 'Zamfara', 'International Destination'
  ];

  if (!isCheckoutOpen) return null;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customer.fullName.trim()) {
      setErrorMessage('Please enter your full name');
      return;
    }
    if (!customer.whatsappNumber.trim()) {
      setErrorMessage('Please enter your WhatsApp phone number');
      return;
    }
    if (!customer.deliveryAddress.trim()) {
      setErrorMessage('Please enter your delivery street address');
      return;
    }
    if (!customer.city.trim()) {
      setErrorMessage('Please enter your city / area');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    // Generate random 5-digit order reference ID
    const randomDigits = Math.floor(10000 + Math.random() * 90000);
    const orderRefId = `MIPS-${randomDigits}`;

    // Celebrate with confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E85D88', '#F472B6', '#FCE7F0', '#10B981'],
      });
    } catch {
      // ignore
    }

    // Generate WhatsApp link
    const whatsappLink = generateCartOrderWhatsAppLink(cart, customer, totalAmount, orderRefId);

    // Record order details for success screen
    setLastCompletedOrder({
      refId: orderRefId,
      customer: { ...customer },
      items: [...cart],
      total: totalAmount,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
    });

    // Clear cart and close checkout modal
    clearCart();
    setIsCheckoutOpen(false);

    // Open WhatsApp link in new tab
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-pink-100 flex flex-col my-auto">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-pink-100 flex items-center justify-between bg-[#FDF8FA]">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setIsCheckoutOpen(false);
                setIsCartOpen(true);
              }}
              className="p-1.5 rounded-full hover:bg-pink-100 text-neutral-600 hover:text-pink-600 transition-colors"
              title="Back to Bag"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h2 className="font-bold text-neutral-900 text-lg sm:text-xl">Checkout &amp; WhatsApp Order</h2>
              <p className="text-xs text-neutral-500">Provide your delivery info to finalize your order with MIPS</p>
            </div>
          </div>
          <button
            onClick={() => setIsCheckoutOpen(false)}
            aria-label="Close checkout"
            className="p-2 rounded-full hover:bg-pink-100 text-neutral-500 hover:text-pink-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Form */}
        <form onSubmit={handlePlaceOrder} className="p-5 sm:p-7 space-y-6">
          
          {/* Order Items Recap */}
          <div className="bg-[#FAF7F5] rounded-2xl p-4 sm:p-5 border border-pink-100/70 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-xs sm:text-sm text-neutral-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-pink-600" />
                <span>Order Summary ({totalItems} items)</span>
              </h3>
              <span className="font-extrabold text-sm text-pink-700">{formatNaira(totalAmount)}</span>
            </div>

            <div className="divide-y divide-pink-100 max-h-48 overflow-y-auto pr-1">
              {cart.map((item) => (
                <div key={item.id} className="py-2 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-10 h-10 rounded-lg object-cover border border-pink-100"
                    />
                    <div>
                      <p className="font-semibold text-neutral-800 line-clamp-1">{item.product.name}</p>
                      <p className="text-[11px] text-neutral-500">
                        {item.selectedColor.name} {item.selectedSize ? `• ${item.selectedSize}` : ''} • Qty: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <span className="font-bold text-neutral-800">
                    {formatNaira(item.product.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Delivery Details */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm text-neutral-900 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-pink-600" />
              <span>Contact &amp; Delivery Information</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Full Name <span className="text-pink-600">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={customer.fullName}
                    onChange={(e) => setCustomer({ ...customer, fullName: e.target.value })}
                    placeholder="e.g. Victor Alo"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs sm:text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none"
                  />
                </div>
              </div>

              {/* WhatsApp Phone */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  WhatsApp Phone Number <span className="text-pink-600">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={customer.whatsappNumber}
                    onChange={(e) => setCustomer({ ...customer, whatsappNumber: e.target.value })}
                    placeholder="e.g. 0810 752 1281"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs sm:text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Alternate Phone */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Alternate Phone <span className="text-neutral-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="tel"
                  value={customer.alternatePhone}
                  onChange={(e) => setCustomer({ ...customer, alternatePhone: e.target.value })}
                  placeholder="e.g. 0802 345 6789"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs sm:text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Email Address <span className="text-neutral-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="email"
                  value={customer.email}
                  onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                  placeholder="e.g. victor@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs sm:text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none"
                />
              </div>
            </div>

            {/* Delivery Address */}
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Street Address / Apartment / Estate <span className="text-pink-600">*</span>
              </label>
              <input
                type="text"
                required
                value={customer.deliveryAddress}
                onChange={(e) => setCustomer({ ...customer, deliveryAddress: e.target.value })}
                placeholder="e.g. Flat 4B, Sunflower Court, Admiralty Way, Lekki Phase 1"
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs sm:text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none"
              />
            </div>

            {/* City & State */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  City / Area / Town <span className="text-pink-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={customer.city}
                  onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                  placeholder="e.g. Lekki / Ikeja / Garki"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs sm:text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  State <span className="text-pink-600">*</span>
                </label>
                <select
                  value={customer.state}
                  onChange={(e) => setCustomer({ ...customer, state: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs sm:text-sm bg-white focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none cursor-pointer"
                >
                  {nigerianStates.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Delivery Notes / Special Instructions */}
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Additional Instructions / Preferred Delivery Day
              </label>
              <div className="relative">
                <FileText className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                <textarea
                  rows={2}
                  value={customer.deliveryNotes}
                  onChange={(e) => setCustomer({ ...customer, deliveryNotes: e.target.value })}
                  placeholder="e.g. Please deliver between Friday and Saturday. Call before arriving."
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs sm:text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs font-medium border border-red-100">
              {errorMessage}
            </div>
          )}

          {/* WhatsApp Direct Order CTA */}
          <div className="pt-3 border-t border-pink-100 space-y-3">
            <button
              id="place-order-whatsapp-btn"
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white py-4 px-6 rounded-2xl text-sm font-bold shadow-lg shadow-emerald-200 hover:shadow-xl transition-all active:scale-98"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Place Order via WhatsApp ({formatNaira(totalAmount)})</span>
            </button>

            <div className="flex items-center justify-center gap-6 text-[11px] text-neutral-500 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified WhatsApp Business</span>
              </span>
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-pink-600" />
                <span>Nationwide Shipping</span>
              </span>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};

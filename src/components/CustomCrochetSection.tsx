import React, { useState } from 'react';
import { Wand2, Upload, Image as ImageIcon, MessageCircle, Sparkles, CheckCircle2, Calendar, DollarSign, X } from 'lucide-react';
import { CustomOrderRequest } from '../types';
import { generateCustomOrderWhatsAppLink, MIPS_WHATSAPP_DISPLAY } from '../utils/whatsapp';

export const CustomCrochetSection: React.FC = () => {
  const [formData, setFormData] = useState<CustomOrderRequest>({
    customerName: '',
    whatsappNumber: '',
    email: '',
    itemType: 'Crochet Bag / Tote',
    preferredColor: 'Blush Pink & Soft Cream',
    preferredSize: 'Standard / Made to Fit',
    quantity: 1,
    budgetRange: '₦15,000 - ₦30,000',
    description: '',
    preferredDeliveryDate: '',
    additionalInstructions: '',
    referenceImageName: '',
    referenceImageDataUrl: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const itemTypes = [
    'Crochet Bag / Tote',
    'Halter Top / Crop Top',
    'Cardigan / Sweater',
    'Dress / Skirt Set',
    'Bucket Hat / Beanie',
    'Headband & Scrunchie Set',
    'Everlasting Flower Bouquet',
    'Baby Outfit & Booties',
    'Amigurumi Plush Toy',
    'Home Décor / Cushion Cover',
    'Swimwear / Bikini Set',
    'Other Unique Custom Piece',
  ];

  const budgetOptions = [
    'Under ₦10,000',
    '₦10,000 - ₦20,000',
    '₦20,000 - ₦35,000',
    '₦35,000 - ₦50,000',
    '₦50,000+',
    'Flexible / Awaiting Quote',
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrorMsg('Image size should be less than 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prev) => ({
          ...prev,
          referenceImageName: file.name,
          referenceImageDataUrl: reader.result as string,
        }));
        setErrorMsg('');
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setFormData((prev) => ({
      ...prev,
      referenceImageName: '',
      referenceImageDataUrl: '',
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerName.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }
    if (!formData.whatsappNumber.trim()) {
      setErrorMsg('Please enter your WhatsApp phone number');
      return;
    }
    if (!formData.description.trim()) {
      setErrorMsg('Please describe what you want us to craft');
      return;
    }

    setErrorMsg('');
    setIsSubmitted(true);

    // Generate WhatsApp link and open
    const whatsappLink = generateCustomOrderWhatsAppLink(formData);
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="custom" className="py-16 sm:py-20 bg-gradient-to-b from-[#FAF7F5] via-pink-50/40 to-[#FAF7F5] relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-pink-100/90 text-pink-700 px-4 py-1.5 rounded-full text-xs font-semibold">
            <Wand2 className="w-3.5 h-3.5 text-pink-600" />
            <span>Bespoke Handcrafted Orders</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Request Your Custom Crochet Piece
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Have a Pinterest pin, Instagram screenshot, or custom concept? Fill in the details below and we will tailor it to your exact fit, preferred colors, and style via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-pink-100 shadow-lg shadow-pink-100/40">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Customer Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    Your Full Name <span className="text-pink-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.customerName}
                    onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                    placeholder="e.g. Chioma Eze"
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-xs sm:text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    WhatsApp Phone Number <span className="text-pink-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsappNumber}
                    onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                    placeholder="e.g. 0810 752 1281"
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-xs sm:text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Email (Optional) */}
              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-1">
                  Email Address <span className="text-neutral-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. chioma@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-xs sm:text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none transition-all"
                />
              </div>

              {/* Item Type & Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    Type of Crochet Item <span className="text-pink-600">*</span>
                  </label>
                  <select
                    value={formData.itemType}
                    onChange={(e) => setFormData({ ...formData, itemType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-xs sm:text-sm bg-white focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none cursor-pointer"
                  >
                    {itemTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    Quantity
                  </label>
                  <div className="flex items-center border border-neutral-200 rounded-xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, quantity: Math.max(1, formData.quantity - 1) })}
                      className="w-10 py-2.5 text-center font-bold text-neutral-600 hover:bg-pink-50"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-bold text-xs">
                      {formData.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, quantity: formData.quantity + 1 })}
                      className="w-10 py-2.5 text-center font-bold text-neutral-600 hover:bg-pink-50"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Preferred Colour and Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    Preferred Colour(s) <span className="text-pink-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.preferredColor}
                    onChange={(e) => setFormData({ ...formData, preferredColor: e.target.value })}
                    placeholder="e.g. Dusty rose, Lilac & Cream multi"
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-xs sm:text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    Preferred Size / Body Measurements
                  </label>
                  <input
                    type="text"
                    value={formData.preferredSize}
                    onChange={(e) => setFormData({ ...formData, preferredSize: e.target.value })}
                    placeholder="e.g. Medium (Bust 36in, Waist 29in)"
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-xs sm:text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none"
                  />
                </div>
              </div>

              {/* Budget Range & Preferred Delivery Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    Estimated Budget Range
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-xs sm:text-sm bg-white focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none cursor-pointer"
                  >
                    {budgetOptions.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    Preferred Delivery Date <span className="text-neutral-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDeliveryDate}
                    onChange={(e) => setFormData({ ...formData, preferredDeliveryDate: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl border border-neutral-200 text-xs sm:text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none"
                  />
                </div>
              </div>

              {/* Detailed Description */}
              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-1">
                  Detailed Description of Your Idea <span className="text-pink-600">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe stitch patterns, sleeve styles, strap length, lining preferences, or occasion..."
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-xs sm:text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none transition-all"
                />
              </div>

              {/* Reference Image Upload */}
              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-1">
                  Upload Reference Photo / Pinterest Screenshot <span className="text-neutral-400 font-normal">(Optional)</span>
                </label>
                
                {formData.referenceImageDataUrl ? (
                  <div className="relative rounded-2xl overflow-hidden border-2 border-pink-200 bg-pink-50/30 p-2 flex items-center gap-3">
                    <img
                      src={formData.referenceImageDataUrl}
                      alt="Reference preview"
                      className="w-16 h-16 object-cover rounded-xl border border-pink-200"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-neutral-800 truncate">
                        {formData.referenceImageName}
                      </p>
                      <p className="text-[11px] text-emerald-600 font-medium">Ready to attach in WhatsApp chat</p>
                    </div>
                    <button
                      type="button"
                      onClick={removeImage}
                      className="p-1.5 rounded-full hover:bg-pink-100 text-neutral-500 hover:text-pink-600 mr-2"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <label className="border-2 border-dashed border-pink-200 hover:border-pink-400 rounded-2xl p-5 flex flex-col items-center justify-center gap-2 cursor-pointer bg-[#FDF8FA] hover:bg-pink-50/50 transition-colors">
                    <Upload className="w-6 h-6 text-pink-500" />
                    <span className="text-xs font-semibold text-neutral-700">
                      Click or drag to upload reference photo
                    </span>
                    <span className="text-[10px] text-neutral-400">PNG, JPG, JPEG up to 5MB</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              {/* Additional Instructions */}
              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-1">
                  Any Extra Notes or Delivery Instructions
                </label>
                <input
                  type="text"
                  value={formData.additionalInstructions}
                  onChange={(e) => setFormData({ ...formData, additionalInstructions: e.target.value })}
                  placeholder="e.g. Please deliver before my birthday on the 25th"
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-xs sm:text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none"
                />
              </div>

              {/* Error Alert */}
              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs font-medium border border-red-100">
                  {errorMsg}
                </div>
              )}

              {/* Submit CTA */}
              <button
                id="send-custom-whatsapp-btn"
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-6 rounded-2xl text-sm font-bold shadow-md shadow-emerald-200 hover:shadow-lg transition-all active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Send Custom Request on WhatsApp</span>
              </button>

              <p className="text-center text-[11px] text-neutral-400">
                This will automatically generate a WhatsApp message addressed to <strong>{MIPS_WHATSAPP_DISPLAY}</strong>.
              </p>
            </form>
          </div>

          {/* Right Column: Order Process & Live Preview */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Message Preview Card */}
            <div className="bg-white rounded-3xl p-6 border border-pink-100 shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-pink-100">
                <Sparkles className="w-4 h-4 text-pink-600" />
                <h3 className="font-bold text-sm text-neutral-900">Live Request Summary</h3>
              </div>

              <div className="bg-[#FAF7F5] rounded-2xl p-4 space-y-2.5 text-xs text-neutral-700 border border-pink-100/60 font-mono">
                <p className="font-semibold text-pink-700">✨ Custom MIPS Crochet Request</p>
                <div>
                  <span className="text-neutral-400">Client: </span>
                  <span className="font-medium text-neutral-900">{formData.customerName || '[Your Name]'}</span>
                </div>
                <div>
                  <span className="text-neutral-400">Item: </span>
                  <span className="font-medium text-neutral-900">{formData.itemType} (Qty: {formData.quantity})</span>
                </div>
                <div>
                  <span className="text-neutral-400">Colour: </span>
                  <span className="font-medium text-neutral-900">{formData.preferredColor}</span>
                </div>
                <div>
                  <span className="text-neutral-400">Size: </span>
                  <span className="font-medium text-neutral-900">{formData.preferredSize || 'Standard'}</span>
                </div>
                <div>
                  <span className="text-neutral-400">Budget: </span>
                  <span className="font-medium text-neutral-900">{formData.budgetRange}</span>
                </div>
                {formData.description && (
                  <div className="pt-1 border-t border-neutral-200/60">
                    <span className="text-neutral-400 block text-[10px]">Notes:</span>
                    <span className="italic line-clamp-3 text-neutral-800">"{formData.description}"</span>
                  </div>
                )}
                {formData.referenceImageName && (
                  <div className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Reference photo ready to share</span>
                  </div>
                )}
              </div>
            </div>

            {/* Step-by-Step Custom Order Guide */}
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-3xl p-6 border border-pink-100 shadow-sm space-y-4">
              <h3 className="font-bold text-sm text-neutral-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-pink-600" />
                <span>How Custom Ordering Works</span>
              </h3>

              <ol className="space-y-3.5 text-xs text-neutral-600">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center shrink-0 text-[11px]">
                    1
                  </span>
                  <div>
                    <strong className="text-neutral-800 block">Submit Your Dream Idea</strong>
                    Fill out this form with your color, fit, and reference inspirations.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center shrink-0 text-[11px]">
                    2
                  </span>
                  <div>
                    <strong className="text-neutral-800 block">WhatsApp Consultation &amp; Quote</strong>
                    We discuss yarn options, take your measurements, and send a final quote.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center shrink-0 text-[11px]">
                    3
                  </span>
                  <div>
                    <strong className="text-neutral-800 block">Handmade Crafting &amp; Updates</strong>
                    We hand-stitch your piece and send progress updates and photos.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center shrink-0 text-[11px]">
                    4
                  </span>
                  <div>
                    <strong className="text-neutral-800 block">Nationwide Delivery</strong>
                    Your finished luxury crochet piece is carefully packaged and shipped to your doorstep.
                  </div>
                </li>
              </ol>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

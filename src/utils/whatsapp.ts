import { CartItem, CheckoutCustomerInfo, CustomOrderRequest, Product } from '../types';

export const MIPS_WHATSAPP_NUMBER = '2348107521281';
export const MIPS_WHATSAPP_DISPLAY = '+234 810 752 1281';
export const MIPS_EMAIL = 'iyinmiponancy@gmail.com';
export const MIPS_LOCATION = 'Lagos, Nigeria (Nationwide & Worldwide Shipping)';
export const MIPS_TIKTOK_URL = 'https://www.tiktok.com/@atii._._?_r=1&_t=ZS-999DhCG3w6C';
export const MIPS_TIKTOK_HANDLE = '@atii._._';
export const MIPS_INSTAGRAM_URL = 'https://www.instagram.com/mips_._?igsi=amQ4cmN5b2NqbHM%3D&utm_source=qr';
export const MIPS_INSTAGRAM_HANDLE = '@mips_._';

export function formatNaira(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount).replace('NGN', '₦');
}

/**
 * Creates WhatsApp URL for quick inquiry on a single product
 */
export function generateProductWhatsAppLink(
  product: Product,
  selectedColor?: string,
  selectedSize?: string,
  quantity: number = 1,
  customNote?: string
): string {
  let message = `Hello MIPS, I am interested in ordering:\n\n`;
  message += `🧶 *Product:* ${product.name}\n`;
  message += `💰 *Price:* ${formatNaira(product.price * quantity)} (${formatNaira(product.price)} each)\n`;
  if (selectedColor) message += `🎨 *Colour:* ${selectedColor}\n`;
  if (selectedSize) message += `📏 *Size:* ${selectedSize}\n`;
  message += `🔢 *Quantity:* ${quantity}\n`;
  if (customNote && customNote.trim()) {
    message += `📝 *Custom Note:* ${customNote.trim()}\n`;
  }
  message += `\nCould you please confirm availability and delivery timeline? Thank you!`;

  return `https://wa.me/${MIPS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Creates WhatsApp URL for full cart checkout
 */
export function generateCartOrderWhatsAppLink(
  items: CartItem[],
  customer: CheckoutCustomerInfo,
  totalAmount: number,
  orderRefId: string
): string {
  let message = `Hello MIPS, I would like to place an order.\n\n`;
  message += `*Order Reference:* #${orderRefId}\n\n`;
  message += `*Customer Details:*\n`;
  message += `Name: ${customer.fullName}\n`;
  message += `Phone: ${customer.whatsappNumber}\n`;
  if (customer.alternatePhone) {
    message += `Alt Phone: ${customer.alternatePhone}\n`;
  }
  if (customer.email) {
    message += `Email: ${customer.email}\n`;
  }
  message += `Delivery Address: ${customer.deliveryAddress}, ${customer.city}, ${customer.state}\n\n`;

  message += `*Order Items:*\n`;
  items.forEach((item, index) => {
    message += `\n${index + 1}. *${item.product.name}*\n`;
    message += `   Colour: ${item.selectedColor.name}\n`;
    if (item.selectedSize) {
      message += `   Size: ${item.selectedSize}\n`;
    }
    message += `   Quantity: ${item.quantity}\n`;
    message += `   Price: ${formatNaira(item.product.price * item.quantity)}\n`;
    if (item.customNote) {
      message += `   Custom Note: ${item.customNote}\n`;
    }
  });

  message += `\n*Total:* ${formatNaira(totalAmount)}\n`;

  if (customer.deliveryNotes && customer.deliveryNotes.trim()) {
    message += `\n*Additional Instructions:*\n${customer.deliveryNotes.trim()}\n`;
  }

  message += `\nThank you! Looking forward to your confirmation.`;

  return `https://wa.me/${MIPS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Creates WhatsApp URL for Custom Crochet Requests
 */
export function generateCustomOrderWhatsAppLink(customReq: CustomOrderRequest): string {
  let message = `Hello MIPS, I would like to request a *Custom Crochet Piece* ✨\n\n`;
  message += `*Customer Details:*\n`;
  message += `Name: ${customReq.customerName}\n`;
  message += `WhatsApp: ${customReq.whatsappNumber}\n`;
  if (customReq.email) {
    message += `Email: ${customReq.email}\n`;
  }
  message += `\n*Custom Request Details:*\n`;
  message += `🧶 *Item Type:* ${customReq.itemType}\n`;
  message += `🎨 *Preferred Colour(s):* ${customReq.preferredColor}\n`;
  message += `📏 *Preferred Size / Dimensions:* ${customReq.preferredSize}\n`;
  message += `🔢 *Quantity:* ${customReq.quantity}\n`;
  message += `💵 *Estimated Budget Range:* ${customReq.budgetRange}\n`;
  if (customReq.preferredDeliveryDate) {
    message += `📅 *Preferred Date:* ${customReq.preferredDeliveryDate}\n`;
  }
  message += `\n*Description & Idea:*\n${customReq.description}\n`;

  if (customReq.additionalInstructions && customReq.additionalInstructions.trim()) {
    message += `\n*Additional Notes / Measurements:*\n${customReq.additionalInstructions.trim()}\n`;
  }

  if (customReq.referenceImageName) {
    message += `\n📷 *Reference Image:* [I have a reference photo (${customReq.referenceImageName}) to attach right now]\n`;
  }

  message += `\nPlease let me know your availability, quotation, and crafting timeline. Thank you!`;

  return `https://wa.me/${MIPS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Quick direct chat WhatsApp link
 */
export function generateDirectChatWhatsAppLink(customGreeting?: string): string {
  const message = customGreeting || 'Hello MIPS! I saw your crochet products and would like to make an inquiry.';
  return `https://wa.me/${MIPS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

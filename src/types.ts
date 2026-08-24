export type ProductCategory = 
  | 'all'
  | 'bags'
  | 'clothing'
  | 'accessories'
  | 'baby'
  | 'home-decor'
  | 'gifts'
  | 'custom';

export interface ColorOption {
  name: string;
  hex: string;
  classBg?: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryName: string;
  price: number;
  originalPrice?: number;
  description: string;
  fullDescription: string;
  images: string[];
  colors: ColorOption[];
  sizes?: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  estimatedCraftDays: number;
  material: string;
  careInstructions: string[];
  dimensions?: string;
}

export interface CartItem {
  id: string; // unique cart line id: productId-color-size
  product: Product;
  selectedColor: ColorOption;
  selectedSize?: string;
  quantity: number;
  customNote?: string;
}

export interface CustomOrderRequest {
  customerName: string;
  whatsappNumber: string;
  email?: string;
  itemType: string;
  preferredColor: string;
  preferredSize: string;
  quantity: number;
  budgetRange: string;
  description: string;
  preferredDeliveryDate: string;
  additionalInstructions: string;
  referenceImageName?: string;
  referenceImageDataUrl?: string;
}

export interface CheckoutCustomerInfo {
  fullName: string;
  whatsappNumber: string;
  alternatePhone?: string;
  email?: string;
  deliveryAddress: string;
  city: string;
  state: string;
  deliveryNotes?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  comment: string;
  productPurchased: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'ordering' | 'custom' | 'care' | 'delivery';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  categoryKey: 'fashion' | 'bags' | 'accessories' | 'baby' | 'home' | 'gifts';
  imageUrl: string;
  description: string;
  craftTime: string;
}

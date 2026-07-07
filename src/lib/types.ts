export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  category: string;
  features: string[];
  specs: { label: string; value: string }[];
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: boolean;
  badge?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

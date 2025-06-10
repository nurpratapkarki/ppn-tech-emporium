
export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string | null;
  service_id: string | null;
  name: string;
  description: string | null;
  sku: string | null;
  quantity: number;
  unit_price: number;
  total_price: number;
  product_options: any;
  created_at: string;
  products?: {
    name: string;
    price: number;
    thumbnail_url: string | null;
  } | null;
  services?: {
    name: string;
    price: number;
    thumbnail_url: string | null;
  } | null;
}

export interface Order {
  id: string;
  order_number: string;
  user_id: string;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
  payment_status: 'pending' | 'processing' | 'completed' | 'failed' | 'refunded' | 'cancelled';
  payment_method: string | null;
  payment_reference: string | null;
  subtotal: number;
  tax_amount: number;
  shipping_amount: number;
  discount_amount: number;
  total_amount: number;
  currency: string;
  billing_address: any;
  shipping_address: any | null;
  shipping_method: string | null;
  tracking_number: string | null;
  estimated_delivery_date: string | null;
  delivered_at: string | null;
  notes: string | null;
  internal_notes: string | null;
  created_at: string;
  updated_at: string;
  order_items: OrderItem[];
}

type ProductStatusType = "active" | "inactive";
export interface ProductType {

    // TODO : الحجات دي من عندي يعني لكن الباك معملهاش
  image:string,
  price: number,
  oldPrice: number,
  category: any,
  rating: number,
  sale: boolean,

  // new 
  id: number;
  name: string;
  image: string;
  description: string;
  specifications: string;
  price: string;
  cost_price: string;
  discount_price: string;
  stock: number;
  min_order_quantity: number;
  max_order_quantity: number | null;
  sku: string;
  barcode: string;
  status: string;
  is_featured: number;
  created_at: string;
  updated_at: string;
}
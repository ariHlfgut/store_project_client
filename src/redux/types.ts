export interface User {
  id: number;
  full_name: string;
  email: string;
  address: { city: string; street: string; apartment_number: number };
  password: string;
}

export interface AuthState {
  userLogin: User | null;
}
export interface ProductTypes {
  id: string;
  category_id: string;
  name: string;
  title: string;
  description: string;
  price: number;
  img_url: string;
  units_in_stock: number;
  rate: number;
  count_clicks: number;
  color: string;
  model: string;
}
export interface CartState {
  CartProducts: ProductTypes | null;
}


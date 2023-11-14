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

import { Product } from '../lib';
import { createContext, useState } from 'react';

export type CartValue = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
};

const defaultCartValue: CartValue = {
  cartItems: [],
  addToCart: () => undefined,
};

export const CartContext = createContext<CartValue>(defaultCartValue);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  function addToCart(product: Product) {
    setCartItems((prev) => [...prev, product]);
  }

  return (
    <>
      <CartContext.Provider value={{ cartItems, addToCart }}>
        {children}
      </CartContext.Provider>
    </>
  );
}

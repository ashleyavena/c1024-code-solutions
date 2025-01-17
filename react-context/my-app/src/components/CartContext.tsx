import { createContext, useState } from 'react';
import { Product } from '../lib';

// data type for by Context Value
export type CartValue = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
};

// default data values to input into createContext
const defaultCartValue: CartValue = {
  cartItems: [],
  addToCart: () => undefined, // "do nothing function" or "NO-OP": no operation
};

export const CartContext = createContext<CartValue>(defaultCartValue);

export function CartProvider({ children }: { children: React.ReactNode }) {
  // state value to hold cart contents
  // changing context value done w state setter, new value pass will issue re-render
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // function to add to array to produce new instance of array so state setter is triggered
  function addToCart(product: Product) {
    setCartItems([...cartItems, product]);
  }

  return (
    <>
      <CartContext.Provider value={{ cartItems, addToCart }}>
        {children}
      </CartContext.Provider>
    </>
  );
}

// type Props={
//   children: ReactNode;
// }

// these two implementations of the children are the same

// { children }: { children: React.ReactNode }

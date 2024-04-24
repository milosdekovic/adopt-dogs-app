import { ReactNode, createContext, useContext, useState } from "react";
import { Dog } from "../components/DogCard";

interface AdoptationProviderProps {
  children: ReactNode;
}

interface AdoptationContextProps {
  getQuantity: (index: number) => number;
  increaseQuantity: (index: number, dog: Dog) => void;
  decreaseQuantity: (index: number) => void;
  removeFromCart: (index: number) => void;
  cartQuantity: number;
  getCartItems: () => CartItemProps[];
  clearCart: () => void;
}

interface CartItemProps {
  index: number;
  quantity: number;
  dog: Dog;
}

const AdoptationContext = createContext({} as AdoptationContextProps);

export function useAdoptation() {
  return useContext(AdoptationContext);
}

export function AdoptationProvider({ children }: AdoptationProviderProps) {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);

  function getQuantity(index: number) {
    return cartItems.find((item) => item.index === index)?.quantity || 0;
  }

  function getCartItems() {
    return cartItems;
  }

  function increaseQuantity(index: number, dog: Dog) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.index === index) == null) {
        return [...currItems, { index, quantity: 1, dog: dog }];
      } else {
        return currItems.map((item) =>
          item.index === index
            ? { ...item, quantity: item.quantity + 1, dog: dog }
            : item,
        );
      }
    });
  }

  function decreaseQuantity(index: number) {
    setCartItems((currItems) => {
      const currentItem = currItems.find((item) => item.index === index);
      if (currentItem && currentItem.quantity === 1) {
        return currItems.filter((item) => item.index !== index);
      } else {
        return currItems.map((item) =>
          item.index === index
            ? { ...item, quantity: item.quantity - 1, dog: item.dog }
            : item,
        );
      }
    });
  }

  function removeFromCart(index: number) {
    setCartItems((currItems) =>
      currItems.filter((item) => item.index !== index),
    );
  }

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0,
  );

  function clearCart() {
    setCartItems([]);
  }

  return (
    <AdoptationContext.Provider
      value={{
        getQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        cartQuantity,
        getCartItems,
        clearCart,
      }}
    >
      {children}
    </AdoptationContext.Provider>
  );
}

"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  addItem: (pizza: Omit<CartItem, "quantity">) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("pizzahub-cart");

      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          setItems(parsedCart);
        }
      }
    } catch {
      localStorage.removeItem("pizzahub-cart");
    }

    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("pizzahub-cart", JSON.stringify(items));
    }
  }, [items, isHydrated]);

  const addItem = useCallback((pizza: Omit<CartItem, "quantity">) => {
    setItems((current) => {
      const existing = current.find((item) => item.id === pizza.id);

      if (existing) {
        return current.map((item) =>
          item.id === pizza.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...pizza, quantity: 1 }];
    });
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity < 1) return;

    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const value = useMemo(
    () => ({
      items,
      totalItems,
      subtotal,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
    }),
    [
      items,
      totalItems,
      subtotal,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
    ]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}

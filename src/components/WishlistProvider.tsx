"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface WishlistContextType {
  items: string[];
  toggleItem: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist must be used within WishlistProvider");
  return context;
}

export default function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<string[]>([]);

  const toggleItem = (productId: string) => {
    setItems((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const isWishlisted = (productId: string) => items.includes(productId);

  return (
    <WishlistContext.Provider value={{ items, toggleItem, isWishlisted }}>
      {children}
    </WishlistContext.Provider>
  );
}

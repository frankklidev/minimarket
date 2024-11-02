// components/CartProvider.tsx
"use client";

import React, { useState } from "react";
import { Product } from "../lib/api";
import ProductList from "./ProductList";
import Cart from "./Cart";

type CartItem = Product & { quantity: number };

type CartProviderProps = {
  products: Product[];
};

const CartProvider: React.FC<CartProviderProps> = ({ products }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      // Verifica si el producto ya existe en el carrito
      const existingItem = prevCart.find((item) => item.id === product.id);

      // Si ya existe, no lo agrega de nuevo
      if (existingItem) return prevCart;

      // Si no existe, lo agrega con una cantidad inicial de 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const incrementQuantity = (productId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <>
      <ProductList products={products} onAddToCart={handleAddToCart} />
    </>
  );
};

export default CartProvider;

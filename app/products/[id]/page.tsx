'use client';

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { products } from "@/app/lib/api";
import { useCart } from "@/app/context/CartContext";
import { ShoppingCart, Trash, ArrowLeft } from "lucide-react";

const ProductPage: React.FC = () => {
  const { id } = useParams();
  const router = useRouter();
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);
  const { addToCart, removeFromCart, isInCart } = useCart();

  if (!product) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold text-gray-700">
          Producto no encontrado
        </h1>
        <p className="text-gray-500">
          El producto con ID {id} no existe.
        </p>
        <button
          onClick={() => router.back()}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600"
        >
          <ArrowLeft className="inline mr-2" size={20} />
          Regresar
        </button>
      </div>
    );
  }

  const inCart = isInCart(productId);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => router.push('/categories')}
        className="mb-6 flex items-center text-blue-500 hover:text-blue-700 transition"
      >
        <ArrowLeft className="mr-2" size={20} />
        Regresar
      </button>
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-auto rounded mb-6"
      />
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-xl font-semibold text-primary mb-6">
        ${product.price}
      </p>
      <button
        onClick={() => (inCart ? removeFromCart(productId) : addToCart(product))}
        className={`flex items-center justify-center w-full py-3 px-5 rounded-full font-semibold transition-colors duration-200 ${
          inCart
            ? "bg-red-600 text-white hover:bg-red-700"
            : "bg-gradient-to-r from-blue-400 to-blue-700 text-white hover:from-blue-500 hover:to-blue-800"
        }`}
      >
        {inCart ? (
          <>
            <Trash className="mr-2" size={20} />
            Remover del carrito
          </>
        ) : (
          <>
            <ShoppingCart className="mr-2" size={20} />
            Agregar al carrito
          </>
        )}
      </button>
    </div>
  );
};

export default ProductPage;

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
        <h1 className="text-3xl font-bold text-gray-800">
          Producto no encontrado
        </h1>
        <p className="text-lg text-gray-500 mt-2">
          El producto con ID {id} no existe.
        </p>
        <button
          onClick={() => router.back()}
          className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition"
        >
          <ArrowLeft className="inline mr-2" size={20} />
          Regresar
        </button>
      </div>
    );
  }

  const inCart = isInCart(productId);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={() => router.push('/categories')}
          className="flex items-center text-blue-500 hover:text-blue-700 font-medium transition"
        >
          <ArrowLeft className="mr-2" size={24} />
          Regresar
        </button>
        <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Imagen del producto */}
        <div className="overflow-hidden rounded-lg shadow-md">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-auto object-cover transform hover:scale-105 transition duration-300"
          />
        </div>

        {/* Detalles del producto */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-lg text-gray-700 mb-6">{product.description}</p>
            <p className="text-3xl font-bold text-primary mb-8">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <button
            onClick={() =>
              inCart ? removeFromCart(productId) : addToCart(product)
            }
            className={`flex items-center justify-center w-full py-4 px-6 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300 ${
              inCart
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800"
            }`}
          >
            {inCart ? (
              <>
                <Trash className="mr-2" size={24} />
                Remover del carrito
              </>
            ) : (
              <>
                <ShoppingCart className="mr-2" size={24} />
                Agregar al carrito
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

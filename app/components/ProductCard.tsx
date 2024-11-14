// components/ProductCard.tsx
import React from "react";
import { Product } from "@/app/lib/api";
import { ShoppingCart, Trash } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, removeFromCart, isInCart } = useCart();
  const inCart = isInCart(product.id);

  return (
    <div className="relative p-6 border rounded-xl shadow-lg bg-white hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-105 min-h-[420px] max-h-[420px] flex flex-col justify-between">
      {/* Icono de "Oferta Caliente" */}
      {product.isOnSale && (
        <div className="absolute top-2 left-2 bg-red-600 text-white py-1 px-3 rounded-full text-sm font-semibold">
          🔥 Oferta Caliente
        </div>
      )}

      <div className="overflow-hidden rounded-lg shadow-md">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className="pt-4 pb-2 text-center flex-1 flex flex-col">
        <h2 className="text-2xl font-bold text-primary mb-2">{product.name}</h2>
        <p className="text-xl font-bold text-secondary mb-3">
          ${product.price}
        </p>
        <p className="text-gray-700 text-sm mb-5 line-clamp-2">
          {product.description}
        </p>
      </div>

      {/* Botón de agregar o remover del carrito */}
      <div className="mt-auto">
        <button
          onClick={() => (inCart ? removeFromCart(product.id) : addToCart(product))}
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
    </div>
  );
};

export default ProductCard;

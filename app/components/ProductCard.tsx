// components/ProductCard.tsx
import React from "react";
import { Product } from "@/app/lib/api";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(product.id);

  return (
    <div className="relative p-4 border rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow transform hover:-translate-y-1 hover:scale-105 min-h-[400px] max-h-[400px] flex flex-col justify-between">
      {/* Icono de "Oferta Caliente" */}
      {product.isOnSale && (
        <div className="absolute top-2 left-2 bg-red-500 text-white p-1 rounded-full flex items-center justify-center">
          🔥
        </div>
      )}

      <div className="overflow-hidden rounded-t-lg">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      
      <div className="p-4 text-center flex-1 flex flex-col">
        <h2 className="text-xl font-semibold text-primary mb-1">{product.name}</h2>
        <p className="text-lg font-bold text-secondary mb-2">${product.price}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
      </div>

      {/* Botón de agregar al carrito */}
      <div className="mt-auto">
        <button
          onClick={() => addToCart(product)}
          disabled={inCart}
          className={`flex items-center justify-center w-full py-2 px-4 rounded-lg font-medium transition-colors ${
            inCart ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-accent text-white hover:bg-accent-dark"
          }`}
        >
          <ShoppingCart className="mr-2" size={20} />
          {inCart ? "Ya en el carrito" : "Agregar al carrito"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

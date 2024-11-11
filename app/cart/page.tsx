'use client';

import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import { Trash, Minus, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, cartTotal, addToCart } = useCart();
  const router = useRouter();
  const [showConfirmClearModal, setShowConfirmClearModal] = useState(false);

  const handleCheckout = () => {
    // Guarda el carrito en localStorage y redirige sin limpiar el carrito
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("cartTotal", JSON.stringify(cartTotal()));
    router.push("/confirmation"); // Redirigir a la página de confirmación
  };

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Carrito de Compras</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Tu carrito está vacío.</p>
      ) : (
        <div>
          {/* Lista de productos en el carrito */}
          <ul className="space-y-4 mb-6">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-4">
                  <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600 text-sm">${item.price.toFixed(2)} x {item.quantity}</p>
                  </div>
                </div>
                
                {/* Controles de cantidad */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => addToCart(item)}
                    className="p-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                  >
                    <Plus size={16} />
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                  >
                    <Minus size={16} />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-1 text-red-500 hover:bg-red-100 rounded transition"
                  >
                    <Trash size={16} />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Total y acciones */}
          <div className="text-right">
            <p className="text-xl font-bold">Total: ${cartTotal().toFixed(2)}</p>

            <button
              onClick={() => setShowConfirmClearModal(true)}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
            >
              Vaciar Carrito
            </button>
            <button
              onClick={handleCheckout}
              className="mt-4 ml-4 bg-accent text-white py-2 px-4 rounded hover:bg-accent-dark transition"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      )}

      {/* Modal de confirmación para vaciar el carrito */}
      {showConfirmClearModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">¿Estás seguro?</h3>
            <p className="text-gray-600 mb-6">Esta acción vaciará todos los artículos en tu carrito.</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowConfirmClearModal(false)}
                className="py-2 px-4 rounded bg-gray-200 hover:bg-gray-300 transition"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  clearCart();
                  setShowConfirmClearModal(false);
                }}
                className="py-2 px-4 rounded bg-red-500 text-white hover:bg-red-600 transition"
              >
                Vaciar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default CartPage;

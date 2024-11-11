// components/Cart.tsx
import React from "react";
import { Product } from "../lib/api";
import { Plus, Minus } from "lucide-react";
import { useRouter } from "next/navigation";

type CartItem = Product & { quantity: number };

type CartProps = {
  cartItems: CartItem[];
  onIncrement: (productId: number) => void;
  onDecrement: (productId: number) => void;
};

const Cart: React.FC<CartProps> = ({ cartItems, onIncrement, onDecrement }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const router = useRouter();

  // Maneja la navegación al hacer clic en "Finalizar compra"
  const handleCheckout = () => {
    router.push("/confirmation"); // Ruta a la página de confirmación
  };

  return (
    <div className="fixed bottom-0 right-0 bg-white p-4 shadow-lg rounded-lg m-4 w-64">
      <h2 className="text-lg font-semibold mb-4">Tu compra</h2>
      <ul className="overflow-y-auto max-h-48">
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <span>{item.name}</span>
              <div className="flex items-center ml-2">
                <button
                  onClick={() => onDecrement(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Minus size={16} />
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => onIncrement(item.id)}
                  className="text-green-500 hover:text-green-700"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <p className="font-bold mt-4">Total: ${total.toFixed(2)}</p>
      <button 
        onClick={handleCheckout} // Navega sin limpiar el carrito
        className="bg-primary text-neutralLight w-full py-2 mt-4 rounded hover:bg-primary-dark transition"
      >
        Finalizar compra
      </button>
    </div>
  );
};

export default Cart;

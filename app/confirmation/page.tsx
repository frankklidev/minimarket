'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
};

const PurchaseConfirmation = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [deliveryOption, setDeliveryOption] = useState("pickup");
  const [municipality, setMunicipality] = useState("");
  const [address, setAddress] = useState("");
  const router = useRouter();

  const municipalityFees: { [key: string]: number } = {
    "Arroyo Naranjo": 50,
    "Boyeros": 40,
    "Centro Habana": 30,
    "Cerro": 35,
    "Cotorro": 60,
    "Diez de Octubre": 45,
    "Guanabacoa": 55,
    "Habana del Este": 50,
    "Habana Vieja": 30,
    "La Lisa": 40,
    "Marianao": 35,
    "Playa": 30,
    "Plaza de la Revolución": 25,
    "Regla": 50,
    "San Miguel del Padrón": 55,
  };

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    const storedCartTotal = localStorage.getItem("cartTotal");

    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
    
    if (storedCartTotal && storedCartTotal !== "undefined") {
      setCartTotal(JSON.parse(storedCartTotal));
    } else {
      setCartTotal(0);
    }
  }, []);

  const handleSubmit = () => {
    const deliveryFee = deliveryOption === "delivery" ? municipalityFees[municipality] || 0 : 0;
    const totalWithDelivery = cartTotal + deliveryFee;

    const message = `
      ¡Gracias por tu compra! Aquí están los detalles de tu pedido:
      \nNombre: ${name}
      \nTeléfono: ${phone}
      \nMunicipio: ${municipality}
      \nOpción de entrega: ${deliveryOption === "pickup" ? "Recoger en tienda" : "Domicilio"}
      ${deliveryOption === "delivery" ? `\nDirección: ${address}` : ""}
      \n\nResumen de compra:
      ${cartItems.map(item => `\n- ${item.name} (Cantidad: ${item.quantity}) - $${item.price * item.quantity}`).join("")}
      \n\nCosto de entrega: ${deliveryFee} CUP
      \n\nTotal de compra: ${totalWithDelivery.toFixed(2)} CUP
    `;

    const whatsappURL = `https://wa.me/5352929141?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");

    // Vaciamos el carrito solo después de abrir WhatsApp
    localStorage.removeItem("cartItems");
    localStorage.removeItem("cartTotal");
    setCartItems([]); // Actualizamos el estado del carrito
    setCartTotal(0);   // Reseteamos el total
    router.push("/");
  };

  return (
    <main className="flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">¡Gracias por tu compra!</h1>
      <p className="text-lg text-gray-600 mb-6">Tu pedido ha sido procesado exitosamente.</p>

      {/* Resumen de la compra */}
      <div className="w-full max-w-md bg-gray-100 p-4 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4">Resumen de Compra</h2>
        <ul className="space-y-2">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between">
              <span>{item.name} (x{item.quantity})</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg font-bold mt-4">Total: ${cartTotal.toFixed(2)}</p>
        {deliveryOption === "delivery" && municipality && (
          <p className="text-md text-red-600 bg-red-100 p-2 rounded mt-2">
            Nota: Se agregará un cargo de {municipalityFees[municipality]} CUP por entrega a {municipality}.
          </p>
        )}
      </div>

      {/* Formulario de datos personales */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Información del Cliente</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-4">
          <input
            type="text"
            placeholder="Nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />

          {/* Campo de teléfono con prefijo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 p-2 bg-gray-100 rounded">
              <span className="text-gray-600 font-semibold">+53</span>
            </div>
            <input
              type="tel"
              placeholder="Teléfono"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Mostrar selección de municipio solo si se elige "Domicilio" */}
          {deliveryOption === "delivery" && (
            <>
              <select
                value={municipality}
                onChange={(e) => setMunicipality(e.target.value)}
                required
                className="w-full p-2 border rounded"
              >
                <option value="">Selecciona tu municipio</option>
                {Object.keys(municipalityFees).map((m, index) => (
                  <option key={index} value={m}>
                    {m}
                  </option>
                ))}
              </select>

              {/* Campo de dirección solo si se selecciona "Domicilio" */}
              <input
                type="text"
                placeholder="Dirección de entrega"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="w-full p-2 border rounded"
              />
            </>
          )}

          {/* Opciones de entrega */}
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="pickup"
                checked={deliveryOption === "pickup"}
                onChange={() => {
                  setDeliveryOption("pickup");
                  setMunicipality("");
                  setAddress("");
                }}
              />
              <span>Recoger en tienda</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="delivery"
                checked={deliveryOption === "delivery"}
                onChange={() => setDeliveryOption("delivery")}
              />
              <span>Domicilio</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-white py-2 px-4 rounded-lg font-medium hover:bg-accent-dark transition-colors"
          >
            Enviar por WhatsApp
          </button>
        </form>
      </div>

      <Link href="/" className="mt-8 text-accent hover:underline">
        Regresar a la página principal
      </Link>
    </main>
  );
};

export default PurchaseConfirmation;

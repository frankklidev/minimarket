// app/contacto/page.tsx
"use client";

import React from "react";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-primary">Contáctanos</h1>

      {/* Tarjeta de Información de contacto */}
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full text-center">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Ferretería El Poto
        </h2>
        <p className="text-gray-600 mb-6">
          Estamos aquí para ayudarte con tus proyectos.
        </p>

        {/* Dirección y Teléfono */}
        <div className="space-y-4">
          <div className="flex items-center justify-center text-gray-700">
            <MapPin className="mr-2 text-primary" size={24} />
            <span className="text-lg">
              Calle Obispo #153, Habana Vieja, La Habana, Cuba
            </span>
          </div>
          <div className="flex items-center justify-center text-gray-700">
            <Phone className="mr-2 text-primary" size={24} />
            <span className="text-lg">+53 555-5555</span>
          </div>
        </div>
      </div>

      {/* Botón para ver todos los productos */}
      <Link href="/categories">
        <div className="mt-8 inline-block bg-primary text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-primary-dark transition duration-300">
          Ver todos los productos
        </div>
      </Link>
    </div>
  );
};

export default ContactPage;

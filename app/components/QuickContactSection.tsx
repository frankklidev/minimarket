// components/QuickContactSection.tsx
import React from "react";

const QuickContactSection: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Contacto Rápido</h2>
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">
        
        {/* Información de contacto */}
        <div className="lg:w-1/3 text-center lg:text-left mb-8 lg:mb-0">
          <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
          <p className="text-gray-700 mb-2">📍 Dirección: Calle Falsa 123, La Habana, Cuba</p>
          <p className="text-gray-700 mb-2">📞 Teléfono: +53 5555-5555</p>
          <p className="text-gray-700 mb-2">✉️ Email: contacto@ferremerelpoto.com</p>
          <p className="text-gray-700 mb-4">⏰ Horario: Lunes a Viernes, 9:00 AM - 6:00 PM</p>
        </div>

        {/* Formulario de contacto */}
        <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-md mb-8 lg:mb-0">
          <h3 className="text-xl font-semibold mb-4">Envíanos un mensaje</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nombre"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Mensaje"
              rows={4}
              required
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition duration-300"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>

        {/* Mapa de ubicación */}
        <div className="lg:w-1/3 h-64 lg:h-auto w-full">
          <h3 className="text-xl font-semibold mb-4 text-center lg:text-left">Nuestra Ubicación</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_URL"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default QuickContactSection;

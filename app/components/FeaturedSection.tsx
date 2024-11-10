// components/FeaturedSection.tsx
import React from "react";
import FeaturedSlider from "./FeaturedSlider";
// Importa el slider que creamos anteriormente

const FeaturedSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-gray-100">
      {/* Panel Izquierdo con Slider */}
      <div className="bg-gray-50 rounded-lg shadow-md relative w-full h-full overflow-hidden">
        <FeaturedSlider /> {/* Aquí usamos el componente del slider */}
      </div>

      {/* Panel Central */}
      <div className="bg-white rounded-lg shadow-md relative w-full h-full overflow-hidden">
        <img
          src="/candado.webp" // Asegúrate de que esta imagen esté en la carpeta public/images
          alt="Herramienta principal"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Panel Derecho */}
      <div className="grid grid-rows-2 gap-4">
        {/* Primer Bloque */}
        <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden relative flex items-center p-6">
          <img
            src="/yales.jpg" 
            alt="Electroportatil"
            className="absolute inset-0 w-full h-full object-cover opacity-140"
          />
          <div className="relative z-10">
            <h3 className="text-orange-500 text-sm font-bold uppercase">
              Necesitas
            </h3>
            <h2 className="text-xl font-bold mb-2">Yales</h2>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-700 text-white font-semibold rounded-full mt-2 hover:from-blue-500 hover:to-blue-800 transition">
              Ver Ahora
            </button>
          </div>
        </div>

        {/* Segundo Bloque */}
        <div className="rounded-lg shadow-md overflow-hidden relative flex items-center p-6">
          <img
            src="/manguera.webp"
            alt="Herramientas Manuales"
            className="absolute inset-0 w-full h-full object-cover opacity-130" // Aumentamos un poco la opacidad de la imagen
          />
          <div className="relative z-10">
            <h3 className="text-orange-500 text-sm font-bold uppercase">
              Herramientas
            </h3>
            <h2 className="text-xl font-bold mb-2">MANUALES</h2>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-700 text-white font-semibold rounded-full mt-2 hover:from-blue-500 hover:to-blue-800 transition">
              Ver Ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;

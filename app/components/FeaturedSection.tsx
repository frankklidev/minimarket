import React from "react";
import FeaturedSlider from "./FeaturedSlider";
import FeaturedBlock from "./FeatureBlock";


const FeaturedSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-gray-100">
      {/* Panel Izquierdo con Slider */}
      <div className="bg-gray-50 rounded-lg shadow-md relative w-full h-full overflow-hidden">
        <FeaturedSlider />
      </div>

      {/* Panel Central */}
      <div className="bg-white rounded-lg shadow-md relative w-full h-full overflow-hidden">
        <img
          src="/candado.webp"
          alt="Herramienta principal"
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Panel Derecho */}
      <div className="grid grid-rows-2 gap-4">
        <FeaturedBlock
          image="/yales.jpg"
          altText="Electroportatil"
          title="Necesitas"
          subtitle="Yales"
          buttonText="Ver Ahora"
          redirectId={1} // ID de la categoría para herramientas eléctricas
        />
        <FeaturedBlock
          image="/manguera.webp"
          altText="Herramientas"
          title="Herramientas"
          subtitle="MANUALES"
          buttonText="Ver Ahora"
          redirectId={1} // ID de la categoría para herramientas manuales
        />
      </div>
    </div>
  );
};

export default FeaturedSection;

// components/FeaturedSlider.tsx
import React, { useState, useEffect } from "react";

const sliderItems = [
  {
    imageUrl: "/taladro.webp",
    title: "TODO LO QUE NECESITAS",
    description: "Descubrir",
  },
  {
    imageUrl: "/pintura.webp",
    title: "CONOCE NUESTRAS OFERTAS",
    description: "Explora",
  },
  {
    imageUrl: "/destornillador.webp",
    title: "PRODUCTOS DESTACADOS",
    description: "Ver Más",
  },
];

const FeaturedSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const delay = 5000; // Tiempo en milisegundos entre cambios automáticos de slide

  // Cambiar de slide automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
    }, delay);

    return () => clearInterval(interval);
  }, []);

  // Cambiar de slide al hacer clic en un indicador
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
      {/* Imágenes de cada slide */}
      {sliderItems.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          {/* Texto superpuesto */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start p-8 text-white">
            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
            <p className="text-lg">{item.description}</p>
          </div>
        </div>
      ))}

      {/* Indicadores de slider */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sliderItems.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
              currentIndex === index ? "bg-orange-500" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSlider;

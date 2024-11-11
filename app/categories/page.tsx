// components/CategoriesSection.tsx
import React from "react";
import Link from "next/link";
import { Hammer, Zap, Leaf, Package, Paintbrush, Lightbulb, Shield, Wrench, MoreHorizontal } from "lucide-react";

const categories = [
  { id: 1, name: "Herramientas Manuales", icon: Hammer, imageUrl: "/teatro.webp" },
  { id: 2, name: "Herramientas Eléctricas", icon: Zap, imageUrl: "/teatro.webp" },
  { id: 3, name: "Jardinería", icon: Leaf, imageUrl: "/teatro.webp" },
  { id: 4, name: "Material de Construcción", icon: Package, imageUrl: "/teatro.webp" },
  { id: 5, name: "Pinturas", icon: Paintbrush, imageUrl: "/teatro.webp" },
  { id: 6, name: "Fontanería", icon: Wrench, imageUrl: "/teatro.webp" },
  { id: 7, name: "Iluminación", icon: Lightbulb, imageUrl: "/teatro.webp" },
  { id: 8, name: "Seguridad", icon: Shield, imageUrl: "/teatro.webp" },
  { id: 9, name: "Otros", icon: MoreHorizontal, imageUrl: "/teatro.webp" },
];

const CategoriesSection: React.FC = () => {
  return (
    <section
      className="py-16 px-6 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/martillo.webp')" }} // Cambia esta ruta a tu imagen de fondo
    >
      {/* Overlay para mejorar la legibilidad */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenido de la sección */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Explora nuestras Categorías</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8 xl:gap-10">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link
                href={`/categories/${category.id}`}
                key={category.id}
                className="flex flex-col items-center text-center group transition-transform transform hover:scale-105"
              >
                {/* Círculo de la categoría */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden relative flex items-center justify-center mb-4 shadow-lg transition-shadow group-hover:shadow-2xl">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url(${category.imageUrl})` }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-opacity duration-300"></div>

                  {/* Icono de la categoría */}
                  <IconComponent size={32} className="relative z-10 text-blue-400" />
                </div>

                {/* Nombre de la categoría debajo del círculo */}
                <h3 className="text-lg font-bold text-white transition-colors group-hover:text-blue-400">
                  {category.name}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

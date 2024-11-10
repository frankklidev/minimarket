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
    <section className="py-12 px-4 bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-10 text-white">Explora nuestras Categorías</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <Link
              href={`/categories/${category.id}`}
              key={category.id}
              className="relative h-40 sm:h-52 lg:h-64 overflow-hidden group"
            >
              {/* Imagen de fondo */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.imageUrl})` }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-opacity duration-300"></div>

              {/* Contenido de la categoría */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
                <IconComponent size={36} className="mb-2 text-blue-400" />
                <h3 className="text-lg font-semibold tracking-wide">{category.name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CategoriesSection;

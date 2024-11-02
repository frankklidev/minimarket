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
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Explora nuestras Categorías</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <Link
              href={`/categories/${category.id}`}
              key={category.id}
              className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105 group"
            >
              {/* Imagen de fondo */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{ backgroundImage: `url(${category.imageUrl})` }}
              />

              {/* Contenido de la categoría */}
              <div className="flex flex-col items-center justify-center p-6 h-40 relative z-10 text-center bg-black bg-opacity-50">
                <IconComponent size={40} className="text-white mb-2" />
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
              </div>

              {/* Overlay efecto al pasar mouse */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CategoriesSection;

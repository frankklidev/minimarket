// components/CategoriesGallery.tsx
import React from "react";
import { useRouter } from "next/navigation";
import { Hammer, Zap, Leaf, Package, Paintbrush, Wrench, Lightbulb, Shield, MoreHorizontal } from "lucide-react";

const categories = [
  { id: 1, name: "Herramientas", src: "/teatro.webp", icon: Hammer },
  { id: 4, name: "Material de Construcción", src: "/teatro.webp", icon: Package },
  { id: 6, name: "Fontanería", src: "/teatro.webp", icon: Wrench },
  { id: 7, name: "Iluminación", src: "/teatro.webp", icon: Lightbulb },
  { id: 9, name: "Otros", src: "/teatro.webp", icon: MoreHorizontal },
];

const CategoriesGallery: React.FC = () => {
  const router = useRouter();

  const handleCategoryClick = (id: number) => {
    router.push(`/categories/${id}`);
  };

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Categorías</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105 cursor-pointer group"
            >
              <img
                src={category.src}
                alt={category.name}
                className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
              />
              {/* Overlay con nombre de la categoría */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
              </div>
              {/* Ícono de la categoría visible solo en móviles */}
              <div className="absolute top-4 left-4 sm:hidden bg-white bg-opacity-75 p-2 rounded-full shadow-md">
                <IconComponent size={24} className="text-primary" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategoriesGallery;

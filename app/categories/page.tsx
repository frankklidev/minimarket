import React from "react";
import Link from "next/link";
import {
  Hammer,
  Zap,
  Leaf,
  Package,
  Paintbrush,
  Lightbulb,
  Shield,
  Wrench,
  MoreHorizontal,
} from "lucide-react";

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
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Explora Nuestras Categorías
        </h2>

        {/* Contenedor de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link
                href={`/categories/${category.id}`}
                key={category.id}
                className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Imagen de fondo */}
                <div
                  className="relative h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.imageUrl})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent size={48} className="text-white opacity-80" />
                  </div>
                </div>

                {/* Contenido de la tarjeta */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Descubre los mejores productos en esta categoría.
                  </p>
                  <button className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-md font-medium hover:bg-primary-dark transition">
                    Ver Productos
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

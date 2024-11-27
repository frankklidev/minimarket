import React from "react";
import Link from "next/link";
import {
  Hammer,
  Wrench,
  Home,
  MoreHorizontal,
  Car,
  Candy,
  Utensils,
} from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Herramientas",
    icon: Hammer,
    imageUrl: "destornillador.webp", // Ruta de imagen para la categoría
  },
  {
    id: 6,
    name: "Fontanería",
    icon: Wrench,
    imageUrl: "/images/lavadero.jpeg", // Ruta de imagen para la categoría
  },
  {
    id: 7,
    name: "Hogar y Cocina",
    icon: Home,
    imageUrl: "/images/llave_para_tina.jpeg", // Ruta de imagen para la categoría
  },
  {
    id: 9,
    name: "Otros",
    icon: MoreHorizontal,
    imageUrl: "/images/ligas.jpeg", // Ruta de imagen para la categoría
  },
  {
    id: 10,
    name: "Automotriz y Mecánica",
    icon: Car,
    imageUrl: "/images/colicona_para_carros.jpeg", // Ruta de imagen para la categoría
  },
  {
    id: 11,
    name: "Confituras",
    icon: Candy,
    imageUrl: "/images/chupa_chups_showpop.jpeg", // Ruta de imagen para la categoría
  },
  {
    id: 12,
    name: "Alimentos y Bebidas",
    icon: Utensils,
    imageUrl: "/images/spaguetis.jpeg", // Ruta de imagen para la categoría
  },
];

const CategoriesSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gray-100 mt-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Explora Nuestras Categorías
        </h2>

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

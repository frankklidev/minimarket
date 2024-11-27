import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Hammer,
  Zap,
  Leaf,
  Package,
  Paintbrush,
  Home,
  Shield,
  MoreHorizontal,
  Car,
  Wrench,
  Candy,
  Utensils,
} from "lucide-react";

const categories = [
  { id: 1, name: "Herramientas", icon: Hammer },
  { id: 6, name: "Fontanería", icon: Wrench },
  { id: 7, name: "Hogar y Cocina", icon: Home },
  { id: 9, name: "Otros", icon: MoreHorizontal },
  { id: 10, name: "Automotriz y Mecánica", icon: Car },
  { id: 11, name: "Confituras", icon: Candy },
  { id: 12, name: "Alimentos y Bebidas", icon: Utensils},
];

type CategoriesListProps = {
  selectedCategoryId: number | null;
  onCategorySelect: (categoryId: number | null) => void;
};

const CategoriesList: React.FC<CategoriesListProps> = ({
  selectedCategoryId,
  onCategorySelect,
}) => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<number | null>(
    selectedCategoryId
  );

  useEffect(() => {
    setSelectedCategory(selectedCategoryId);
  }, [selectedCategoryId]);

  const handleCategoryClick = (categoryId: number | null) => {
    setSelectedCategory(categoryId);
    onCategorySelect(categoryId);
    if (categoryId) {
      router.push(`/categories/${categoryId}`);
    } else {
      router.push("/categories");
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-full md:w-64 mt-8">
      {/* Agregado mt-8 para dar margen superior */}
      <h2 className="text-lg font-bold mb-4 text-center md:text-left">
        Categorías
      </h2>
      <ul className="space-y-2">
        {/* Botón para todas las categorías */}
        <li>
          <button
            onClick={() => handleCategoryClick(null)}
            className={`flex items-center w-full px-3 py-2 rounded-lg transition-colors duration-200 ${
              selectedCategory === null
                ? "bg-gray-100 text-accent font-semibold border-l-4 border-accent"
                : "text-primary hover:bg-gray-100"
            }`}
          >
            <span className="mr-3 text-gray-500">
              <Package size={24} />
            </span>
            Todas las Categorías
          </button>
        </li>

        {/* Renderizar cada categoría */}
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <li key={category.id}>
              <button
                onClick={() => handleCategoryClick(category.id)}
                className={`flex items-center w-full px-3 py-2 rounded-lg transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? "bg-gray-100 text-accent font-semibold border-l-4 border-accent"
                    : "text-primary hover:bg-gray-100"
                }`}
              >
                <span className="mr-3 text-gray-500">
                  <IconComponent size={24} />
                </span>
                {category.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoriesList;

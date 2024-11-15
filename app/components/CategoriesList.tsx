import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Hammer, Zap, Leaf, Package, Paintbrush, Lightbulb, Shield, MoreHorizontal,Car,Wrench
} from "lucide-react";

// Lista de categorías con iconos válidos de Lucide
const categories = [
  { id: 1, name: "Herramientas Manuales", icon: Hammer },
  { id: 2, name: "Herramientas Eléctricas", icon: Zap },
  { id: 3, name: "Jardinería", icon: Leaf },
  { id: 4, name: "Material de Construcción", icon: Package },
  { id: 5, name: "Pinturas", icon: Paintbrush },
  { id: 6, name: "Fontanería", icon: Wrench },
  { id: 7, name: "Iluminación", icon: Lightbulb },
  { id: 8, name: "Seguridad", icon: Shield },
  { id: 9, name: "Otros", icon: MoreHorizontal },
  { id: 10, name: "Automotriz y Mecánica", icon: Car },
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
  const [selectedCategory, setSelectedCategory] = useState<number | null>(selectedCategoryId);

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
    <div className="p-4 bg-white shadow-lg rounded-lg lg:w-64 w-full">
      <h2 className="text-lg font-bold mb-4 text-center lg:text-left">Categorías</h2>
      <ul className="space-y-2">
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

// app/categories/[id]/page.tsx
'use client';

import React, { useState } from "react";
import { useParams } from "next/navigation";
import ProductCard from "@/app/components/ProductCard";
import CategoriesList from "@/app/components/CategoriesList";
import { products } from "@/app/lib/api";

const ITEMS_PER_PAGE = 6; // Número de productos que se muestran inicialmente y al cargar más

const CategoryPage: React.FC = () => {
  const { id } = useParams();
  const categoryId = Number(id);
  const [showDrawer, setShowDrawer] = useState(false);
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);

  // Filtrar productos según la categoría seleccionada
  const filteredProducts = products.filter((product) => product.categoryId === categoryId);

  // Obtener el nombre de la categoría del primer producto, si está disponible
  const categoryName = filteredProducts[0]?.categoryName || "No hay productos para la categoría seleccionada";

  // Función para cargar más productos
  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + ITEMS_PER_PAGE);
  };

  return (
    <div className="flex flex-col lg:flex-row p-4 lg:p-8 relative">
      {/* Botón para abrir el drawer en móviles */}
      <button
        onClick={() => setShowDrawer(true)}
        className="lg:hidden mb-4 bg-primary text-white py-2 px-4 rounded w-full"
      >
        Mostrar Categorías
      </button>

      {/* Drawer de categorías para móviles */}
      {showDrawer && (
        <div className="fixed inset-0 z-40 flex">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setShowDrawer(false)}
          ></div>
          <aside className="relative w-64 bg-white shadow-lg p-4 z-50">
            <button
              onClick={() => setShowDrawer(false)}
              className="text-primary font-bold mb-4"
            >
              Cerrar
            </button>
            <CategoriesList
              selectedCategoryId={categoryId}
              onCategorySelect={() => setShowDrawer(false)}
            />
          </aside>
        </div>
      )}

      {/* Barra lateral de categorías para pantallas grandes */}
      <aside className="hidden lg:block lg:mr-8 w-64">
        <CategoriesList selectedCategoryId={categoryId} onCategorySelect={() => {}} />
      </aside>

      {/* Lista de productos en la categoría */}
      <main className="flex-1">
        <h1 className="text-2xl lg:text-3xl font-bold mb-4">Categoría: {categoryName}</h1>
        <p className="text-md lg:text-lg text-gray-600 mb-6">Mostrando productos de la categoría seleccionada.</p>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {filteredProducts.slice(0, visibleItems).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No hay productos disponibles en esta categoría.</p>
        )}

        {/* Botón de cargar más */}
        {visibleItems < filteredProducts.length && (
          <button
            onClick={handleLoadMore}
            className="mt-6 w-full bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-dark transition"
          >
            Cargar más
          </button>
        )}
      </main>
    </div>
  );
};

export default CategoryPage;

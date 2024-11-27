'use client';

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import ProductCard from "@/app/components/ProductCard";
import CategoriesList from "@/app/components/CategoriesList";
import { products, fetchProducts } from "@/app/lib/api";
import ClipLoader from "react-spinners/ClipLoader";

const ITEMS_PER_PAGE = 6;

const CategoryPage: React.FC = () => {
  const { id } = useParams();
  const categoryId = Number(id);
  const [showDrawer, setShowDrawer] = useState(false);
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState(false); // Estado para el botón "Cargar más"

  useEffect(() => {
    setIsLoading(true);
    fetchProducts().then(() => setIsLoading(false));
  }, [categoryId]);

  const filteredProducts = products.filter(
    (product) => product.categoryId === categoryId
  );

  const categoryName =
    filteredProducts[0]?.categoryName ||
    "No hay productos para la categoría seleccionada";

  const handleLoadMore = () => {
    setIsButtonLoading(true); // Activa el estado de carga para el botón
    setTimeout(() => {
      setVisibleItems((prevVisibleItems) => prevVisibleItems + ITEMS_PER_PAGE);
      setIsButtonLoading(false); // Desactiva el estado de carga
    }, 1000); // Simula un tiempo de carga
  };

  if (isNaN(categoryId)) {
    return (
      <div className="p-8 text-center text-red-500">
        <h1 className="text-xl font-bold">Categoría inválida</h1>
        <p>Por favor, selecciona una categoría válida.</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#3498db" loading={isLoading} size={50} />
      </div>
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-xl font-bold">Sin productos</h1>
        <p className="text-gray-500">No hay productos disponibles en esta categoría.</p>
        <button
          onClick={() => window.history.back()}
          className="mt-4 bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-dark transition"
        >
          Volver a Categorías
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row p-4 lg:p-8 relative min-h-screen">
      {/* Botón para mostrar categorías en móvil */}
      <button
        onClick={() => setShowDrawer(true)}
        className="lg:hidden mb-4 bg-primary text-white py-2 px-4 rounded w-full"
        aria-label="Mostrar categorías"
      >
        Mostrar Categorías
      </button>

      {/* Drawer de categorías (móvil) */}
      {showDrawer && (
        <div className="fixed inset-0 z-40">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setShowDrawer(false)}
          ></div>
          <aside className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-50">
            <button
              onClick={() => setShowDrawer(false)}
              className="text-primary font-bold mb-4 p-4"
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

      {/* Barra lateral de categorías en escritorio */}
      <aside className="hidden lg:block lg:mr-8 w-64 mt-8 lg:sticky lg:top-20">
  <CategoriesList
    selectedCategoryId={categoryId}
    onCategorySelect={() => {}}
  />
</aside>


      {/* Sección principal */}
      <main className="flex-1">
        <h1 className="text-2xl lg:text-3xl font-bold mb-4">
          Categoría: {categoryName}
        </h1>
        <p className="text-md lg:text-lg text-gray-600 mb-6">
          Mostrando productos de la categoría seleccionada.
        </p>

        {/* Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {filteredProducts.slice(0, visibleItems).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Botón de "Cargar más" */}
        {visibleItems < filteredProducts.length && (
          <button
            onClick={handleLoadMore}
            disabled={isButtonLoading} // Deshabilita el botón mientras se carga
            className={`mt-6 w-full bg-primary text-white py-2 px-4 rounded-lg font-medium transition ${
              isButtonLoading ? "cursor-not-allowed opacity-75" : "hover:bg-primary-dark"
            }`}
          >
            {isButtonLoading ? (
              <div className="flex justify-center items-center gap-2">
                <ClipLoader color="#ffffff" loading={isButtonLoading} size={20} />
                <span>Cargando...</span>
              </div>
            ) : (
              "Cargar más"
            )}
          </button>
        )}
      </main>
    </div>
  );
};

export default CategoryPage;

'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Loader } from "lucide-react";
import { products } from "@/app/lib/api";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(products);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm.length > 2) {
        setLoading(true);
        const results = products.filter((product) => {
          const normalizedProductName = product.name.trim().toLowerCase();
          const normalizedSearchTerm = searchTerm.trim().toLowerCase();
          return normalizedProductName.includes(normalizedSearchTerm);
        });
        console.log("Resultados filtrados:", results);
        setSearchResults(results);
        setLoading(false);
      } else {
        setSearchResults([]); // Mostrar nada si no hay búsqueda válida
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="flex items-center border rounded p-2 shadow">
        <Search className="text-gray-400 mr-2" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Buscar productos..."
          className="flex-1 p-2 outline-none"
        />
        {loading && <Loader className="animate-spin text-gray-400 ml-2" />}
      </div>

      {/* Resultados de la búsqueda */}
      {searchResults.length > 0 && searchTerm.length > 2 && (
        <div className="absolute top-full mt-2 bg-white shadow-lg rounded w-full z-50">
          {searchResults.map((product) => (
            <Link
            key={product.id}
            href={`/products/${product.id}`} // Redirige a la página específica del producto
            className="flex items-center space-x-2 p-2 hover:bg-gray-100"
          >
            <img src={product.imageUrl} alt={product.name} className="w-8 h-8 rounded" />
            <span>{product.name}</span>
          </Link>
          
          ))}
        </div>
      )}

      {searchResults.length === 0 && searchTerm.length > 2 && (
        <div className="absolute top-full mt-2 bg-white shadow-lg rounded w-full z-50 p-4 text-center text-gray-500">
          No se encontraron resultados.
        </div>
      )}
    </div>
  );
};

export default SearchBar;

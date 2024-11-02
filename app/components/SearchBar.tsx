'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Loader } from "lucide-react"; // Iconos de búsqueda y carga
import { products } from "@/app/lib/api";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(products);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Configurar un debounce de 500ms al escribir en el campo de búsqueda
    const timer = setTimeout(() => {
      if (searchTerm.length > 2) {
        setLoading(true);
        const results = products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
        setLoading(false);
      } else {
        setSearchResults([]);
      }
    }, 500);

    // Limpiar el temporizador anterior si cambia el término de búsqueda
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
        <div className="absolute top-full mt-2 bg-white shadow-lg rounded w-full z-10">
          {searchResults.map((product) => (
            <Link
              key={product.id}
              href={`/categories/${product.categoryId}`}
              className="flex items-center space-x-2 p-2 hover:bg-gray-100"
            >
              <img src={product.imageUrl} alt={product.name} className="w-8 h-8 rounded" />
              <span>{product.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

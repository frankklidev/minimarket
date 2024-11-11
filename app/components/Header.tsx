"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, Search, Loader, Hammer } from "lucide-react";
import { useCart } from "@/app/context/CartContext";
import { products, Product } from "@/app/lib/api";

const Header: React.FC = () => {
  const { cartItems, cartTotal } = useCart();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
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

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Limpiar búsqueda y resultados al seleccionar un producto
  const handleResultClick = () => {
    setSearchTerm("");
    setSearchResults([]);
  };

  return (
    <header className="bg-primary text-neutralLight p-4 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2">
          <Hammer size={28} className="text-blue-500" />{" "}
          {/* Ícono de ferretería */}
          <h1 className="text-2xl font-bold mb-4 md:mb-0">FerreMer-El Poto</h1>
        </div>

        {/* Navegación */}
        <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center mb-4 md:mb-0">
          <Link
            href="/"
            className="text-white hover:text-accent text-2xl font-bold"
          >
            Inicio
          </Link>
          <Link
            href="/categories"
            className="text-white hover:text-accent text-2xl font-bold"
          >
            Nuestros Productos
          </Link>
          <Link
            href="/contacto"
            className="text-white hover:text-accent text-2xl font-bold"
          >
            Contacto
          </Link>
        </nav>

        {/* Barra de Búsqueda */}
        <div className="relative">
          <div className="flex items-center bg-white rounded-full px-3 py-1">
            <Search className="text-gray-500 mr-2" size={20} />
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Buscar productos..."
              className="w-full text-gray-800 focus:outline-none"
            />
            {loading && (
              <Loader className="animate-spin text-gray-500 ml-2" size={18} />
            )}
          </div>
          {/* Dropdown de resultados de búsqueda */}
          {searchResults.length > 0 && (
            <ul className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
              {searchResults.map((product) => (
                <li key={product.id} className="p-2 hover:bg-gray-100">
                  <Link
                    href={`/categories/${product.categoryId}`}
                    onClick={handleResultClick}
                    className="flex items-center space-x-2 text-gray-800"
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-8 h-8 rounded"
                    />
                    <span>{product.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Carrito de compras */}
        <div className="flex items-center text-center space-x-2 md:space-x-4">
          <Link
            href="/cart"
            className="text-white hover:text-accent flex items-center text-2xl font-bold"
          >
            <ShoppingCart size={24} />
            <span className="ml-2">{totalItems} artículos</span>
          </Link>
          <span className=" text-gray-400 text-2xl font-bold">
            Total: ${cartTotal.toFixed(2)}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;

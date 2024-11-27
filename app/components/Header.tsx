'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, Search, Hammer, Menu, X } from "lucide-react";
import { useCart } from "@/app/context/CartContext";
import { products, Product } from "@/app/lib/api";
import { filterProducts } from "../utils/search";

const Header: React.FC = () => {
  const { cartItems, cartTotal } = useCart();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    if (searchTerm.length > 2) {
      const results = filterProducts(products, searchTerm);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleResultClick = () => {
    setSearchTerm("");
    setSearchResults([]);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-primary text-neutralLight p-4 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between space-x-2">
        {/* Logo e ícono del menú */}
        <div className="flex items-center space-x-2">
          {/* Ícono del logo */}
          <Hammer size={28} className="text-blue-500" />
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-white md:hidden"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Barra de búsqueda */}
        <div className="flex flex-grow mx-2">
          <div className="relative flex items-center bg-white rounded-full px-4 py-2 w-full">
            <Search className="text-gray-500 mr-2" size={24} />
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Buscar productos..."
              className="w-full text-gray-800 text-base md:text-lg focus:outline-none"
            />
          </div>
          {searchResults.length > 0 && (
            <ul className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
              {searchResults.map((product) => (
                <li
                  key={product.id}
                  className="p-2 hover:bg-gray-100"
                  onClick={handleResultClick}
                >
                  <Link
                    href={`/products/${product.id}`}
                    className="flex items-center space-x-2 text-gray-800 text-base md:text-lg"
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

        {/* Carrito */}
        <div className="flex items-center space-x-4">
          <Link
            href="/cart"
            className="text-white hover:text-accent flex items-center text-lg md:text-xl font-bold"
          >
            <ShoppingCart size={24} />
            <span className="ml-2">{totalItems} artículos</span>
          </Link>
          <span className="text-gray-300 text-base md:text-lg">
            Total: ${cartTotal().toFixed(2)}
          </span>
        </div>
      </div>

      {/* Menú Desplegable (Solo móvil) */}
      {menuOpen && (
        <nav className="md:hidden bg-primary mt-2 p-4 rounded-lg">
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className="block text-white hover:text-accent text-lg"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/categories"
                className="block text-white hover:text-accent text-lg"
              >
                Nuestros Productos
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                className="block text-white hover:text-accent text-lg"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

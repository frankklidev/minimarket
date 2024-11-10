"use client";

import React from "react";
import MainContent from "./components/MainContent";
import { products } from "./lib/api";
import ProductList from "./components/ProductList";
import { useCart } from "./context/CartContext";
import ViewAllProductsBanner from "./components/ViewAllProductsBanner";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import ServiceFeatures from "./components/ServiceFeatures";
import FeaturedSection from "./components/FeaturedSection";

const HomePage = () => {
  const { addToCart } = useCart();
  const saleProducts = products.filter((product) => product.isOnSale);

  return (
    <MainContent>
      <section className="text-center py-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-primary">
          ¡Bienvenido a Ferretería El Poto!
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Todo lo que necesitas para hacer realidad tus proyectos de
          construcción y renovación está aquí.
          <span className="block text-secondary font-semibold mt-2">
            Herramientas, materiales y más, ¡a un clic de distancia!
          </span>
        </p>
        <Link href="/categories" passHref>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-400 to-blue-700 text-white rounded-full font-semibold text-lg shadow-lg hover:from-blue-500 hover:to-blue-800 transition-all duration-300">
            Explora Nuestro Catálogo
          </button>
        </Link>
      </section>

      <FeaturedSection/>
      <ServiceFeatures />
      <section className="my-8 p-6 rounded-lg shadow-lg bg-gradient-to-r from-primary to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ofertas y Promociones 🔥
          </h2>
          <p className="text-white mb-6 text-lg">
            Aprovecha nuestras ofertas exclusivas en productos seleccionados.
            ¡No te las pierdas!
          </p>
          <ProductList products={saleProducts} onAddToCart={addToCart} />
        </div>
      </section>
      <ViewAllProductsBanner />
    </MainContent>
  );
};

export default HomePage;

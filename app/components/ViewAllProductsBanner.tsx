import React from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

const ViewAllProductsBanner: React.FC = () => {
  return (
    <section className="my-12">
      <div
        className="relative rounded-lg p-8 flex flex-col items-center text-center text-white shadow-lg"
        style={{
          backgroundImage: "url('/teatro.webp')", // Ajusta el nombre de la imagen según corresponda
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay semitransparente para mejorar la legibilidad */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

        {/* Contenido del banner */}
        <div className="relative z-10">
          <ShoppingBag size={48} className="mb-4" />
          <h2 className="text-3xl font-bold mb-2">Descubre Todos Nuestros Productos</h2>
          <p className="mb-6 text-lg">Encuentra las mejores herramientas y materiales.</p>
          
          <Link href="/categories">
            <button className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-200 transition duration-300">
              Ver todos los productos
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ViewAllProductsBanner;

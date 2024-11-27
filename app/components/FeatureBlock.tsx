import { useRouter } from "next/navigation";
import React from "react";


interface FeaturedBlockProps {
  image: string;
  altText: string;
  title: string;
  subtitle: string;
  buttonText: string;
  redirectId: number; // Nueva propiedad para redirección
}

const FeaturedBlock: React.FC<FeaturedBlockProps> = ({
    image,
    altText,
    title,
    subtitle,
    buttonText,
    redirectId,
  }) => {
    const router = useRouter();
  
    const handleRedirect = () => {
      router.push(`/categories/${redirectId}`); // Construye la ruta dinámica
    };
  
    return (
      <div className="rounded-lg shadow-md overflow-hidden relative flex items-center p-6 hover:scale-105 transition-transform duration-300 ease-in-out">
        <img
          src={image}
          alt={altText}
          className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
        <div className="relative z-10 text-center">
          <h3 className="text-orange-500 text-sm font-bold uppercase">{title}</h3>
          <h2 className="text-xl font-bold mb-2">{subtitle}</h2>
          <button
            onClick={handleRedirect}
            className="px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-700 text-white font-semibold rounded-full mt-2 hover:from-blue-500 hover:to-blue-800 transition"
          >
            {buttonText}
          </button>
        </div>
      </div>
    );
  };
  
  export default FeaturedBlock;
  

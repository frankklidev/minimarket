// lib/api.ts

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  categoryId: number;    // ID de categoría
  categoryName: string;  // Nombre de categoría
  isOnSale?: boolean;    // Nueva propiedad opcional para indicar si está en oferta
};

// Definición de productos con categorías y ofertas
export const products: Product[] = [
  {
    id: 1,
    name: "Martillo",
    description: "Martillo de acero resistente.",
    price: 150,
    imageUrl: "/martillo.webp",
    categoryId: 1,
    categoryName: "Herramientas Manuales",
    isOnSale: true, // Este producto está en oferta
  },
  {
    id: 2,
    name: "Destornillador",
    description: "Destornillador de punta plana.",
    price: 75,
    imageUrl: "/destornillador.webp",
    categoryId: 1,
    categoryName: "Herramientas Manuales",
    isOnSale: true,
  },
  {
    id: 3,
    name: "Taladro Eléctrico",
    description: "Taladro de alta potencia para trabajos pesados.",
    price: 300,
    imageUrl: "/taladro.webp",
    categoryId: 2,
    categoryName: "Herramientas Eléctricas",
    isOnSale: true, // También está en oferta
  },
  {
    id: 4,
    name: "Llave Inglesa",
    description: "Llave ajustable de alta calidad.",
    price: 200,
    imageUrl: "/taladro.webp",
    categoryId: 1,
    categoryName: "Herramientas Manuales",
  },
  {
    id: 5,
    name: "Manguera de Jardín",
    description: "Manguera flexible y resistente para uso en jardín.",
    price: 50,
    imageUrl: "/manguera.webp",
    categoryId: 3,
    categoryName: "Jardinería",
    isOnSale: true, // Este también está en oferta
  },
  {
    id: 6,
    name: "Barrena",
    description: "Barrena manual para perforar la tierra y crear agujeros.",
    price: 120,
    imageUrl: "/images/barrena_tusteno.jpeg",
    categoryId: 1,
    categoryName: "Herramientas Manuales",
    isOnSale: false,
  },
  {
    id: 7,
    name: "Bomba de Agua",
    description: "Bomba de agua eficiente para el transporte y regulación de agua en sistemas domésticos y de riego.",
    price: 120,
    imageUrl: "/images/bomba_de_agua.jpeg",
    categoryId: 6,
    categoryName: "Fontanería",
    isOnSale: false,
  },
  {
    id: 8,
    name: "Brocha Ancha",
    description: "Brocha ancha de cerdas resistentes, ideal para cubrir grandes superficies con pintura de manera uniforme y eficiente.",
    price: 120,
    imageUrl: "/images/brocha.jpeg",
    categoryId: 5,
    categoryName: "Pinturas",
    isOnSale: false,
  },
  {
    id: 9,
    name: "Brocha Fina",
    description: "Brocha fina de precisión, perfecta para detalles y acabados delicados en proyectos de pintura.",
    price: 120,
    imageUrl: "/images/brocha1.jpeg",
    categoryId: 5,
    categoryName: "Pinturas",
    isOnSale: false,
  },
  {
    id: 10,
    name: "Candado",
    description: "Candado resistente con cuerpo de acero y llave de alta seguridad, ideal para proteger puertas, casilleros y equipos.",
    price: 1700,
    imageUrl: "/images/candados.jpeg",
    categoryId: 5,
    categoryName: "Seguridad",
    isOnSale: false,
  },
];

// Función para simular la obtención de datos
export const fetchProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(products), 500));
};

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
    imageUrl: "/images/destornillador.png",
    categoryId: 1,
    categoryName: "Herramientas Manuales",
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
  // Agrega más productos y categorías según necesites
];

// Función para simular la obtención de datos
export const fetchProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(products), 500));
};

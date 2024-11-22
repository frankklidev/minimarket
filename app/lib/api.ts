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
  {
    id: 11,
    name: "Cerrucho",
    description: "Cerrucho con hoja de acero y dientes afilados, diseñado para cortes precisos.",
    price: 1700,
    imageUrl: "/images/cerrucho.jpeg",
    categoryId: 1,
    categoryName: "Herramientas Manuelas",
    isOnSale: false,
  },
  {
    id: 12,
    name: "Colicona",
    description: "Colicona de microfibra suave, ideal para remover polvo y suciedad sin rayar la pintura ni los cristales del vehículo.",
    price: 1700,
    imageUrl: "/images/colicona_para_carros.jpeg",
    categoryId: 10,
    categoryName: "Automotriz y Mecánica",
    isOnSale: false,
  },
  {
    id: 13,
    name: "Cuchillo con Tabla de Cortar",
    description: "Juego de cuchillo afilado con tabla de cortar resistente, ideal para preparar alimentos de manera práctica y segura.",
    price: 1700,
    imageUrl: "/images/cuchillo_tabla_cortar.jpeg",
    categoryId: 7,
    categoryName: "Hogar y Cocina",
    isOnSale: false,
  },
  {
    id: 14,
    name: "Desagüe de piso",
    description: "Desagüe de piso fabricado en acero inoxidable, diseñado para una eficiente evacuación de agua en baños, patios y áreas húmedas.",
    price: 1700,
    imageUrl: "/images/desagüe_de_piso.jpeg",
    categoryId: 6,
    categoryName: "Fontanería",
    isOnSale: false,
  },
  {
    id: 15,
    name: "Disco de Corte",
    description: "Disco de corte abrasivo de alta resistencia, ideal para trabajar con metal, concreto y otros materiales duros.",
    price: 1700,
    imageUrl: "/images/disco_de_corte.jpeg",
    categoryId: 2,
    categoryName: "Herramientas Eléctricas",
    isOnSale: false,
  },
  {
    id: 16,
    name: "Injector carburetor",
    description: "Inyector para carburador diseñado para garantizar un flujo eficiente de combustible en motores de combustión interna.",
    price: 1700,
    imageUrl: "/images/injector_carburetor.jpeg",
    categoryId: 2,
    categoryName: "Herramientas Eléctricas",
    isOnSale: false,
  },
  {
    id: 17,
    name: "Lavadero",
    description: "Lavadero de alta resistencia con acabado durable, ideal para instalaciones domésticas, comerciales o industriales.",
    price: 1700,
    imageUrl: "/images/lavadero.jpeg",
    categoryId: 6,
    categoryName: "Fontanería",
    isOnSale: false,
  },
  {
    id: 18,
    name: "Llave de Agua",
    description: "Llave de agua tipo cuello de cisne, ideal para lavaderos, fregaderos y aplicaciones domésticas o comerciales.",
    price: 1700,
    imageUrl: "/images/llave_cuello_fanzine.jpeg",
    categoryId: 6,
    categoryName: "Fontanería",
    isOnSale: false,
  },
  {
    id: 19,
    name: "LLaves de Paso",
    description: "Llave de agua tipo cuello de cisne, ideal para lavaderos, fregaderos y aplicaciones domésticas o comerciales.",
    price: 1700,
    imageUrl: "/images/llave_de_paso.jpeg",
    categoryId: 6,
    categoryName: "Fontanería",
    isOnSale: false,
  },
  {
    id: 20,
    name: "Ligas",
    description: "Ligas de sujeción elásticas.",
    price: 1700,
    imageUrl: "/images/ligas.jpeg",
    categoryId: 9,
    categoryName: "Otros",
    isOnSale: false,
  },
  {
    id: 21,
    name: "Llave para tinas",
    description: "Llave para tina con diseño elegante y funcional, fabricada en materiales resistentes a la corrosión, ideal para baños modernos y clásicos.",
    price: 1700,
    imageUrl: "/images/llave_para_tina.jpeg",
    categoryId: 6,
    categoryName: "Fontanería",
    isOnSale: false,
  },
  {
    id: 21,
    name: "Manguera de gas",
    description: "Manguera de gas flexible y resistente, diseñada para una conexión segura en sistemas domésticos y comerciales.",
    price: 1700,
    imageUrl: "/images/manguera_gas.jpeg",
    categoryId: 6,
    categoryName: "Fontanería",
    isOnSale: false,
  },
  {
    id: 22,
    name: "Manguera de agua",
    description: "Manguera de agua flexible y duradera, ideal para riego, limpieza y otras aplicaciones domésticas o comerciales.",
    price: 1700,
    imageUrl: "/images/manguera.jpeg",
    categoryId: 6,
    categoryName: "Fontanería",
    isOnSale: false,
  },
  {
    id: 23,
    name: "Picaporte",
    description: "Picaporte dorado con diseño elegante y resistente, ideal para puertas interiores y exteriores, brindando estilo y seguridad.",
    price: 1700,
    imageUrl: "/images/picaporte_dorado.jpeg",
    categoryId: 8,
    categoryName: "Seguridad",
    isOnSale: false,
  },
  {
    id: 24,
    name: "Pila de Agua",
    description: "Pila de agua robusta y funcional, diseñada para instalaciones exteriores o interiores, ideal para lavado y suministro de agua.",
    price: 1700,
    imageUrl: "/images/pila_de_agua.jpeg",
    categoryId: 6,
    categoryName: "Fontanería",
    isOnSale: false,
  },
  {
    id: 25,
    name: "Pistola para Silicona",
    description: "Pistola para silicona resistente y ergonómica, ideal para aplicar selladores con precisión en proyectos de construcción y bricolaje.",
    price: 1700,
    imageUrl: "/images/pistola_para_silicona.jpeg",
    categoryId: 1,
    categoryName: "Herramientas Manuales",
    isOnSale: false,
  },
];

// Función para simular la obtención de datos
export const fetchProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(products), 500));
};

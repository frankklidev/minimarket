// lib/api.ts

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  categoryId: number; 
  categoryName: string;  
  isOnSale?: boolean;   
  inStock?:boolean;
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
    categoryName: "Herramientas", // Unificada
    isOnSale: true,
    inStock:true
  },
  {
    id: 2,
    name: "Destornillador",
    description: "Destornillador de punta plana.",
    price: 75,
    imageUrl: "/destornillador.webp",
    categoryId: 1,
    categoryName: "Herramientas", // Unificada
    isOnSale: true,
    inStock:true
  },
  {
    id: 3,
    name: "Taladro Eléctrico",
    description: "Taladro de alta potencia para trabajos pesados.",
    price: 300,
    imageUrl: "/taladro.webp",
    categoryId: 1, // Cambiado de 2 a 1
    categoryName: "Herramientas", // Unificada
    isOnSale: true,
    inStock:true
  },
  {
    id: 4,
    name: "Llave Inglesa",
    description: "Llave ajustable de alta calidad.",
    price: 200,
    imageUrl: "/taladro.webp",
    categoryId: 1,
    categoryName: "Herramientas",
    inStock:true
  },
  {
    id: 5,
    name: "Manguera de Jardín",
    description: "Manguera flexible y resistente para uso en jardín.",
    price: 50,
    imageUrl: "/manguera.webp",
    categoryId: 7,
    categoryName: "Jardinería",
    isOnSale: true,
    inStock:true
  },
  {
    id: 6,
    name: "Barrena",
    description: "Barrena manual para perforar la tierra y crear agujeros.",
    price: 120,
    imageUrl: "/images/barrena_tusteno.jpeg",
    categoryId: 1,
    categoryName: "Herramientas", // Unificada
    isOnSale: false,
    inStock:true
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
    inStock:true
  },
  {
    id: 8,
    name: "Brocha Ancha",
    description: "Brocha ancha de cerdas resistentes, ideal para cubrir grandes superficies con pintura de manera uniforme y eficiente.",
    price: 120,
    imageUrl: "/images/brocha.jpeg",
    categoryId: 7,
    categoryName: "Pinturas",
    isOnSale: false,
    inStock:true
  },
  {
    id: 9,
    name: "Brocha Fina",
    description: "Brocha fina de precisión, perfecta para detalles y acabados delicados en proyectos de pintura.",
    price: 120,
    imageUrl: "/images/brocha1.jpeg",
    categoryId: 7,
    categoryName: "Pinturas",
    isOnSale: false,
    inStock:true
  },
  {
    id: 10,
    name: "Candado",
    description: "Candado resistente con cuerpo de acero y llave de alta seguridad, ideal para proteger puertas, casilleros y equipos.",
    price: 1700,
    imageUrl: "/images/candados.jpeg",
    categoryId: 7,
    categoryName: "Seguridad",
    isOnSale: false,
    inStock:true
  },
  {
    id: 11,
    name: "Cerrucho",
    description: "Cerrucho con hoja de acero y dientes afilados, diseñado para cortes precisos.",
    price: 1700,
    imageUrl: "/images/cerrucho.jpeg",
    categoryId: 1,
    categoryName: "Herramientas", // Unificada
    isOnSale: false,
    inStock:true
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
    inStock:true
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
    inStock:true
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
    inStock:true
  },
  {
    id: 15,
    name: "Disco de Corte",
    description: "Disco de corte abrasivo de alta resistencia, ideal para trabajar con metal, concreto y otros materiales duros.",
    price: 1700,
    imageUrl: "/images/disco_de_corte.jpeg",
    categoryId: 1,
    categoryName: "Herramientas",
    isOnSale: false,
    inStock:true
  },
  {
    id: 16,
    name: "Injector carburetor",
    description: "Inyector para carburador diseñado para garantizar un flujo eficiente de combustible en motores de combustión interna.",
    price: 1700,
    imageUrl: "/images/injector_carburetor.jpeg",
    categoryId: 1, // Cambiado de 2 a 1
    categoryName: "Herramientas", // Unificada
    isOnSale: false,
    inStock:true
  },
  {
    id: 17,
    name: "Lavadero",
    description: "Lavadero de alta resistencia con acabado durable, ideal para instalaciones domésticas, comerciales o industriales.",
    price: 1700,
    imageUrl: "/images/lavadero.jpeg",
    categoryId: 7,
    categoryName: "Fontanería",
    isOnSale: false,
    inStock:true
  },
  {
    id: 18,
    name: "Llave de Agua",
    description: "Llave de agua tipo cuello de cisne, ideal para lavaderos, fregaderos y aplicaciones domésticas o comerciales.",
    price: 1700,
    imageUrl: "/images/llave_cuello_fanzine.jpeg",
    categoryId: 7,
    categoryName: "Fontanería",
    isOnSale: false,
    inStock:true
  },
  {
    id: 19,
    name: "LLaves de Paso",
    description: "Llave de agua tipo cuello de cisne, ideal para lavaderos, fregaderos y aplicaciones domésticas o comerciales.",
    price: 1700,
    imageUrl: "/images/llave_de_paso.jpeg",
    categoryId: 7,
    categoryName: "Fontanería",
    isOnSale: false,
    inStock:true
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
    inStock:true
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
    inStock:true
  },
  {
    id: 213,
    name: "Manguera de gas",
    description: "Manguera de gas flexible y resistente, diseñada para una conexión segura en sistemas domésticos y comerciales.",
    price: 1700,
    imageUrl: "/images/manguera_gas.jpeg",
    categoryId: 7,
    categoryName: "Fontanería",
    isOnSale: false,
    inStock:true
  },
  {
    id: 22,
    name: "Manguera de agua",
    description: "Manguera de agua flexible y duradera, ideal para riego, limpieza y otras aplicaciones domésticas o comerciales.",
    price: 1700,
    imageUrl: "/images/manguera.jpeg",
    categoryId: 7,
    categoryName: "Fontanería",
    isOnSale: false,
    inStock:true
  },
  {
    id: 23,
    name: "Picaporte",
    description: "Picaporte dorado con diseño elegante y resistente, ideal para puertas interiores y exteriores, brindando estilo y seguridad.",
    price: 1700,
    imageUrl: "/images/picaporte_dorado.jpeg",
    categoryId: 7,
    categoryName: "Seguridad",
    isOnSale: false,
    inStock:true
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
    inStock:true
  },
  {
    id: 25,
    name: "Pistola para Silicona",
    description: "Pistola para silicona resistente y ergonómica, ideal para aplicar selladores con precisión en proyectos de construcción y bricolaje.",
    price: 1700,
    imageUrl: "/images/pistola_para_silicona.jpeg",
    categoryId: 1,
    categoryName: "Herramientas",
    isOnSale: false,
    inStock:true
  },
  {
    id: 26,
    name: "Caramelos Mentolados(12 unidades)",
    description: "Ideales para mantener el aliento fresco y una sensación de bienestar duradera.",
    price: 1200,
    imageUrl: "/images/caramelos_freggels.jpeg",
    categoryId: 11,
    categoryName: "Confituras",
    isOnSale: false,
    inStock:true
  },
  {
    id: 27,
    name: "Caramelos Variados(105 unidades)",
    description: "Una explosión de dulzura y variedad en cada bocado.",
    price: 805,
    imageUrl: "/images/caramelos_variados.jpeg",
    categoryId: 11,
    categoryName: "Confituras",
    isOnSale: false,
    inStock:true
  },
  {
    id: 28,
    name: "Chicles(100 unidades)",
    description: "Chicles sabor frutas.",
    price: 2000,
    imageUrl: "/images/chicles_tutifruti.jpeg",
    categoryId: 11,
    categoryName: "Confituras",
    isOnSale: false,
    inStock:true
  },
  {
    id: 29,
    name: "Pellys(12 unidades)",
    description: "Pellys sabor a Queso.",
    price: 2000,
    imageUrl: "/images/chicoticos_queso.jpeg",
    categoryId: 11,
    categoryName: "Confituras",
    isOnSale: false,
    inStock:true
  },
  {
    id: 30,
    name: "Botonetas",
    description: "Botonetas de colores sabor chocolate.",
    price: 2000,
    imageUrl: "/images/botonetas.jpeg",
    categoryId: 11,
    categoryName: "Confituras",
    isOnSale: false,
    inStock:true
  },
  {
    id: 31,
    name: "Chupa Chups(24 unidades)",
    description: "Chupa Chups de diferentes sabores.",
    price: 2000,
    imageUrl: "/images/chupa_chups_showpop.jpeg",
    categoryId: 11,
    categoryName: "Confituras",
    isOnSale: false,
    inStock:true
  },
  {
    id: 32,
    name: "Galletas Animalitos",
    description: "Galletas sin Relleno sabor Vainilla.",
    price: 150,
    imageUrl: "/images/galletas_animalitos.jpeg",
    categoryId: 11,
    categoryName: "Confituras",
    isOnSale: false,
    inStock:true
  },
  {
    id: 33,
    name: "Galletas BlackOut",
    description: "Galletas sabor Chocolate crema Vainilla.",
    price: 230,
    imageUrl: "/images/galletas_black_out.jpeg",
    categoryId: 11,
    categoryName: "Confituras",
    isOnSale: false,
    inStock:true
  },
  {
    id: 34,
    name: "Galletas BlackOut Azule(48 unidades)",
    description: "Galletas sabor Chocolate crema Vainilla.",
    price: 1040,
    imageUrl: "/images/galletas_blackout_azules.jpeg",
    categoryId: 11,
    categoryName: "Confituras",
    isOnSale: false,
    inStock:true
  },
  {
    id: 35,
    name: "Galletas BlackOut Rojas(24 unidades)",
    description: "Galletas sabor Chocolate crema Vainilla.",
    price: 600,
    imageUrl: "/images/galletas_blacout_otras.jpeg",
    categoryId: 11,
    categoryName: "Confituras",
    isOnSale: false,
    inStock:true
  },
  {
    id: 36,
    name: "Galletas Brinky(12 paquetes de 4 unidades)",
    description: "Puedes escoger por sabor (vainilla,chocolate o fresa).",
    price: 720,
    imageUrl: "/images/galletas_brinky.jpeg",
    categoryId: 11,
    categoryName: "Confituras",
    isOnSale: false,
    inStock:true
  },
  {
    id: 37,
    name: "Galletas Chocolate Biscuit(24 paquetitos de 8 unidades)",
    description: "Galletas con Crema de Chocolate.",
    price: 3120,
    imageUrl: "/images/galletas_crema_chocolate_biscuit.jpeg",
    categoryId: 11,
    categoryName: "Confituras",
    isOnSale: false,
    inStock:true
  },
  {
    id: 38,
    name: "Galletas de Soda (Paquete de 7 paquetitos)",
    description: "Galletas de Soda.",
    price: 1050,
    imageUrl: "/images/galletas_crocantinas.jpeg",
    categoryId: 11,
    categoryName: "Confituras",
    isOnSale: false,
    inStock:true
  },
  {
    id: 39,
    name: "Galletas de Soda Salitas (20 paquetitos)",
    description: "Galletas de Soda Salita.",
    price: 2000,
    imageUrl: "/images/galletas_de_soda.jpeg",
    categoryId: 11,
    categoryName: "Confituras",
    isOnSale: false,
    inStock:true
  },
  {
    id: 40,
    name: "Galletas Dorikas (aquete de 5 paquetitos)",
    description: "Galletas Sándwich.",
    price: 1150,
    imageUrl: "/images/galletas_dorikas.jpeg",
    categoryId: 11,
    categoryName: "Confituras",
    isOnSale: false,
    inStock:true
  },
  {
    id: 41,
    name: "Galletas Dulces (paquete de 5 paquetitos)",
    description: "Galletas Dulces Caprichitos sin relleno.",
    price: 300,
    imageUrl: "/images/galletas_dulces_caprichitos.jpeg",
    categoryId: 11,
    categoryName: "Confituras",
    isOnSale: false,
    inStock:true
  },
  {
    id: 42,
    name: "Galletas Hipopo (Cada Paquete contiene 10 Unidades)",
    description: "Galletas con Diferentes Rellenos.",
    price: 180,
    imageUrl: "/images/galletas_hipopo.jpeg",
    categoryId: 11,
    categoryName: "Confituras",
    isOnSale: false,
    inStock:true
  },
  {
    id: 43,
    name: "Galletas Soda (Cada Caja contiene 24 Unidades)",
    description: "Galletas Saladas .",
    price: 3840,
    imageUrl: "/images/galletas_holey.jpeg",
    categoryId: 11,
    categoryName: "Confituras",
    isOnSale: false,
    inStock:true
  },
  {
    id: 44,
    name: "Galletas Rellenas(1 Unidad)",
    description: "Galletas Rellenas .",
    price: 360,
    imageUrl: "/images/galletas_lamore.jpeg",
    categoryId: 11,
    categoryName: "Confituras",
    isOnSale: false,
    inStock:true
  },
  {
    id: 45,
    name: "Galletas María(1 Unidad)",
    description: "Galletas sin Crema .",
    price: 370,
    imageUrl: "/images/galletas_maria.jpeg",
    categoryId: 11,
    categoryName: "Confituras",
    isOnSale: false,
    inStock:true
  },
  {
    id: 46,
    name: "Galletas Porleo(24 Paquetitos de 8 Unidades cada uno)",
    description: "Galletas con Crema.",
    price: 370,
    imageUrl: "/images/galletas_porleo.jpeg",
    categoryId: 11,
    categoryName: "Confituras",
    isOnSale: false,
    inStock:true
  },
  {
    id: 47,
    name: "Galletas Rellenitas(Paquete de 8 Paquetes de 6 Unidades cada uno)",
    description: "Galletas con Crema(Limón Fresa Chocolate).",
    price: 800,
    imageUrl: "/images/galletas_rellenitas_otras.jpeg",
    categoryId: 11,
    categoryName: "Confituras",
    isOnSale: false,
    inStock:true
  },
  {
    id: 48,
    name: "Galletas Rosquiñas",
    description: "Galletas con Crema(Fresa Chocolate) a escoger.",
    price: 200,
    imageUrl: "/images/galletas_rosquinnas.jpeg",
    categoryId: 11,
    categoryName: "Confituras",
    isOnSale: false,
    inStock:true
  },
  {
    id: 49,
    name: "Galletas(1 Unidad contiene 5 paquetes)",
    description: "Galletas con Sabor Pizza.",
    price: 900,
    imageUrl: "/images/galletas_sabor_pizza.jpeg",
    categoryId: 11,
    categoryName: "Confituras",
    isOnSale: false,
    inStock:true
  },
  {
    id: 50,
    name: "Galletas Soda(1 Unidad contiene 9 paquetes)",
    description: "Galletas de Soda.",
    price: 650,
    imageUrl: "/images/galletas_salricas_roja.jpeg",
    categoryId: 11,
    categoryName: "Confituras",
    isOnSale: false,
    inStock:true
  },
  {
    id: 51,
    name: "Galletas Chocorrisas(1 Unidad contiene 12 paquetes)",
    description: "Galletas con Crema (Chocolate y Vainilla ).",
    price: 1200,
    imageUrl: "/images/galletas_super_chocorrisas.jpeg",
    categoryId: 11,
    categoryName: "Confituras",
    isOnSale: false,
    inStock:true
  },
  {
    id: 52,
    name: "Barra de Guayaba",
    description: "Barra de Guayaba Casera.",
    price: 300,
    imageUrl: "/images/barra_de_guayaba.jpeg",
    categoryId: 12,
    categoryName: "Alimentos y Bebidas",
    isOnSale: false,
    inStock:true
  },
  {
    id: 53,
    name: "Azúcar",
    description: "Paquete de 1 kg.",
    price: 1100,
    imageUrl: "/images/bolsa_de_azucar.jpeg",
    categoryId: 12,
    categoryName: "Alimentos y Bebidas",
    isOnSale: false,
    inStock:true
  },
  {
    id: 54,
    name: "Café",
    description: "Paquete de Café.",
    price: 1800,
    imageUrl: "/images/cafe_el_dorado.jpeg",
    categoryId: 12,
    categoryName: "Alimentos y Bebidas",
    isOnSale: false,
    inStock:true
  },
  {
    id: 55,
    name: "Cerveza Puerto Santo(Caja)",
    description: "Caja de Cervez.",
    price: 4560,
    imageUrl: "/images/cerveza_puerto_santo.jpeg",
    categoryId: 12,
    categoryName: "Alimentos y Bebidas",
    isOnSale: false,
    inStock:true
  },
  {
    id: 56,
    name: "Harina(1kg)",
    description: "Bolsa de Harina.",
    price: 650,
    imageUrl: "/images/harina_de_trigo.jpeg",
    categoryId: 12,
    categoryName: "Alimentos y Bebidas",
    isOnSale: false,
    inStock:true
  },
  {
    id: 57,
    name: "Huevos(30 Unidades)",
    description: "Cartón de Huevos.",
    price: 3300,
    imageUrl: "/images/huevos.jpeg",
    categoryId: 12,
    categoryName: "Alimentos y Bebidas",
    isOnSale: false,
    inStock:true
  },
  {
    id: 58,
    name: "Leche Condensada",
    description: "Lata de Leche Condensada.",
    price: 600,
    imageUrl: "/images/leche_condensada.jpeg",
    categoryId: 12,
    categoryName: "Alimentos y Bebidas",
    isOnSale: false,
    inStock:true
  },
  {
    id: 59,
    name: "Leche Fanguito",
    description: "Lata de Leche hecha Fanguito.",
    price: 650,
    imageUrl: "/images/leche_fanguito.jpeg",
    categoryId: 12,
    categoryName: "Alimentos y Bebidas",
    isOnSale: false,
    inStock:true
  },
  {
    id: 60,
    name: "Papel Higiénico(4 Rollos)",
    description: "Rollos de Papel.",
    price: 550,
    imageUrl: "/images/papel_higienico.jpeg",
    categoryId: 7,
    categoryName: "Hogar y Cocina",
    isOnSale: false,
    inStock:true
  },
  {
    id: 61,
    name: "Pasta de Tomate",
    description: "Lata de Tomate.",
    price: 650,
    imageUrl: "/images/pasta_de_tomate.jpeg",
    categoryId: 12,
    categoryName: "Alimentos y Bebidas",
    isOnSale: false,
    inStock:true
  },
  {
    id: 62,
    name: "Pinturas de Aerosol",
    description: "Pinturas de Spray.",
    price: 1400,
    imageUrl: "/images/pintura_spray_aerosol.jpeg",
    categoryId: 10,
    categoryName: "Automotriz y Mecánica",
    isOnSale: false,
    inStock:true
  },
  {
    id: 53,
    name: "Sorbeto",
    description: "Sorbeto Cubierto de Chocolate.",
    price: 150,
    imageUrl: "/images/sorbeto_porleo.jpeg",
    categoryId: 12,
    categoryName: "Alimentos y Bebidas",
    isOnSale: false,
    inStock:true
  },
  {
    id: 54,
    name: "Espaguetis",
    description: "Paquete de Espaguetis.",
    price: 350,
    imageUrl: "/images/spaguetis.jpeg",
    categoryId: 12,
    categoryName: "Alimentos y Bebidas",
    isOnSale: false,
    inStock:true
  },
];


// Función para simular la obtención de datos
export const fetchProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(products), 500));
};

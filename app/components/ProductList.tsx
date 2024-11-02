// components/ProductList.tsx
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Product } from "../lib/api";
import ProductCard from "./ProductCard";

type ProductListProps = {
  products: Product[];
  onAddToCart: (product: Product) => void;
  title?: string; 
};

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="my-8">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all 0.5s"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="px-2"
      >
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product}/>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductList;

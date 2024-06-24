import React from "react";
import ProductDetails from "./home";
import LikeProduct from "./likeproduct";
import Footer from "../footer";

const ProductCard = () => {
  return (
    <div>
      <ProductDetails />
      <LikeProduct />
      <Footer />
    </div>
  );
};

export default ProductCard;

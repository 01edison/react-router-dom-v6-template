import React from "react";
import { useParams } from "react-router-dom";
import products from "../data";

function SingleProduct() {
  const { productId } = useParams();
  {
    /*tap into the url parameter in that route*/
  }
  const selectedProduct = products.find((product) => product.id === productId);
  {
    /* select the product that matches the id*/
  }
  const { image, name } = selectedProduct;
  return (
    <>
      <section className="section product">
        <h2>{name}</h2>
        <img src={image} alt={name} />
      </section>
    </>
  );
}

export default SingleProduct;

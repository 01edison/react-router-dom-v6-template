import React from "react";
import { Link } from "react-router-dom";
import products from "../data";

function Products() {
  return (
    <>
      <section className="section">
        <div className="products">
          {products.map((product) => {
            return (
              <article key={product.id}>
                <h5>{product.name}</h5>
                <Link to={`/products/${product.id}`}>
                  More info about the product
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Products;

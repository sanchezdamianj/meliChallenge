import React from "react";
import sillas from "../assets/sillas.jpeg";
import check from "../assets/check.jpg";

const ProductCard = () => {
  return (
    <>
      <div className="container__card-product">
        <img src={sillas} className="imageCard" alt="ima" />
        <div className="productData">
          <div className="product__price">
            $ 1.980
            <img src={check} className="iconVerif" alt="iconVerified" />
            <p className="product__location">Capital Federal</p>
          </div>
          <p className="product__description">Product description</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

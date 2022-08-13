import React from "react";
import sillas from "../assets/sillas.jpeg";
const Detail = () => {
  return (
    <div className="grid-detailContainer">
      <div className="productImgDesc">
        <img className="detailImg" src={sillas} alt="ph" />
        <h3>Description del Producto</h3>
        <p className="detailDescription">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          quae vero magnam facere commodi possimus, fugiat sit libero dolore
          odio dicta ducimus doloremque sequi recusandae, assumenda, ex vel illo
          distinctio.
        </p>
      </div>
      <div className="productInfo">
        <div className="condition">
          Nuevo
          <div className="itemsQuantity"> - 200 vendidos</div>
        </div>
        <p className="titleDetail">Sillas</p>
        <span className="priceDetail">$ 1.980</span>
        <button className="btn-purchase">
          <span>Comprar</span>
        </button>
      </div>
    </div>
  );
};

export default Detail;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { axiosClient } from "../apiConfig/config";
import getItemDetail from "../apiConfig/getItemDetail";
import getItems from "../apiConfig/searchItem";
import { Spinner } from "@chakra-ui/spinner";

const Detail = () => {
  const [item, setItem] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const id = window.location.pathname;

  useEffect(() => {
    const position = id.indexOf("/", 2);
    const parseString = id.substring(position);
    setIsLoading(true);

    fetch(`https://api.mercadolibre.com/items/${parseString}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setItem(data);
      });
  }, [id]);

  return !isLoading ? (
    <>
      <div className="grid-detailContainer">
        <div className="productImgDesc">
          <img className="detailImg" src={item.thumbnail} alt="ph" />
          <h3>Description del Producto</h3>
          <p className="detailDescription">{item.title}</p>
        </div>
        <div className="productInfo">
          <div className="condition">
            {item.condition}
            <div className="itemsQuantity">
              {" "}
              - {item.sold_quantity} vendidos
            </div>
          </div>
          <p className="titleDetail">{item.title}</p>
          <span className="priceDetail">$ {item.price}</span>
          <button className="btn-purchase">
            <span>Comprar</span>
          </button>
        </div>
      </div>
    </>
  ) : (
    <div className="spinner">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="lg"
      />
    </div>
  );
};

export default Detail;

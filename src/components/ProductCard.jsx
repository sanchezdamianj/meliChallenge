import React, { useState } from "react";
import Detail from "../pages/Detail";
import check from "../assets/check.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductCard = (item ) => {
  const [prod, setProd] = useState({item});
  const link = `/items/${item.id}`;
  const navigate = useNavigate()

  const handleClickDetail = (item) =>{
    setProd(item)
    navigate(
      { pathname: `/items/${item.id}` })
  } 


  return (
    prod?
   <>
  <Link to={link} >
      <div className="container__card-product" >
        <img src={item.thumbnail} className="imageCard" alt="ima" onClick={handleClickDetail}/>
        <div className="productData">
          <div className="product__price">
            $ {item.price}
            <img src={check} className="iconVerif" alt="iconVerified" />
            <p className="product__location">{item.address.state_name}</p>
          </div>
          <p className="product__description">{item.title}</p>
        </div>
      </div>
  </Link>
    </>
    :
    <Detail  props={item}/>
  );
};

export default ProductCard;

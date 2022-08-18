import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { axiosClient } from "../apiConfig/config";
import getItemDetail from '../apiConfig/getItemDetail'
import getItems from '../apiConfig/searchItem'


const pathname = new URL(window.location.href).searchParams
const search = pathname.get("search");



const Detail =  () => {

  const [item,setItem] = useState([])

  const [isLoading, setIsLoading] = useState(false);
  const {state} = useLocation();

  useEffect(() => {
    // const position = pathname.indexOf("/", 2);
    // const parseString = pathname.substring(position);
   
    setIsLoading(true);
    console.log(search)
   getItems(search).then((res) =>{
     setIsLoading(false);
     
             setItem(res.data);
             console.log(item)
    })


    // getItemDetail(search.toString())
    //   .then((res) => {
 
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);

  return (
    <>

    
    <div className="grid-detailContainer">
      <div className="productImgDesc">
        <img className="detailImg" src={item.picture} alt="ph" />
        <h3>Description del Producto</h3>
        <p className="detailDescription">
        {item.title}
        </p>
      </div>
      <div className="productInfo">
        <div className="condition">
          {item.condition}
          <div className="itemsQuantity"> - {item.sold_quantity} vendidos</div>
        </div>
        <p className="titleDetail">{item.title}</p>
        <span className="priceDetail">$ {item.price}</span>
        <button className="btn-purchase">
          <span>Comprar</span>
        </button>
      </div>
    </div>
    </>
    
  );
};

export default Detail;

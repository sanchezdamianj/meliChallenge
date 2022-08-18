import React, { useState, useEffect } from "react";
import { Spinner } from "@chakra-ui/spinner";
import NonValuesFound from "../components/NonValuesFound";
import ProductCard from "../components/ProductCard";
import { axiosClient } from "../apiConfig/config";
import BreadCrumb  from '../components/BreadCrumb';

const ListItem = () => {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = new URL(window.location.href).searchParams;
  const search = params.get("search");


  useEffect(() => {
    setIsLoading(true);
    axiosClient
      .get(search)
      .then((res) => {
        setIsLoading(false);
        setItems(res.data.results);
        setCategories(res.data.filters[0].values)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search]);

  return !isLoading ? (
    <>
      <BreadCrumb categories={categories} />
      {items.length ? (
        items.slice(1, 5).map((item) => {
          return <ProductCard {...item} key={item.id} />;
        })
      ) : (
        <NonValuesFound />
      )}
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

export default ListItem;

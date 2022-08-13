import React from "react";
import ApiData from "../apiConfig/ApiData";
import "../App.css";
import BreadCrumb from "../components/BreadCrumb";
import ListItem from "../components/ListItem";

const Home = () => {
  return (
    <>
      <BreadCrumb />
      <ListItem />
      <ApiData />
    </>
  );
};

export default Home;

import React from "react";
import ApiData from "../apiConfig/ApiData";
import "../App.css";
import BreadCrumb from "../components/BreadCrumb";
import ListItem from "../components/ListItem";
import Detail from "./Detail";

const Home = () => {
  return (
    <>
      <BreadCrumb />
      <ListItem />
      <ApiData />
      <BreadCrumb />
      <Detail />
    </>
  );
};

export default Home;

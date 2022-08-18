import React from "react";
import Home from '../pages/Home'
import Detail from "../pages/Detail";
import {Routes, Route } from "react-router-dom";
import ListItem from "../components/ListItem";
import NonValuesFound from "../components/NonValuesFound";
import Header from '../components/Header'

const Routing = () => {



  return (
  <>  
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/items" element={<ListItem />} />
      <Route path="/items/:id" element={<Detail />} />
      <Route path="/*" element={<NonValuesFound />} />
    </Routes>
    </>
  );
};

export default Routing;

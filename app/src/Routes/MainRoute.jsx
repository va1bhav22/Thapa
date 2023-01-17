import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import Bag from "../Pages/Bag"
const MainRoute = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/bag" element={<Bag/>}/>
      </Routes>

    </>
  );
};

export default MainRoute;

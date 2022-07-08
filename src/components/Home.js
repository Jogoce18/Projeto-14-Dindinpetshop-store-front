import React from "react";
import Categories from "./CategoryItem/Categories";
import Products from "./ProductList/Products.js";
import TopBar from "./TopBar/TopBar";
import Slider from "./Slider/Slider";
import Footer from "./Footer.js/Footer";
const Home = () => {
  return (
    <div>
      
      <TopBar/>
      <Slider/>
      <Categories />
      <Products/>
      <Footer/>

    
    </div>
  );
};

export default Home;





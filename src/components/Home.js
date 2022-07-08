import React from "react";
import Categories from "./CategoryItem/Categories";
import Products from "./ProductList/Products.js";


const Home = () => {
  return (
    <div>
     
      <Categories />
      <Products/>
    
    </div>
  );
};

export default Home;


import TopBar from "./TopBar/TopBar";

export default function Home() {
	return (
		<div>
			<TopBar />
		</div>
	);
}


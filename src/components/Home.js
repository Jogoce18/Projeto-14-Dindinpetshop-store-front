import React from "react";
import Categories from "./CategoryItem/Categories";
import TopBar from "./TopBar/TopBar";
import Slider from "./Slider/Slider";
import Footer from "./Footer.js/Footer";

const Home = (props) => {
	return (
		<>
			<TopBar />
			{props.children ? (
				props.children
			) : (
				<>
					<Slider />
					<Categories />
				</>
			)}
			<Footer />
		</>
	);
};

export default Home;

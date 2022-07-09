import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import "./../css/reset.css";
import "./../css/style.css";
import Home from "./Home";
import Register from "../components/SignupScreen/SignPage";
import LoginScreen from "../components/LoginScreen/LoginScreen";
import UserContext from "./contexts/UserContext";
import Product from "../components/Product/Product";
import ProductList from "./ProductList/ProductList";
import SearchScreen from "./SearchScreen/SearchScreen";
import SearchContext from "./contexts/SearchContext";
import OrderComplete from "./OrderComplete/OrderComplete";
import logo from "../logo.png";

export default function App() {
	const [userInformation, setUserInformation] = useState({});
	const [loginDataInput, setLoginDataInput] = useState({
		email: "",
		password: "",
	});
	const [searchInformation, setSearchInformation] = useState([]);
	const [products, setProducts] = useState([]);
	const [selectedItem, setSelectedItem] = useState({});
	const [idItems, setIdItems] = useState([]);

	return (
		<UserContext.Provider
			value={{
				userInformation,
				setUserInformation,
				loginDataInput,
				setLoginDataInput,
			}}
		>
			<SearchContext.Provider
				value={{
					searchInformation,
					setSearchInformation,
					products,
					setProducts,
					setSelectedItem,
					selectedItem,
					idItems,
					setIdItems,
				}}
			>
				<BrowserRouter>
					<Routes>
						<Route path="/login" element={<LoginScreen />} />
						<Route path="/cadastro" element={<Register />} />
						<Route path="/" element={<Home />} />
						<Route path="/product/:id" element={<Product />} />
						<Route path="/products/:category" element={<ProductList />} />
						<Route path="/search" element={<SearchScreen />} />
						<Route path="/done" element={<OrderComplete />} />
					</Routes>
				</BrowserRouter>
			</SearchContext.Provider>
		</UserContext.Provider>
	);
}

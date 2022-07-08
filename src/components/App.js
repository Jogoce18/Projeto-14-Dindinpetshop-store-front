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

import SearchContext from "./contexts/SearchContext";

export default function App() {
	const [userInformation, setUserInformation] = useState({});
	const [searchInformation, setSearchInformation] = useState([]);
	const [products, setProducts] = useState([]);
	const [selectedItem, setSelectedItem] = useState({});

	return (
		<UserContext.Provider value={{ userInformation, setUserInformation }}>
<<<<<<< HEAD

			<BrowserRouter>
				<Routes>
				    <Route path="/login" element={<LoginScreen />} />
					<Route path="/cadastro" element={<Register />} />
					<Route path="/home" element={<Home />} />
					<Route path="/product/:id" element={<Product />} />
					<Route path="/products/:category" element={<ProductList />} />
				
				</Routes>
			</BrowserRouter>

=======
>>>>>>> 56a9ff7218f793600875fc81dcf2b958d4d7e6bd
			<SearchContext.Provider
				value={{
					searchInformation,
					setSearchInformation,
					products,
					setProducts,
					setSelectedItem,
					selectedItem,
				}}
			>
				<BrowserRouter>
					<Routes>
						<Route path="/login" element={<LoginScreen />} />
						<Route path="/cadastro" element={<Register />} />
						<Route path="/" element={<Home />} />
						<Route path="/product/:id" element={<Product />} />
						<Route path="/products/:category" element={<ProductList />} />
					</Routes>
				</BrowserRouter>
			</SearchContext.Provider>
		</UserContext.Provider>
	);
}

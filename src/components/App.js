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

export default function App() {
	const [userInformation, setUserInformation] = useState({});
	return (
		<UserContext.Provider value={{ userInformation, setUserInformation }}>
			<BrowserRouter>
				<Routes>
				    <Route path="/login" element={<LoginScreen />} />
					<Route path="/cadastro" element={<Register />} />
					<Route path="/home" element={<Home />} />
					<Route path="/product/:id" element={<Product />} />
					<Route path="/products/:category" element={<ProductList />} />
				</Routes>
			</BrowserRouter>
		</UserContext.Provider>
	);
}

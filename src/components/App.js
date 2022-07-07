import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import "./../css/reset.css";
import "./../css/style.css";
import Home from "./Home";
import Register from "../components/SignupScreen/SignPage";
import LoginScreen from "../components/LoginScreen/LoginScreen";
import UserContext from "./contexts/UserContext";
import SearchContext from "./contexts/SearchContext";

export default function App() {
	const [userInformation, setUserInformation] = useState({});
	const [searchInformation, setSearchInformation] = useState([]);
	return (
		<UserContext.Provider value={{ userInformation, setUserInformation }}>
			<SearchContext.Provider
				value={{ searchInformation, setSearchInformation }}
			>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/cadastro" element={<Register />} />
						<Route path="/login" element={<LoginScreen />} />
					</Routes>
				</BrowserRouter>
			</SearchContext.Provider>
		</UserContext.Provider>
	);
}

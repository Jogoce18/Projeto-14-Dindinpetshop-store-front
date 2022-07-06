import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import "./../css/reset.css";
import "./../css/style.css";
import Home from "./Home";
import Register from "../components/SignupScreen/SignPage";
import LoginScreen from "../components/LoginScreen/LoginScreen";
import UserContext from "./contexts/UserContext";

export default function App() {
	const [userInformation, setUserInformation] = useState({});
	return (
		<UserContext.Provider value={{ userInformation, setUserInformation }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cadastro" element={<Register />} />
					<Route path="/login" element={<LoginScreen />} />
				</Routes>
			</BrowserRouter>
		</UserContext.Provider>
	);
}

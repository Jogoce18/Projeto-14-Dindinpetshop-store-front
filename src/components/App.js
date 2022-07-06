import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import "./../css/reset.css";
import "./../css/style.css";
import Home from "./Home";
import Register from "../components/SignupScreen/SignPage";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cadastro" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
}

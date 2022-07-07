import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import UserContext from "../contexts/UserContext";
import SearchBar from "./SearchBar";

export default function TopBar() {
	const { userInformation } = useContext(UserContext);
	const navigate = useNavigate();

	function clickLogin() {
		navigate("/login");
	}

	return (
		<Box>
			<img src="./assets/logo.png" alt="Logo" />
			<SearchBar />
			{userInformation.name ? (
				<UserName>{`Olá, ${userInformation.name}`}</UserName>
			) : (
				<ButtonLogin onClick={clickLogin}>Log in</ButtonLogin>
			)}
			<ion-icon name="cart-outline"></ion-icon>
		</Box>
	);
}

const Box = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	border-radius: 0 0 10px 10px;
	box-shadow: 1px 5px rgba(0, 0, 0, 0.2);

	img {
		width: 80px;
	}

	ion-icon {
		position: absolute;
		top: 22px;
		right: 20px;
		font-size: 30px;
		color: gray;
	}
`;

const ButtonLogin = styled.div`
	position: absolute;
	top: 26px;
	right: 55px;
	width: 55px;
	border: none;
	padding: 5px;
	color: teal;
	cursor: pointer;
`;

const UserName = styled.div`
	position: absolute;
	top: 18px;
	right: 55px;
	width: 55px;
	border: none;
	padding: 5px;
	color: teal;
`;

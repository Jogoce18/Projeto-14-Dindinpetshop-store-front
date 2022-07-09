import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import UserContext from "../contexts/UserContext";
import SearchBar from "./SearchBar";
import logo from "../../logo.png";

export default function TopBar() {
	const { userInformation } = useContext(UserContext);
	const navigate = useNavigate();

	function clickLogin() {
		navigate("/login");
	}

	function goHome() {
		navigate("/");
	}
	function goCart() {
		navigate("/cart");
	}

	return (
		<Box>
			<div>
				<img src={logo} alt="Logo" onClick={goHome} />
				<SearchBar />
			</div>
			<span>
				{userInformation.name ? (
					<UserName>{`Olá, ${userInformation.name}`}</UserName>
				) : (
					<ButtonLogin onClick={clickLogin}>SIGN IN</ButtonLogin>
				)}
				<ion-icon name="cart-outline"onClick={goCart}></ion-icon>
			</span>
		</Box>
	);
}

const Box = styled.div`
	display: flex;
	align-items: center;
	background-color: white;
	justify-content: space-between;

	img {
		width: 80px;
	}

	ion-icon {
		font-size: 30px;
		color: gray;
	}

	span {
		display: flex;
		margin-right: 30px;
	}

	div:first-child {
		display: flex;
	}
`;

const ButtonLogin = styled.div`
	width: 80px;
	border: none;
	padding: 5px;
	color: teal;
	cursor: pointer;
	margin-right: 30px;
`;

const UserName = styled.div`
	margin-right: 30px;
	width: 80px;
	border: none;
	padding: 5px;
	color: teal;
`;

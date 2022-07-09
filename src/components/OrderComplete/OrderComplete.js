import axios from "axios";
import { useContext } from "react";
import styled from "styled-components";

import SearchContext from "../contexts/SearchContext";
import UserContext from "../contexts/UserContext";
import Home from "../Home";

export default function OrderComplete() {
	const { loginDataInput } = useContext(UserContext);
	const { idItems } = useContext(SearchContext);
	//criar variavel de controle quando concluir o pedido
	if (false) {
		try {
			axios.post("http://localhost:5000/done", {
				user: loginDataInput.email,
				items: idItems,
			});
		} catch (error) {
			console.log("deu ruim");
		}
	}

	return (
		<Home>
			<Box>
				<img src="./assets/approved.png" alt="Approved" />
			</Box>
		</Home>
	);
}

const Box = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	background-color: white;
	padding: 40px 0;

	img {
		width: 30%;
		-webkit-animation-name: tada;
		animation-name: tada;
		-webkit-animation-duration: 1s;
		animation-duration: 1s;
		-webkit-animation-fill-mode: both;
		animation-fill-mode: both;
	}
	@-webkit-keyframes tada {
		0% {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}
		10%,
		20% {
			-webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
			transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
		}
		30%,
		50%,
		70%,
		90% {
			-webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
			transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
		}
		40%,
		60%,
		80% {
			-webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
			transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
		}
		100% {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}
	}
	@keyframes tada {
		0% {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}
		10%,
		20% {
			-webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
			transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
		}
		30%,
		50%,
		70%,
		90% {
			-webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
			transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
		}
		40%,
		60%,
		80% {
			-webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
			transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
		}
		100% {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}
	}
`;

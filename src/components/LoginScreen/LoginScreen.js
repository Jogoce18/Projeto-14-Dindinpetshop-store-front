import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import AuthScreen from "../shared/AuthScreen";
import url from "../services/url";

export default function LoginScreen() {
	const [loginDataInput, setLoginDataInput] = useState({
		email: "",
		password: "",
	});

	const navigate = useNavigate();

	function handleFormChange(e) {
		let loginData = { ...loginDataInput };
		loginData[e.target.name] = e.target.value;
		setLoginDataInput(loginData);
	}

	let config = {
		headers: {
			...loginDataInput,
		},
	};

	async function login(e) {
		e.preventDefault();

		try {
			const data = await axios.post(url.login, {}, config);
			console.log(data);
			navigate("/store");
		} catch (error) {
			if (error.response.status === 422) {
				alert("Preencha os dados corretamente!");
			}
			if (error.response.status === 401) {
				alert("Usuário/senha inválidos!");
			}
		}
	}

	return (
		<AuthScreen>
			<Title>SIGN IN</Title>
			<Form>
				<Input
					type="email"
					name="email"
					placeholder="E-mail"
					onChange={(e) => handleFormChange(e)}
					value={loginDataInput.email}
					required
				/>
				<Input
					type="password"
					name="password"
					placeholder="Password"
					onChange={(e) => handleFormChange(e)}
					value={loginDataInput.password}
					required
				/>
				<Button onClick={login} type="submit">
					Entrar
				</Button>
				<Link to="/cadastro" style={{ textDecoration: "none" }}>
					<span>Não tem conta? Cadastre-se aqui!</span>
				</Link>
			</Form>
		</AuthScreen>
	);
}

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	span {
		font-size: 12px;
		color: black;
	}
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	margin-top: 10px;
	margin-bottom: 10px;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
`;

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";
import { sendAlert } from "../Alert/Alert";

import AuthScreen from "../shared/AuthScreen";
import url from "../services/url";
import UserContext from "../contexts/UserContext";
import FormsLogin from "./FormsLogin";

export default function LoginScreen() {
	const { setUserInformation, setLoginDataInput, loginDataInput } =
		useContext(UserContext);

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
			const { data } = await axios.post(url.login, {}, config);
			setUserInformation(data);
			navigate("/");
		} catch (error) {
			if (error.response.status === 422) {
				sendAlert('error', '', "Preencha os dados corretamente!")
				;
			}
			if (error.response.status === 401) {
				sendAlert('error', '', "Usuário/senha inválidos!")
				
			}
		}
	}

	return (
		<AuthScreen>
			<Title>SIGN IN</Title>
			<FormsLogin
				handleFormChange={handleFormChange}
				loginDataInput={loginDataInput}
				login={login}
			/>
		</AuthScreen>
	);
}

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

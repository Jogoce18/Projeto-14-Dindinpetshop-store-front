import styled from "styled-components";
import { Link } from "react-router-dom";

export default function FormsLogin({
	handleFormChange,
	loginDataInput,
	login,
}) {
	return (
		<>
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
		</>
	);
}

const Form = styled.form`
	display: flex;
	flex-direction: column;

	span {
		font-size: 12px;
		color: black;
	}

	input:valid {
		border: 2px solid green;
	}

	input:invalid {
		border: 2px solid red;
	}

	textarea:focus,
	input:focus {
		outline: none;
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

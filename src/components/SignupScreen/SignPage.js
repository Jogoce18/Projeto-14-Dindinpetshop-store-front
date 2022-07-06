import styled from "styled-components";
import AuthScreen from "../shared/AuthScreen";

const Register = () => {
	return (
		<AuthScreen>
			<Title>CREATE AN ACCOUNT</Title>
			<Form>
				<Input placeholder="Name" />
				<Input placeholder="Last name" />
				<Input placeholder="Username" />
				<Input placeholder="E-mail" />
				<Input placeholder="Password" />
				<Input placeholder="Confirm password" />
				<Agreement>
					By creating an account, I consent to the processing of my personal
					data in accordance with the <b>PRIVACY POLICY</b>
				</Agreement>
				<Button>CREATE</Button>
			</Form>
		</AuthScreen>
	);
};

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
`;

const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0px;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
`;

export default Register;

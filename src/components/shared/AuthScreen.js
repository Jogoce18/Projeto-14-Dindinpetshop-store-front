import styled from "styled-components";
import { mobile } from "../../responsive";

export default function AuthScreen(props) {
	return (
		<Container>
			<Wrapper>{props.children} </Wrapper>
		</Container>
	);
}

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		),
		url("https://conteudo.solutudo.com.br/wp-content/uploads/2019/08/PET.jpg")
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 40%;
	padding: 20px;
	background-color: white;
	${mobile({ width: "75%" })}
`;

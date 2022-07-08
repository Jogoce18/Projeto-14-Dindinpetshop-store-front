import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import TopBar from "../TopBar/TopBar";
import Footer from "../Footer.js/Footer";
import SearchContext from "../contexts/SearchContext";
import Product from "../ProductList/Item";

export default function SearchScreen() {
	const { searchInformation } = useContext(SearchContext);

	const navigate = useNavigate();

	function goBack() {
		navigate("/");
	}

	return (
		<>
			<TopBar />
			<Container>
				{searchInformation.length ? (
					searchInformation.map((item, index) => (
						<Product key={index} item={item} />
					))
				) : (
					<Text>Nenhum item encontrado</Text>
				)}
			</Container>
			<Button onClick={goBack}>Voltar</Button>
			<Footer />
		</>
	);
}

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const Text = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	width: 100%;
	padding: 40px 0;
`;

const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100px;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
	margin: 0 auto;
`;

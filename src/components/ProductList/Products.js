import styled from "styled-components";
import Product from "./Item";
import Home from "../Home";

import { useContext } from "react";

import SearchContext from "../contexts/SearchContext";

const Products = () => {
	const { products } = useContext(SearchContext);

	return (
		<Home>
			<Container>
				{products.map((item, index) => (
					<Product key={index} item={item} />
				))}
			</Container>
		</Home>
	);
};

export default Products;

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

import styled from "styled-components";
import { mobile } from "../../responsive";
import CategoryItem from "./CategoryItem";
import { categories } from "../../data";

const Container = styled.div`
	display: flex;
	padding: 20px;
	justify-content: space-between;
	height: 70vh;
	${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
	return (
		<Container>
			{categories.map((item, index) => (
				<CategoryItem item={item} key={index} />
			))}
		</Container>
	);
};

export default Categories;

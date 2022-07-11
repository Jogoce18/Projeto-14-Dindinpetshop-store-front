import styled from "styled-components";
import { mobile } from "../../responsive";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import SearchContext from "../contexts/SearchContext";

import Home from "../Home";

const Product = () => {
	const { selectedItem, idItems, setIdItems } = useContext(SearchContext);
	const navigate = useNavigate();

	function addIdCart() {
		setIdItems([...idItems, selectedItem]);
		navigate("/");
	}

	function voltaCart() {
		setIdItems([...idItems, selectedItem]);
		navigate("/cart");
	}

	return (
		<>
			<Home>
				<Container>
					<Wrapper>
						<ImgContainer>
							<Image src={selectedItem.image} />
						</ImgContainer>
						<InfoContainer>
							<Title>{selectedItem.name}</Title>
							<Desc>{selectedItem.description}</Desc>
							<Price>{selectedItem.value}</Price>
							<AddContainer>
								<Button onClick={addIdCart}>ADD TO CART</Button>
								<Button onClick={voltaCart}>CHECKOUT</Button>
							</AddContainer>
						</InfoContainer>
					</Wrapper>
				</Container>
			</Home>
		</>
	);
};

export default Product;

const Container = styled.div`
	${mobile({ margin: "0 0 75px 0 " })}
`;

const Wrapper = styled.div`
	padding: 50px;
	display: flex;
	${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
	flex: 1;
`;

const Image = styled.img`
	width: 100%;
	height: 90vh;
	object-fit: cover;
	${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 50px;
	${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
	font-weight: 200;
`;

const Desc = styled.p`
	margin: 20px 0px;
`;

const Price = styled.span`
	font-weight: 100;
	font-size: 40px;
`;

const AddContainer = styled.div`
	width: 80%;
	display: flex;
	align-items: center;
	${mobile({ width: "100%" })}
	div:first-child {
		margin-right: 15px;
	}
`;

const Button = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50px;
	padding: 10px;
	border: 2px solid teal;
	background-color: white;
	cursor: pointer;
	font-weight: 500;
	&:hover {
		background-color: #f8f4f4;
	}
	margin-top: 20px;
`;

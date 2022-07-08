import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../../responsive";
import TopBar from "../TopBar/TopBar";
import { useContext } from "react";
import SearchContext from "../contexts/SearchContext";
import { useNavigate } from "react-router-dom";

const Product = () => {
  
 
  const { selectedItem } = useContext(SearchContext);
  const navigate = useNavigate();


  const handleClick = () => {
	navigate("/cart");
  };
  

	return (
		<Container>
      <TopBar />
			<Wrapper>
				<ImgContainer>
					<Image src={selectedItem.image} />
				</ImgContainer>
				<InfoContainer>
					<Title>{selectedItem.name}</Title>
					<Desc></Desc>
					<Price>{selectedItem.value}</Price>
					<AddContainer>
						
						<Button onClick={handleClick}>ADD TO CART</Button>
						
					</AddContainer>

					<span>{selectedItem.description}</span>
				</InfoContainer>
			</Wrapper>
		</Container>
	);
};

export default Product;

const Container = styled.div``;

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

const FilterContainer = styled.div`
	width: 50%;
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
	${mobile({ width: "100%" })}
`;

const Filter = styled.div`
	display: flex;
	align-items: center;
`;

const FilterTitle = styled.span`
	font-size: 20px;
	font-weight: 200;
`;

const FilterColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	/* background-color: ${(props) => props.color}; */
	margin: 0px 5px;
	cursor: pointer;
`;

const FilterSize = styled.select`
	margin-left: 10px;
	padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
`;

const Amount = styled.span`
	width: 30px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid teal;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0px 5px;
`;

const Button = styled.button`
	padding: 15px;
	border: 2px solid teal;
	background-color: white;
	cursor: pointer;
	font-weight: 500;
	&:hover {
		background-color: #f8f4f4;
	}
`;

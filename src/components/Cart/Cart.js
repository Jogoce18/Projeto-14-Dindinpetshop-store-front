import styled from "styled-components";
import { useContext, useState } from "react";
import SearchContext from "../contexts/SearchContext";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Payment from "./Payment";
import Home from "../Home";
import axios from "axios";

const Cart = () => {
	const { idItems, setIdItems } = useContext(SearchContext);
	const { userInformation } = useContext(UserContext);
	const [paymentData, setPaymentData] = useState({
		name: "",
		cardnumber: "",
		expire: "",
		cvv: "",
	});
	const navigate = useNavigate();

	let total = 0;
	idItems.forEach((element) => {
		let value = parseInt(element.value.replace("R$", "").replace(",", "."));
		total += value;
	});

	function addIdCart() {
		navigate("/");
	}

	function handleFormChange(e) {
		let data = { ...paymentData };
		data[e.target.name] = e.target.value;
		setPaymentData(data);
	}

	async function checkOut(e) {
		e.preventDefault();
		if (userInformation.token) {
			try {
				await axios.post("https://dindinpetshop.herokuapp.com/done", {
					paymentData,
					items: idItems,
				});
				setIdItems([]);
				navigate("/done");
			} catch (error) {
				console.log(error);
			}
		} else {
			alert("Você deve estar logado!");
		}
	}

	return (
		<Home>
			<Container>
				<Title1>YOUR BAG</Title1>
				<Top>
					<TopButton onClick={addIdCart}>CONTINUE SHOPPING</TopButton>
				</Top>
				<HeaderContainer>
					<HeaderDiv>
						<h1>CART ITEMS</h1>
						<h2>SUBTOTAL</h2>
					</HeaderDiv>
				</HeaderContainer>
				<BodyContainer>
					<BodyDiv>
						<CartContainer>
							{idItems.map((product) => {
								return (
									<CartDiv key={product._id}>
										<CartNome>
											<img src={product.image} alt="product" />
											<h1>{product.name}</h1>
										</CartNome>
										<h2>{product.value}</h2>
									</CartDiv>
								);
							})}
							<Total>Total: R$ {total.toFixed(2).replace(".", ",")}</Total>

							<Payment
								paymentData={paymentData}
								handleFormChange={handleFormChange}
								checkOut={checkOut}
							/>
						</CartContainer>
					</BodyDiv>
				</BodyContainer>
			</Container>
		</Home>
	);
};

export default Cart;

const Container = styled.div``;

const Title1 = styled.h1`
	margin-top: 26px;
	font-weight: 600;
	text-align: center;
	font-family: "Urbanist", sans-serif;
	font-size: 18px;
`;

const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`;

const TopButton = styled.button`
	padding: 10px;
	font-weight: 600;
	cursor: pointer;
	border: ${(props) => props.type === "filled" && "none"};
	background-color: ${(props) =>
		props.type === "filled" ? "black" : "transparent"};
	color: ${(props) => props.type === "filled" && "white"};
`;

const HeaderContainer = styled.header`
	width: 100%;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const BodyContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 90px;
`;

const BodyDiv = styled.div`
	width: 900px;
`;

const HeaderDiv = styled.div`
	margin-top: 10px;
	border-top: 2px solid teal;
	border-bottom: 2px solid teal;
	width: 900px;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	h1 {
		font-family: "Urbanist", sans-serif;
		font-size: 18px;
		margin-right: 200px;
		color: black;

		font-weight: 600;
	}

	h2 {
		font-family: "Urbanist", sans-serif;
		font-size: 18px;
		color: black;
		font-weight: 600;
	}
`;

const CartNome = styled.div`
	width: 220px;
	height: 100%;
	display: flex;
	gap: 15px;
	align-items: center;
	padding-bottom: 20px;
	margin-right: 25px;

	h1 {
		white-space: nowrap;
		width: 80px;
		font-family: "Urbanist", sans-serif;
		font-size: 18px;
		color: black;
		font-weight: 600;
	}

	img {
		height: 130px;
		width: 130px;
		border: 2px solid teal;
		border-radius: 5px;
	}
`;

const CartDiv = styled.div`
	margin-top: 20px;
	border-bottom: 2px solid teal;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	h2 {
		font-family: "Urbanist", sans-serif;

		font-size: 18px;
		color: black;
		font-weight: 600;
	}

	img {
		height: 120px;
		width: 120px;
	}
`;

const CartContainer = styled.div`
	margin-top: 20px;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const Total = styled.h2`
	margin-top: 15px;
	font-family: "Urbanist", sans-serif;
	font-size: 25px;
	color: black;
	text-align: end;
`;

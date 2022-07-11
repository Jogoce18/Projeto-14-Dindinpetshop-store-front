import {
	Facebook,
	Instagram,
	MailOutline,
	Phone,
	Twitter,
	Room,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";

const Container = styled.div`
	display: flex;
	${mobile({ display: "none" })}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
	margin: 20px 0px;
`;

const SocialContainer = styled.div`
	display: flex;
`;

const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`;

const Center = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ display: "none" })}
`;

const Title = styled.h3`
	margin-bottom: 30px;
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`;

const Payment = styled.img`
	width: 50%;
`;

const Footer = () => {
	const { userInformation } = useContext(UserContext);
	const navigate = useNavigate();

	function clickLogin() {
		navigate("/login");
	}

	function goCart() {
		navigate("/cart");
	}
	return (
		<>
			<Container>
				<Left>
					<Logo>DINDIN.</Logo>
					<Desc>
						DINDIN is a company on a mission to develop elegant, sustainable,
						and cost-effective products and services to provide humans and their
						pets with a more intelligent lifestyle..
					</Desc>
					<SocialContainer>
						<SocialIcon color="3B5999">
							<Facebook />
						</SocialIcon>
						<SocialIcon color="E4405F">
							<Instagram />
						</SocialIcon>
						<SocialIcon color="55ACEE">
							<Twitter />
						</SocialIcon>
					</SocialContainer>
				</Left>
				<Center>
					<Title>Shop</Title>
					Shop, Clean, Feed, Drink, Fun, Sleep, Bundles.
				</Center>
				<Right>
					<Title>Contact</Title>
					<ContactItem>
						<Room style={{ marginRight: "10px" }} /> Brazil
					</ContactItem>
					<ContactItem>
						<Phone style={{ marginRight: "10px" }} /> +55 21991654237
					</ContactItem>
					<ContactItem>
						<MailOutline style={{ marginRight: "10px" }} />{" "}
						contact@dindinpetshop.dev
					</ContactItem>
					<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
				</Right>
			</Container>
			<Box>
				<span>
					{userInformation.name ? (
						<UserName>{`Olá, ${userInformation.name}`}</UserName>
					) : (
						<ButtonLogin onClick={clickLogin}>SIGN IN</ButtonLogin>
					)}
					<ion-icon name="cart-outline" onClick={goCart}></ion-icon>
				</span>
			</Box>
		</>
	);
};

export default Footer;

const Box = styled.div`
	z-index: 2;
	display: none;
	align-items: center;
	background-color: white;
	justify-content: center;
	width: 100%;
	height: 65px;
	${mobile({ display: "flex", position: "fixed", bottom: "0", left: "0" })}

	img {
		width: 80px;
	}

	ion-icon {
		font-size: 30px;
		color: gray;
	}

	span {
		display: flex;
	}

	div:first-child {
		display: flex;
	}
`;

const ButtonLogin = styled.div`
	width: 80px;
	border: none;
	padding: 5px;
	color: teal;
	cursor: pointer;
	margin-right: 30px;
	${mobile({ margin: "0 30px 0 0" })}
`;

const UserName = styled.div`
	margin-right: 30px;
	width: 80px;
	border: none;
	padding: 5px;
	color: teal;
`;

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

const Container = styled.div`
	display: flex;
	${mobile({ flexDirection: "column" })}
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
	return (
		<Container>
			<Left>
				<Logo>DINDIN.</Logo>
				<Desc>
					DINDIN is a company on a mission to develop elegant, sustainable, and
					cost-effective products and services to provide humans and their pets
					with a more intelligent lifestyle..
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
	);
};

export default Footer;

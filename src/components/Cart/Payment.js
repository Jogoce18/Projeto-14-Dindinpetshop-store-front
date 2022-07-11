import styled from "styled-components";

export default function Payment({ paymentData, handleFormChange, checkOut }) {
	return (
		<Box>
			<Form onSubmit={checkOut}>
				<Input
					type="text"
					name="name"
					placeholder="Nome"
					onChange={(e) => handleFormChange(e)}
					value={paymentData.name}
					required
				/>
				<Input
					type="text"
					name="cardnumber"
					placeholder="Nº do Cartão"
					inputMode="numeric"
					pattern="[0-9]{16}"
					onChange={(e) => handleFormChange(e)}
					value={paymentData.cardnumber}
					required
				/>
				<div>
					<div>
						<Input
							type="text"
							name="expire"
							placeholder="Validade"
							inputMode="numeric"
							pattern="[0-9]{2}/[0-9]{2}"
							onChange={(e) => handleFormChange(e)}
							value={paymentData.expire}
							required
						/>
						<Text>Ex: 04/12</Text>
					</div>
					<div>
						<Input
							type="text"
							name="cvv"
							placeholder="CVV"
							inputMode="numeric"
							pattern="[0-9]{3}"
							onChange={(e) => handleFormChange(e)}
							value={paymentData.cvv}
							required
						/>
						<Text>Ex: 123</Text>
					</div>
				</div>
				<Button type="submit">CHECKOUT NOW</Button>
			</Form>
		</Box>
	);
}
const Box = styled.div``;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 70%;
	margin: 0 auto;

	div {
		display: flex;

		div {
			display: flex;
			flex-direction: column;
			min-width: 40%;

			input {
				min-width: 20px;
			}
		}
	}
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
	border: none;
`;

const Text = styled.p`
	color: grey;
	font-size: 13px;
	margin-top: 3px;
`;

const Button = styled.button`
	margin: 0 auto;
	padding: 10px;
	font-weight: 600;
	cursor: pointer;
	border: ${(props) => props.type === "filled" && "none"};
	background-color: ${(props) =>
		props.type === "filled" ? "black" : "transparent"};
	color: ${(props) => props.type === "filled" && "white"};
	margin-top: 15px;
`;

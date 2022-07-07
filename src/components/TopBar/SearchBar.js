import styled from "styled-components";

export default function SearchBar() {
	return (
		<Form action="/" method="get">
			<Input type="text" placeholder="Search products" name="s" />
			<Button type="submit">Search</Button>
		</Form>
	);
}

const Form = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Input = styled.input`
	min-width: 30%;
	padding: 13px;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
`;

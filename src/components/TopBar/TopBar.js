import styled from "styled-components";
import SearchBar from "./SearchBar";

export default function TopBar() {
	return (
		<Box>
			<img src="./assets/logo.png" alt="Logo" />
			<SearchBar />
		</Box>
	);
}

const Box = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	border-radius: 0 0 10px 10px;
	box-shadow: 1px 5px rgba(0, 0, 0, 0.2);

	img {
		width: 80px;
	}
`;

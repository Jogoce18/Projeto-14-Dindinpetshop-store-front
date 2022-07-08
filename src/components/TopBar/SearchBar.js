import axios from "axios";
import { useState, useContext } from "react";
import styled from "styled-components";

import url from "../services/url";
import SearchContext from "../contexts/SearchContext";

export default function SearchBar() {
	const [searchData, setSearchData] = useState({
		searchItem: "",
	});

	const { setSearchInformation } = useContext(SearchContext);

	function handleFormChange(e) {
		let item = { ...searchData };
		item[e.target.name] = e.target.value;
		setSearchData(item);
	}

	async function getSearchItems(e) {
		e.preventDefault();
		try {
			const { data } = await axios.get(url.search, {
				headers: searchData,
			});
			setSearchInformation(data);
		} catch (error) {
			console.log(error.response.status);
		}
	}

	return (
		<Form>
			<Input
				type="text"
				placeholder="Search products"
				name="searchItem"
				value={searchData.searchItem}
				onChange={(e) => handleFormChange(e)}
			/>

			<Button onClick={getSearchItems} type="submit">
				Search
			</Button>
		</Form>
	);
}

const Form = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Input = styled.input`
	width: 120%;
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

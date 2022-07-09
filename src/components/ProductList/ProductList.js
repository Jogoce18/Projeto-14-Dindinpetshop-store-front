import styled from "styled-components";
import { mobile } from "../../responsive";
import { useLocation,useParams } from "react-router";
import { useState } from "react";
import Products from "./Products";
import Footer from "../Footer.js/Footer";
import TopBar from "../TopBar/TopBar";
const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const params=useParams();
 

  
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <>
    <TopBar/>
    <Container>
      <Products cat={cat}  filters={filters} sort={sort} params={params} />
    </Container>
    <Footer/>
    </>
  );
};

export default ProductList
const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;
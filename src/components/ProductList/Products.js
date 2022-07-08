import styled from "styled-components";
import Product from "./Item";
import axios from "axios";
import { useEffect, useState } from "react";

  const Products = ({ cat, filters,params }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
  
    useEffect(() => {

      const getProducts = async () => {
        try {
          const {data} = await axios.get( 
             "https://dindinpetshop.herokuapp.com/category",{headers:{params}}
          );
          setProducts(data);
          
    console.log(data)
        } catch (err) {}
      };
      getProducts();
    }, [cat]);
  
   /* useEffect(() => {
      cat &&
        setFilteredProducts(
          products.filter((item) =>
            Object.entries(filters).every(([key, value]) =>
              item[key].includes(value)
            )
          )
        );
    }, [products, cat, filters]);*/
  
  
    return (
      <Container>
        {cat
          ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
          : products
              .slice(0, 8)
              .map((item) => <Product item={item} key={item.id} />)}
      </Container>
    );
  };
  
  export default Products;
  const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

`;

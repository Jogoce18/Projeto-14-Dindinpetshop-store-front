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

	return (
		<>
			<Products />
		</>
	);

};

export default ProductList;

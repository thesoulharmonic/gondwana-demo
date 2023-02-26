import axios from "../axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import ProductPreview from "../components/ProductPreview";
import Pagination from "../components/Pagination";
import "./Home.css";



function CategoryPage() {

    // retrieve category parameter from URL
const { category } = useParams();

// set initial state variables with useState hooks
const [loading, setLoading] = useState(false);
const [products, setProducts] = useState([]);
const [searchTerm, setSearchTerm] = useState("");

// useEffect hook to perform a side effect (HTTP request to retrieve products) 
useEffect(() => {
    setLoading(true);
    axios
        .get(`/products/category/${category}`)
        .then(({ data }) => {
            setLoading(false);
            setProducts(data);
        })
        .catch((e) => {
            setLoading(false);
            console.log(e.message);
        });
}, [category]);

// if loading is true, display a loading spinner
if (loading) {
    <Loading />;
}

// filter products array based on search term
const productsSearch = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

// function to render a single product preview
function ProductSearch({ _id, category, name, pictures, price }) {
    return <ProductPreview _id={_id} category={category} name={name} pictures={pictures} price={price} />;
}

// display a filtered list of products with pagination
    return (
        <div className="category-page-container">
         
            <div className="filters-container d-flex justify-content-center pt-4 pb-4">
                <input type="search" placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            {productsSearch.length === 0 ? (
                <h1>No products to show</h1>
            ) : (
                <Container>
                    <Row>
                        <Col md={{ span: 10, offset: 1 }}>
                            <Pagination data={productsSearch} RenderComponent={ProductSearch} pageLimit={1} dataLimit={15} tablePagination={false} />
                        </Col>
                    </Row>
                </Container>
            )}
        </div>
    );
}

export default CategoryPage;

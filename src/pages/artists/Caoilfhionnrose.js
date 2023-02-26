import React, { useEffect } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../../features/productSlice";
import ProductPreview from "../../components/ProductPreview";

// Artist page

export default function Caoilfhionnrose() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products); // retrieve products from the Redux store

  const lastProducts = products; // set priducts to new constant

  // useEffect hook to perform a HTTP request to retrieve all products
  useEffect(() => {
    axios.get("/products").then(({ data }) => dispatch(updateProducts(data))); //
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col sm={4} className="logoBig">
            <img
              src="../images/caoilfhionn-artpage.png"
              alt="Caoilfhionn Rose"
              height="auto"
              width="100%"
            />
            <p className="artistWebsite">
              <a href="http://www.caoilfhionnrose.com/">
                http://www.caoilfhionnrose.com/
              </a>
            </p>
          </Col>
          <Col sm={8}>
            <div className="aboutText">
              <h1>Caoilfhionn Rose</h1>
              <p>
                Caoilfhionn Rose (pronounced Keelin), is a singer, songwriter
                and producer who was born in Manchester, England, with family
                routes in Northern Ireland and Yorkshire (UK). Emerging from a
                diverse music scene, she ties together remnants of Manchester’s
                musical past with its evolving present. She has collaborated
                with musicians from around the world and is perhaps best known
                for her work with Vini Reilly of The Durutti Column:
                Collaborating on four songs on the Chronicle LX:XL album.
              </p>
              <p>
                Caoilfhionn will release her long awaited sophomore album
                ‘Truly’ on April 9th on Gondwana Records which was co-produced
                by Kier Stewart of The Durutti Column. It moves through a
                tapestry of curious musical inflections; nods towards folk,
                jazz, ambient, electronica and even a subtle influence of
                psychedelia. Rose’s song writing draws from a diverse palette of
                influences, including Building Instrument, Rachel Sermanni,
                Alabaster dePlume and Broadcast. Rose also professes to a love
                for beautiful, stripped back, piano based music, such as Dustin
                O’Halloran and label mate Hania Rani.
              </p>
              <p>
                With Manchester’s Fletcher Moss Park proving especially
                inspiring, Rose’s debut album Awaken was released in October
                2018 on Gondwana Records. A deeply collaborative recording,
                co-produced by Matthew Halsall, Caoilfhionn and members of her
                band, that draws on folk, psychedelia and subtle electronica
                influences to produce something expansive, fragile and
                experimental.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <div className="artistPageDiscog">
            <h2>Discography</h2>
            {/* map artist products */}
            {lastProducts.map(
              // Map over the array of 'lastProducts' and render the ProductPreview component for each product that meets the condition.
              (product) =>
                product.name.includes("Caoilfhionn") && (
                  <ProductPreview {...product} />
                )
            )}
          </div>
        </Row>
      </Container>
    </>
  );
}

import React, { useEffect } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../../features/productSlice";
import ProductPreview from "../../components/ProductPreview";

// Artist page

export default function Jasminemyra() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const lastProducts = products; 

  useEffect(() => {
    axios.get("/products").then(({ data }) => dispatch(updateProducts(data))); // 
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col sm={4} className="logoBig">
            <img src="../images/jasmine-artpage.jpeg" alt="Jasmine Myra" height="auto" width="100%" />
            <p className="artistWebsite">
              <a href="http://www.jasminemyra.com/">
                http://www.jasminemyra.com/
              </a>
            </p>
          </Col>
          <Col sm={8}>
            <div className="aboutText">
              <h1>Jasmine Myra</h1>
              <p>
              Jasmine Myra is a saxophonist, composer and band leader, based in Leeds. Part of the bustling, creative, cross-genre music scene in the city she has surrounded herself with some of the best young talent in the north of England. Her original instrumental music has a euphoric and uplifting sound, influenced by artists as diverse as Bonobo, Olafur Arnalds and Kenny Wheeler, artists whose music shares an emotive quality that you can also hear in Myra’s own compositions.
              </p>
              <p>
              She has been working with Gondwana Records A&R and producer Matthew Halsall, whose keen ear for talent helped bring the music of GoGo Penguin, Mammal Hands and Hania Rani to the wider world.


              </p>
              <p>
              “I was immediately drawn to Jasmine’s music. I could hear jazz, electronica in her music but with a deep, honest, emotional quality. I was really impressed with her skills as a composer and bandleader, that she is open and intelligent enough to bring all those influences together, to make something fresh and original.” — Matthew Halsall


              </p>
              <p>Jasmine Myra’s debut album ‘Horizons’ is out now.

</p>
            </div>
          </Col>
        </Row>

        <Row>
          <div className="artistPageDiscog">
            <h2>Discography</h2>
            {/* map artist products */}
            {lastProducts.map(
              (product) =>
                product.name.includes("Jasmine") && (
                  <ProductPreview {...product} />
                )
            )}
          </div>
        </Row>
      </Container>
    </>
  );
}
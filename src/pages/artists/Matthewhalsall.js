import React, { useEffect } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../../features/productSlice";
import ProductPreview from "../../components/ProductPreview";

// Artist page

export default function Matthewhalsall() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const lastProducts = products 

  useEffect(() => {
    axios.get("/products").then(({ data }) => dispatch(updateProducts(data))); // 
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col sm={4} className="logoBig">
            <img src="../images/matt-artpage.jpeg" alt="Matthew Halsall" height="auto" width="100%" />
            <p className="artistWebsite">
              <a href="http://www.matthewhalsall.com/">
                http://www.matthewhalsall.com/
              </a>
            </p>
          </Col>
          <Col sm={8}>
            <div className="aboutText">
              <h1>Matthew Halsall</h1>
              <p>
                Composer, trumpeter, producer, DJ and founder of Gondwana
                Records, Matthew Halsall has always worn many hats. But at the
                heart of everything that he does Halsall is first and foremost
                an artist and a musician. A trumpeter whose unflashy, soulful
                playing radiates a thoughtful beauty and a composer and
                band-leader who has created his own rich sound world. A sound
                that draws on the heritage of British jazz, the spiritual jazz
                of Alice Coltrane and Pharoah Sanders, as well as world music
                and electronica influences, and even modern art and
                architecture, to create something uniquely his own. A music that
                is rooted in Northern England but draws on global inspirations.
              </p>
              <p>
                When Matthew Halsall released Salute to the Sun in November
                2020, his first new album in five years, he shared the first
                fruits from an especially fertile period of writing and
                recording, which also gave birth to the music released here as
                The Temple Within.
              </p>
              <p>
                The recording sessions featured Halsall’s then brand new band of
                hand-picked local musicians, brought together through weekly
                rehearsals and a monthly residency at Yes in Manchester, they
                forged an immersive, communal sound, drawing on spiritual jazz,
                the heritage of British jazz and progressive world music and
                electronica influences. Inspired by these monthly sessions,
                together, they created a body of music that is rooted in
                Northern England but draws on global inspirations. For Halsall
                the music on The Temple Within perfectly captures the spirit of
                those sessions.
              </p>
              <p>The Temple Within – a four-track EP, is out now.</p>
            </div>
          </Col>
        </Row>

        <Row>
          <div className="artistPageDiscog">
            <h2>Discography</h2>
            {/* map artist products */}
            {lastProducts.map(
              (product) =>
                product.name.includes("Matthew Halsall") && (
                  <ProductPreview {...product} />
                )
            )}
          </div>
        </Row>
      </Container>
    </>
  );
}
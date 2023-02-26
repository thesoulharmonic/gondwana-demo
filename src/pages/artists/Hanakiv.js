import React, { useEffect } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../../features/productSlice";
import ProductPreview from "../../components/ProductPreview";

// Artist page

export default function Hanakiv() {
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
            <img src="../images/hanakiv-artpage.jpeg" alt="Hanakiv" height="auto" width="100%" />
            <p className="artistWebsite">
              <a href="http://www.hanakiv.com/">
                http://www.hanakiv.com/
              </a>
            </p>
          </Col>
          <Col sm={8}>
            <div className="aboutText">
              <h1>Hanakiv</h1>
              <p>
              Hanakiv is a young composer and musician from Estonia (now based in London) who creates meditative piano-based ambient music with elements from classical and electronic music. ‘Goodbyes’ is her debut recording and draws on influences as diverse as Tim Hecker, Björk “Vespertine”, Kara-Lis Coverdale, Arvo Pärt, Erkki-Sven Tüür and Aphex Twin as well as her own cultural heritage. Music has an important part in Estonian culture, especially choir music and its traditions, but Hanakiv also draws on her love of nature – the beautiful Estonian seaside and forests – and on her time in Iceland. However, it was moving to London that gave her the freedom to make her own music: “London gave me the freedom and courage to really be who I am (as a person and musically)” and her heritage and her new home both offer inspiration to Goodbyes, as Hanakiv moves between these two opposite places, a bustling metropolis and a small country full of nature, drawing inspiration from both as she sculpts her own voice.
              </p>
              <p>Goodbyes is out 10th March on Gondwana Records.

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
                product.name.includes("Hanakiv") && (
                  <ProductPreview {...product} />
                )
            )}
          </div>
        </Row>
      </Container>
    </>
  );
}
import React, { useEffect } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../../features/productSlice";
import ProductPreview from "../../components/ProductPreview";

// Artist page

export default function Mammalhands() {
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
            <img
              src="../images/mammals-artpage.jpeg"
              alt="Mammal Hands"
              height="auto"
              width="100%"
            />
            <p className="artistWebsite">
              <a href="http://www.mammalhands.com/">
                http://www.mammalhands.com/
              </a>
            </p>
          </Col>
          <Col sm={8}>
            <div className="aboutText">
              <h1>Mammal Hands</h1>
              <p>
                Captivating, ethereal and majestic, Mammal Hands (saxophonist
                Jordan Smart, pianist Nick Smart and drummer and percussionist
                Jesse Barrett) has carved out a refreshingly original sound from
                a disparate array of influences. Drawing on their love of
                electronic, contemporary classical, world, folk and jazz music,
                Mammal Hands take in influences including Pharoah Sanders,
                Gétachèw Mekurya, Terry Riley, Steve Reich and Sirishkumar
                Manji.
              </p>
              <p>
                Formed in Norwich in 2012, one of Britain’s most isolated and
                most easterly cities, Mammal Hands have forged their own path
                away from the musical mainstream and their unique sound grew out
                of long improvised rehearsals. All three members contribute
                equally to the writing process: one that favours the creation of
                a powerful group dynamic over individual solos. Their records
                are entrancing and beautiful affairs, while their hypnotic live
                shows have seen them hailed as one of the most exciting bands in
                Europe as they push their unique line-up to the outer limits of
                its possibilities.
              </p>
              <p>
                Mammal Hands’ fifth studio album ‘Gift from the Trees’ offers a
                fresh perspective on the unique trio’s singular music. The first
                to be recorded in a residential studio, the band enjoyed the
                opportunity to go late into the night searching for a deeper,
                more organic experience, closer to both their writing process
                but also their trance-like live performances. While some of the
                music was pre-composed and had even been performed live, the
                band also enjoyed the opportunity to improvise ideas in the
                studio.
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
                product.name.includes("Mammal") && (
                  <ProductPreview {...product} />
                )
            )}
          </div>
        </Row>
      </Container>
    </>
  );
}

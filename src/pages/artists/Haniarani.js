import React, { useEffect } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../../features/productSlice";
import ProductPreview from "../../components/ProductPreview";

// Artist page

export default function Haniarani() {
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
              src="../images/hania-artpage.jpeg"
              alt="Hania Rani"
              height="auto"
              width="100%"
            />
            <p className="artistWebsite">
              <a href="http://www.haniarani.com/">http://www.haniarani.com/</a>
            </p>
          </Col>
          <Col sm={8}>
            <div className="aboutText">
              <h1>Hania Rani</h1>
              <p>
                “I feel like ‘Home’ is a second part of the same book, that the
                start was in ‘Esja’, a musical prelude to a real plot. I feel
                Home is a story with an ending, so the next book can tell a
                totally different one. I am constantly looking for new ways of
                expression. I am curious where ‘Home’ will lead me and my
                music”. — Hania Rani Hania Rani is a pianist, composer and
                musician who, was born in Gdansk and splits her life between
                Warsaw, where she makes her home, and Berlin where she studied
                and often works. Her debut album ‘Esja’, a beguiling collection
                of solo piano pieces on Gondwana Records was released to
                international acclaim on April 5th 2019 including nominations in
                5 categories in the Polish music industries very own Grammys,
                the Fryderyki, and winning the Discovery of the Year 2019 in the
                Empik chain’s Bestseller Awards and the prestigious Sanki award
                for the most interesting new face of Polish music chosen by
                Polish journalists. Rani also composed the music for her first
                full length movie “I Never Cry” directed by Piotr Domalewski and
                for the play “Nora” directed by Michał Zdunik. </p>
                
                <p>Her song “Eden”
                was used as a soundtrack of a short movie by Małgorzata
                Szumowska for Miu Miu’s movie cycle “Women’s Tales” If the
                compositions on Esja were born out of a fascination with the
                piano as an instrument, then her follow-up, the expansive,
                cinematic, ‘Home’, finds Rani expanding her palate: adding
                vocals and subtle electronics to her music as well as being
                joined on some tracks by bassist Ziemowit Klimek and drummer
                Wojtek Warmijak. The album reunites her with recording
                engineers, Piotr Wieczorek and Ignacy Gruszecki (Monochrom
                Studio) and the tracks were mixed again by Gijs van Klooster in
                his studio in Amsterdam and by Piotr Wieczorek in Warsaw
                (Ombelico and Come Back Home). Home was mastered by Zino Mikorey
                in Berlin (known for his work on albums by artists such as Nils
                Frahm and Olafur Arnalds). For Rani, ‘Home’, is very much a
                continuation of the work she started on ‘Esja’, “the completion
                of the sentence” as she puts it. The album offers a metaphorical
                journey: the story of places that become our home sometimes by
                chance, sometimes by choice. It is the story of leaving a place
                that is familiar and the journey that follows it. Home opens
                with the fragment of the short story “Loneliness” by Bruno
                Schulz, which can be seen as a parable of a journey that does
                not necessarily mean going beyond the physical door but can
                signify going beyond the symbolic limits of our knowledge and
                imagination. “One can be lost but can find home in his inner
                part – which can mean many things – soul, imagination, mind,
                intuition, passion. </p>
                
                <p>I strongly believe that when being in
                uncertain times and living an unstable life we can still reach
                peace with ourselves and be able to find ‘home’ anywhere’ This
                is what I would like to express with my music – one can travel
                the whole world but not see anything. It is not where we are
                going but how much we are able to see and hear things happening
                around us”. — Hania Rani Hania Rani announces “On Giacometti” a
                tender meditation on the life and art of Alberto Giacometti and
                family, released February 17th.
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
                product.name.includes("Hania") && (
                  <ProductPreview {...product} />
                )
            )}
          </div>
        </Row>
      </Container>
    </>
  );
}

import Carousel from "react-bootstrap/Carousel";

// react bootstrap carousel - https://react-bootstrap.github.io/components/carousel/

function CarouselMain() {
  return (
    <Carousel>
      
        <Carousel.Item interval={2500}>

          <img
            className="d-block w-100"
            src="../images/MammalsBanner.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Mammal Hands - A Gift From The Trees</h3>
            <p>The new studio release from Mammal Hands.</p>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item interval={2500}> 
        {/* set interval of slide  */}

          <img
            className="d-block w-100"
            src="../images/HanaKivBanner.jpeg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Hanakiv - Goodbyes</h3>
            <p>The new studio release from Hanakiv.</p>
          </Carousel.Caption>
        

        </Carousel.Item>

        <Carousel.Item interval={2500}>

          <img
            className="d-block w-100"
            src="../images/MatthewHalsallBanner.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Matthew Halsall - Changing Earth</h3>
            <p>The new studio release from Matthew Halsall.</p>
          </Carousel.Caption>
       

        </Carousel.Item>

    </Carousel>
  );
}

export default CarouselMain;

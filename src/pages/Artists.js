import React from 'react'
import { Col, Row } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

function Artists() {
  return (
    <div>
      
      <div className="homeArtist">

          <Row>
          <h2>Artists</h2>
          <LinkContainer to="/artists/Matthewhalsall">
            <Col className="home-artist">
              <img src="../images/MHartist.jpeg" alt="" />
              <p>Matthew Halsall</p>
            </Col>
          </LinkContainer>
          <LinkContainer to="/artists/Haniarani">
            <Col className="home-artist">
              <img src="../images/HRartist.jpeg" alt="" />
              <p>Hania Rani</p>
            </Col>
          </LinkContainer>

          <LinkContainer to="/artists/Mammalhands" >
            <Col className="home-artist">
              <img src="../images/MammalHartist.jpeg" alt=""/>
              <p>Mammal Hands</p>
            </Col>
          </LinkContainer>
        </Row>

        <Row>
          <LinkContainer to="/artists/Hanakiv" >
            <Col className="home-artist">
              <img src="../images/HKartist.jpeg" alt=""/>
              <p>Hanakiv</p>
            </Col>
          </LinkContainer>

          <LinkContainer to="/artists/Caoilfhionnrose" >
            <Col className="home-artist">
              <img src="../images/CRartist.jpeg" alt=""/>
              <p>Caoilfhionn Rose</p>
            </Col>
          </LinkContainer>

          <LinkContainer to="/artists/Jasminemyra">
            <Col className="home-artist">
              <img src="../images/JMartist.jpeg" alt=""/>
              <p>Jasmine Myra</p>
            </Col>
          </LinkContainer>
        </Row>



      </div>
    </div>
  )
}

export default Artists

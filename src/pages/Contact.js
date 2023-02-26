import React from "react";
import { Col, Container, Row } from "react-bootstrap";


// simple contact page 

export default function Contact() {
  return (
      <Container>
        <Row>
        <Col sm={4} className="logoBig">
            <img src="../images/GRlogo.png" alt="logo" height="300px" width="300px" />
          </Col>
          <Col sm={8}>
            <div className="aboutText">
          <h5>PRESS, RADIO, ONLINE & GENERAL ENQUIRIES </h5>
          <p>Please email  
      < a href="label@gondwanarecords.com"> label@gondwanarecords.com</a></p>
      
      <h5>BOOKING ARTISTS </h5>
      <p>If you are interested in
      booking an artist for a live / DJ event please contact their booking agent
      directly. Details of who to contact can be found here </p>
      
      <h5> PUBLISHING </h5>
      <p>Gondwana Records currently works with publishing company Woodwork Music </p>
      
      <h5>DEMO POLICY</h5>
      <p>We are now only accepting demos in digital form. Please email
      demos@gondwanarecords.com with links to MP3 files (but NO MP3 email
      attachments please!), SoundCloud pages, or websites. Please remember to
      include contact details within the email body and keep your submission
      short and sweet, best tracks first. Please don’t chase us for a response.
      If we like it we will get in touch with you.</p>
            </div>
          </Col>
        </Row>
      </Container>
  );
}

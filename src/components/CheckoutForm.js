import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCreateOrderMutation } from "../services/appApi";

function CheckoutForm() {
    const stripe = useStripe(); // get Stripe object
    const elements = useElements(); 
    const user = useSelector((state) => state.user); // get user state
    const navigate = useNavigate(); // navigate function for routing
    const [alertMessage, setAlertMessage] = useState(""); 
    const [createOrder, { isLoading, isError, isSuccess }] = useCreateOrderMutation(); // create order mutation
    const [country, setCountry] = useState(""); // state for country
    const [address, setAddress] = useState(""); // state for address
    const [paying, setPaying] = useState(false); // state for paying status

    async function handlePay(e) { // function to handle payment
        e.preventDefault();
        if (!stripe || !elements || user.cart.count <= 0) return; // return if not stripe, elements, or no items in cart
        setPaying(true); // set paying status to true
        const { client_secret } = await fetch("http://localhost:8080/create-payment", { // get client secret from server
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ",
            },
            body: JSON.stringify({ amount: user.cart.total }), // send amount to server
        }).then((res) => res.json());
        const { paymentIntent } = await stripe.confirmCardPayment(client_secret, { // confirm card payment with client secret and card element
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });
        setPaying(false); // set paying status to false

        if (paymentIntent) { // if payment is successful
            createOrder({ userId: user._id, cart: user.cart, address, country }).then((res) => { // create order on server
                if (!isLoading && !isError) {
                    setAlertMessage(`Payment ${paymentIntent.status}`); // set alert message
                    setTimeout(() => {
                        navigate("/orders");
                    }, 3000); // navigate to orders after 3 seconds
                }
            });
        }
    }

    return (
        <Col className="cart-payment-container">
            <Form onSubmit={handlePay}>
                <Row>
                    {alertMessage && <Alert>{alertMessage}</Alert>}
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" value={user.name} disabled />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Email" value={user.email} disabled />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={7}>
                        <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                        </Form.Group>
                    </Col>
                    <Col md={5}>
                        <Form.Group className="mb-3">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} required />
                        </Form.Group>
                    </Col>
                </Row>
                <label htmlFor="card-element">Card</label> 
<CardElement id="card-element" />
<Button className="mt-3" type="submit" disabled={user.cart.count <= 0 || paying || isSuccess}>
    {paying ? "Processing..." : "Pay"} 
    {/* // submit button with text "Processing..." when paying is true or "Pay" otherwise */}
</Button> 

            </Form>
        </Col>
    );
}

export default CheckoutForm;

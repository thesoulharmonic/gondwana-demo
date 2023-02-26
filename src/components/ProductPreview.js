import React from "react";
import { Badge, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


// function for setting product card


function ProductPreview({ _id, category, name, pictures, artist, price }) {
    return (
        <LinkContainer to={`/product/${_id}`} style={{ cursor: "pointer", width: "13rem", margin: "10px" }}>
            <Card style={{ width: "20rem", margin: "10px" }}>
                <Card.Img variant="top" className="product-preview-img" src={pictures[0].url} style={{ height: "150px", objectFit: "cover" }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    {/* <Card.Title>{artist}</Card.Title> */}

                    <Card.Text>${price}</Card.Text>
                    <Badge bg="warning" text="dark">
                        {category}
                    </Badge>
                </Card.Body>
            </Card>
        </LinkContainer>
    );
}

export default ProductPreview;

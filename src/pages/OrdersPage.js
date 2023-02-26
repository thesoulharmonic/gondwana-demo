import React, { useEffect, useState } from "react";
import { Badge, Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "../axios";
import Loading from "../components/Loading";

function OrdersPage() {
    const user = useSelector((state) => state.user);
    // set initial state variables with useState
const [orders, setOrders] = useState([]);
const [loading, setLoading] = useState(false);

// useEffect hook to perform a side effect (HTTP reques)
useEffect(() => {
    setLoading(true);
    axios
        .get(`/users/${user._id}/orders`)
        .then(({ data }) => {
            setLoading(false);
            setOrders(data);
        })
        .catch((e) => {
            setLoading(false);
            console.log(e);
        });
}, []);

// display a loading spinner if true
if (loading) {
    return <Loading />;
}

if (orders.length === 0) {
    return <h1 className="text-center pt-3">No orders yet</h1>;
}

// return to display a table of the user orders

    return (
        <Container>
            <h1 className="text-center">Your orders</h1>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr>
                            <td>{order._id}</td>
                            <td>
                                <Badge bg={`${order.status == "processing" ? "warning" : "success"}`} text="white">
                                    {order.status}
                                </Badge>
                            </td>
                            <td>{order.date}</td>

                            <td>${order.total}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default OrdersPage;

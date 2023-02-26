import React, { useRef, useState } from "react";
import { Navbar, Button, Nav, NavDropdown, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../features/userSlice";
import "./Navigation.css";

// optional chaining - https://upmostly.com/tutorials/optional-chaining-in-react#:~:text=What%20is%20Optional%20Chaining%3F,property1.

function Navigation() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const bellRef = useRef(null);
  const notificationRef = useRef(null);
  const [bellPos, setBellPos] = useState({});

  // handleLogout that dispatches a logout action to store

  function handleLogout() {
    dispatch(logout());
  }

  // calculate the number of unread notifications by the user

  const unreadNotifications = user?.notifications?.reduce(function (
    acc,
    current
  ) {
    if (current.status === "unread") {
      return acc + 1;
    }
    return acc;
  },
  0);

  // navigation links and states

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src="../images/GRlogo.png" alt="" width="46px" height="46px" />
          </Navbar.Brand>
        </LinkContainer>

        <LinkContainer to="/artists">
          <Nav.Link>Artists</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/category/all">
          <Nav.Link>Store</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/contact">
          <Nav.Link>Contact Us</Nav.Link>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* if no user */}
            {!user && (
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            )}
            {user && !user.isAdmin && (
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>
                  {user?.cart.count > 0 && (
                    <span className="badge badge-warning" id="cartcount">
                      {user.cart.count}
                    </span>
                  )}
                </Nav.Link>
              </LinkContainer>
            )}

            {/* if user */}
            {user && (
              <>
                <Nav.Link style={{ position: "relative" }} onClick={null}>
                  <i
                    className="fas fa-bell"
                    ref={bellRef}
                    data-count={null}
                  ></i>
                </Nav.Link>
                <NavDropdown title={`${user.email}`} id="basic-nav-dropdown">
                  {user.isAdmin && (
                    <>
                      <LinkContainer to="/admin">
                        <NavDropdown.Item>Dashboard</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/new-product">
                        <NavDropdown.Item>Create Product</NavDropdown.Item>
                      </LinkContainer>
                    </>
                  )}
                  {!user.isAdmin && (
                    <>
                      <LinkContainer to="/cart">
                        <NavDropdown.Item>Cart</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orders">
                        <NavDropdown.Item>My orders</NavDropdown.Item>
                      </LinkContainer>
                    </>
                  )}

                  <NavDropdown.Divider />
                  <Button
                    variant="danger"
                    onClick={handleLogout}
                    className="logout-btn"
                  >
                    Logout
                  </Button>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      {/* notifications */}
      <div
        className="notifications-container"
        ref={notificationRef}
        style={{
          position: "absolute",
          top: bellPos.top + 30,
          left: bellPos.left,
          display: "none",
        }}
      >
         {/* // Check if the user has any notifications */}
         {/* // if so, map over the notifications array */}
        {user?.notifications.length > 0 ? (
          user?.notifications.map((notification) => (
            <p className={`notification-${notification.status}`}>
              {notification.message}
              <br />
              <span>
                {notification.time.split("T")[0] +
                  " " +
                  notification.time.split("T")[1]}
              </span>
            </p>
          ))
        ) : (
          <p>No notifcations yet</p> // If the user has no notifications, render nothing
        )}
      </div>
    </Navbar>
  );
}

export default Navigation;

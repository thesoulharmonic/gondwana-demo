import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import Artists from "./pages/Artists";
import Contact from "./pages/Contact";
import NewProduct from "./pages/NewProduct";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import ScrollToTop from "./components/ScrollToTop";
import CartPage from "./pages/CartPage";
import OrdersPage from "./pages/OrdersPage";
import AdminDashboard from "./pages/AdminDashboard";
import EditProductPage from "./pages/EditProductPage";
import { useEffect } from "react";
import { io } from "socket.io-client";
import { addNotification } from "./features/userSlice";

import Matthewhalsall from "./pages/artists/Matthewhalsall";
import Haniarani from "./pages/artists/Haniarani";
import Caoilfhionnrose from "./pages/artists/Caoilfhionnrose";
import Mammalhands from "./pages/artists/Mammalhands";
import Jasminemyra from "./pages/artists/Jasminemyra";
import Hanakiv from "./pages/artists/Hanakiv";

// some logic and structure from this tutorial  https://www.youtube.com/watch?v=e-KQq-WnJW4&t=1s

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const socket = io("https://gondwana-backend-demo.onrender.com");
    socket.off("notification").on("notification", (msgObj, user_id) => {
      // logic for notification
      if (user_id === user._id) {
        dispatch(addNotification(msgObj));
      }
    });

    socket.off("new-order").on("new-order", (msgObj) => {
      if (user.isAdmin) {
        dispatch(addNotification(msgObj));
      }
    });
  }, []);

  // create routes for pages and links + dashboards

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/artists/Matthewhalsall" element={<Matthewhalsall />} />
          <Route path="/artists/Haniarani" element={<Haniarani />} />
          <Route
            path="/artists/Caoilfhionnrose"
            element={<Caoilfhionnrose />}
          />
          <Route path="/artists/Mammalhands" element={<Mammalhands />} />
          <Route path="/artists/Jasminemyra" element={<Jasminemyra />} />
          <Route path="/artists/Hanakiv" element={<Hanakiv />} />

          {!user && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
          )}

          {user && (
            <>
              <Route path="/cart" element={<CartPage />} />
              <Route path="/orders" element={<OrdersPage />} />
            </>
          )}
          {user && user.isAdmin && (
            <>
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/product/:id/edit" element={<EditProductPage />} />
            </>
          )}
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />

          <Route path="/new-product" element={<NewProduct />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

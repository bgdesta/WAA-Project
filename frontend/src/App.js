import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
// import Home from "./components/Home";
import Profile from "./components/Profile";
// import BoardUser from "./components/BoardUser";
// import BoardModerator from "./components/BoardModerator";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

import EventBus from "./common/EventBus";
import AdminLandingPage from "./components/AdminLandingPage";

import "./cssStyle/cssstyle.css";
import Product from "./components/product";
import SellerLandingPage from "./components/SellerLandingPage";
import Purchase from "./components/buyer";

const App = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage());
    });
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    // if (currentUser) {
    //   setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
    //   setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    // } else {
    //   setShowModeratorBoard(false);
    //   setShowAdminBoard(false);
    // }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  const navStyle = {
    color: "white",
  };

  return (
    <Router>
      <nav className="navs">
        <ul className="nav-links">
          {currentUser ? (
            <div className="nav-item">
              <a href="/login" style={navStyle} onClick={logOut}>
                <li>LogOut</li>
              </a>
            </div>
          ) : (
            <div>
              <div>
                <Link to={"/login"} style={navStyle} className="nav-item">
                  Login
                </Link>
                <Link to={"/register"} style={navStyle}>
                  Sign Up
                </Link>
              </div>
            </div>
          )}

          {currentUser && currentUser.roles[0] === "ROLE_ADMIN" ? (
            <div className="nav-item">
              <Link to={"/admin"} className="nav-link" style={navStyle}>
                Verify Sellers
              </Link>
            </div>
          ) : (
            <div></div>
          )}

          {currentUser && currentUser.roles[0] === "ROLE_SELLER" ? (
            <div>
              <Link to={"/products"} className=" nav-link" style={navStyle}>
                View Products
              </Link>
              <Link to={"/product"} className="nav-link" style={navStyle}>
                Register Prod
              </Link>
            </div>
          ) : (
            <div></div>
          )}

          {currentUser && currentUser.roles[0] === "ROLE_BUYER" ? (
            <div>
              <Link to={"/order"} style={navStyle} className="nav-item">
                Product Orders
              </Link>

              <Link to={"/purchase"} className="nav-link" style={navStyle}>
                Purchase Products
              </Link>
            </div>
          ) : (
            <div></div>
          )}
        </ul>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<logout />} />
        <Route path="/admin" element={<AdminLandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<SellerLandingPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;

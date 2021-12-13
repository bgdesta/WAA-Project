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

// import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";
import AdminLandingPage from "./components/AdminLandingPage";

import "./cssStyle/cssstyle.css";
import Product from "./components/product";
import Purchase from "./components/buyer";

const App = () => {
  // const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  // const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
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
      {/* <nav className="navbar navbar-expand navbar-dark bg-dark"> */}
      {/* <Link to={"/"} className="navbar-brand">
          MIU
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/mod"} className="nav-link">
                Moderator Board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
          )}
        </div> */}

      <nav className="navs">
        <ul className="nav-links">
          <Link style={navStyle} to="/login">
            {" "}
            <li>Login </li>
          </Link>
          <Link style={navStyle} to="/register">
            <li> Signup </li>
          </Link>
          <Link style={navStyle} to="/product">
            {" "}
            <li> product </li>
          </Link>
          <Link style={navStyle} to="/purchase">
            {" "}
            <li> purchase </li>
          </Link>
        </ul>
      </nav>

      {currentUser && currentUser.roles[0] === "ROLE_ADMIN" ? (
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/admin"} className="nav-link">
              Verify Sellers
            </Link>
          </li>
          <li className="nav-item">
            <a href="/login" className="nav-link" onClick={logOut}>
              LogOut
            </a>
          </li>
        </div>
      ) : (
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/register"} className="nav-link">
              Sign Up
            </Link>
          </li>
        </div>
      )}

      {/* {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )} */}
      {/* </nav> */}
      {/* */}
      <Routes>
        {/* <div className="container mt-3"> */}
        {/* <Route path={["/", "/home"]} element={Home} /> */}

        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<logout />} />
        <Route path="/admin" element={<AdminLandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/profile" element={<Profile />} />

        {/* <Route path="/user" element={BoardUser} />
        <Route path="/mod" element={BoardModerator} />
        <Route path="/admin" element={BoardAdmin} /> */}

        {/* </div> */}
      </Routes>
    </Router>
  );
};

export default App;

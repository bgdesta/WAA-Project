import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  const navStyle = {
    color: "white",
    listStyle: "none",
  };
  return (
    <div>
      <nav className="navs">
        <li className="nav-item">
          <Link style={navStyle} to="/register">
            Signup
          </Link>
        </li>

        <li className="nav-item">
          <Link to={"/admin"} style={navStyle} className="nav-link">
            Verify Sellers
          </Link>
        </li>
      </nav>
      ;
    </div>
  );
};

export default AdminNav;

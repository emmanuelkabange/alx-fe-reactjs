import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ backgroundColor: "#282c34", padding: "10px" }}>
      <ul
        style={{
          listStyle: "none",
          margin: "0",
          padding: "0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <li style={{ margin: "0 15px" }}>
          <Link
            to="/"
            style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
          >
            Home
          </Link>
        </li>
        <li style={{ margin: "0 15px" }}>
          <Link
            to="/about"
            style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
          >
            About
          </Link>
        </li>
        <li style={{ margin: "0 15px" }}>
          <Link
            to="/services"
            style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
          >
            Services
          </Link>
        </li>
        <li style={{ margin: "0 15px" }}>
          <Link
            to="/contact"
            style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

import React from "react";
import "./Navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div classname="navbar__logo">
          <img src={logo} alt="SQS_Logo" />
          <h2>SQS Bags</h2>
        </div>
        <ul classname="navbar__links">
          <li></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

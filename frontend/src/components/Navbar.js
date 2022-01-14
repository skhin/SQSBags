import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div classname="navbar__logo">
          <a href="/">
            <img className="nav__logo" width="80px" src={logo} alt="SQS_Logo" />
            <h4 className="nav__sqs">SQS Bags</h4>
          </a>
        </div>
        <ul classname="navbar__links">
          <li>
            <Link to="/cart" className="cart__link">
              <i className="fas fa-shopping-cart"></i>
              <span>
                Cart
                <span className="cartlogo__badge">0</span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/">Shop</Link>
          </li>
        </ul>
        <div className="hamburger__menu">
          <div className="hamburger__menu__div"></div>
          <div className="hamburger__menu__div"></div>
          <div className="hamburger__menu__div"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

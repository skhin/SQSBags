import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { Input } from "@material-ui/core";
import { Search } from "@material-ui/icons";

const Navbar = (click) => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__left">
          <div className="navbar__logo">
            <a href="/">
              <img className="nav__logo sqs__logo" src={logo} alt="SQS_Logo" />
              <h4 className="nav__sqs">SQS Bags</h4>
            </a>
          </div>
          <div className="navbar__search__container">
            <div className="navbar__input">
              <Input placeholder="Search" />
              <Search style={{ color: "gray", fontSize: 16 }} />
            </div>
          </div>
        </div>
        <div className="navbar__center">
          <Link to="/shop" className="shop__link">
            SHOP
          </Link>
          <Link to="/login" className="login__link">
            LOGIN
          </Link>
        </div>
        <div className="navbar__right">
          <ul className="navbar__links">
            <li>
              <Link to="/cart" className="cart__link">
                <i className="fas fa-shopping-cart"></i>
                <span>
                  Cart <span className="cartlogo__badge">0</span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

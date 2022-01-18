import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { Input } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../redux/reducers/userReducer";

const Navbar = (click) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(userActions.logout());
  };

  const isLoggedIn = () => {
    if (user.accessToken !== "") {
      return (
        <>
          <Link to="/profile">
            <i class="fa-solid fa-user"></i>
          </Link>
          <span> </span>
          <button className="logout__link" onClick={logout}>
            LOGOUT
          </button>
        </>
      );
    } else {
      return (
        <Link to="/login" className="login__link">
          LOGIN
        </Link>
      );
    }
  };

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
          <span> </span>
          {isLoggedIn()}
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

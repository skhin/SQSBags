import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
import { Link, useHistory } from "react-router-dom";
import { Input } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../redux/reducers/userReducer";
import { useState, useEffect } from "react";
import axios from "axios";

const Navbar = (click) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = (e) => {
    e.preventDefault();
    dispatch(userActions.logout());
    const path = "/";
    history.push(path);
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

  // ********************* //

  // ******** HANDLE SEARCH ************* //

  const [searchText, setsearch] = useState("");
  const [bagsData, setbagsData] = useState([]);

  let matches = [];
  const handleSearchInput = (e) => {
    setsearch(e.target.value);
    if (searchText.length > 0) {
      let suggest = bagsData.filter((bags) => {
        return bags.color.toLowerCase().includes(searchText.toLowerCase());
      });

      suggest.push(
        bagsData.filter((bags) => {
          return bags.type.toLowerCase().includes(searchText.toLowerCase());
        })
      );

      suggest.push(
        bagsData.filter((bags) => {
          return bags.name.toLowerCase().includes(searchText.toLowerCase());
        })
      );
      matches = suggest;
      console.log(matches);
    }
  };

  const handleSearchOutput = (e) => {
    if (searchText === null || searchText.trim() === "")
      console.log("Empty Search");
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get("/api/bags");
    setbagsData(data);
  };
  // console.log(bagsData);

  // ********************* //

  // ******** UPDATE THE CART LOGO ON HOMPEAGE WITH COUNT************* //

  const cartItemsInLocalStorage = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  const [cart, setCart] = useState({ cartItems: cartItemsInLocalStorage });

  const { cartItems } = cart;
  useEffect(() => {}, []);

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  console.log(getCartCount());

  // ********************* //

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
              {/* <Input placeholder="Search" />
              <Search style={{ color: "gray", fontSize: 16 }} /> */}{" "}
              <Link className="results" to="/search">
                <Input
                  placeholder="Search"
                  onChange={handleSearchInput}
                  value={searchText}
                />
                <Search
                  style={{ color: "gray", fontSize: 16, cursor: "pointer" }}
                  onClick={handleSearchOutput}
                />{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="navbar__center">
          <Link to="/shop" className="shop__link">
            SHOP
          </Link>
          <Link to="/contact" className="contact__link">
            CONTACT
          </Link>
          {isLoggedIn()}
        </div>
        <div className="navbar__right">
          <ul className="navbar__links">
            <li>
              <Link to="/cart" className="cart__link">
                <i className="fas fa-shopping-cart"></i>
                <span>
                  Cart <span className="cartlogo__badge">{getCartCount()}</span>
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

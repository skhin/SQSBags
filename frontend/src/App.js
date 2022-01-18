import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// Pages Import
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import ShopPage from "./pages/ShopPage";
import Checkout from "./pages/Checkout";

// Components Import
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  // scroll to top button
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <div className="app">
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
      <Header />
      <Router>
        <Navbar click={() => setSideToggle(true)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <main className="app">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/bags/:id" component={ProductPage} />
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/checkout">
              <Checkout />
            </Route>
            <Route exact path="/forgotPassword">
              <ForgotPassword />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/profile/edit">
              <EditProfile />
            </Route>
          </Switch>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

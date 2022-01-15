import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

// Pages Import
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

// Components Import
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <div className="app">
      <Header />
      <Router>
        <Navbar click={() => setSideToggle(true)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <main className="app">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/bags/:id" component={ProductPage} />
            <Route exact path="/cart" component={CartPage} />
          </Switch>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

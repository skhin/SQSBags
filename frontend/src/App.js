import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages Import
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

// Components Import
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Navbar />
        <Backdrop />
        <main>
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

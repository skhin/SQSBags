import React from "react";
import "./HomePage.css";
import { useEffect, useState } from "react";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "../components/Product";

//Actions
// import { getAllBags as listProducts } from "../redux/actions/productActions";
import ShopPage from "./ShopPage";

const HomePage = () => {
  // const dispatch = useDispatch();

  // // get the data info
  // const getAllBags = useSelector((state) => state.getAllBags);

  // // destructure the products. Before loading anything. it will check for error
  // const { products, loading, error } = getAllBags;
  // const products2 = products.concat(products);
  // // every time the page loads, it lists the items
  // useEffect(() => {
  //   dispatch(listProducts());
  // }, [dispatch]);

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setloading] = useState(true);

  const getAllBags = async () => {
    try {
      const { data } = await axios.get("/api/bags");
      setProducts(data);
      console.log(products);
      setloading(false);
    } catch (err) {
      console.log(err);
      const errMsg =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      setError(errMsg);
      setloading(false);
    }
  };

  useEffect(() => {
    getAllBags();
  }, []);

  return (
    <div className="homepage">
      <h2 className="homepage__title">
        <strong>Our New Arrivals</strong>
      </h2>
      <hr />
      <div className="homepage__products">
        <div className="slider">
          <div className="slide-track">
            {loading ? (
              <h2>Loading...</h2>
            ) : error ? (
              <h2>{error}</h2>
            ) : (
              products.map((product) => (
                <div className="slide">
                  <Product
                    key={product._id}
                    name={product.name}
                    color={product.color}
                    material={product.material}
                    type={product.type}
                    occasion={product.occasion}
                    img={product.img}
                    stock={product.stock}
                    price={product.price}
                    tags={product.tags}
                    productId={product._id}
                  />
                </div>
              ))
            )}
          </div>

          <ShopPage />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

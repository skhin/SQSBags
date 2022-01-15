import React from "react";
import "./HomePage.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "../components/Product";

//Actions
import { getAllBags as listProducts } from "../redux/actions/productActions";

const HomePage = () => {
  const dispatch = useDispatch();

  // get the data info
  const getAllBags = useSelector((state) => state.getAllBags);

  // destructure the products. Before loading anything. it will check for error
  const { products, loading, error } = getAllBags;

  // every time the page loads, it lists the items
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homepage">
      <h2 className="homepage__title">
        <strong>Our New Arrivals</strong>
      </h2>
      <hr />
      <div className="homepage__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
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
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;

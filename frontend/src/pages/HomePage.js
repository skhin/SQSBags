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

  const getAllBags = useSelector((state) => state.getAllBags);
  const { products, loading, error } = getAllBags;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
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

import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./ProductList.css";
import ProductShop from "./ProductShop";

import { getAllBags as listProducts } from "../redux/actions/productActions";
import Filter from "./Filter";

const ProductList = () => {
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
    <div className="pList__container">
      <div className="pList__h2">
        <h2>SHOP BAGS</h2>
      </div>
      <Filter />
      <br />
      <br />
      <br />
      <div className="pList__allProducts">
        {loading ? (
          <h2>Loading Bags...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <ProductShop
              key={product._id}
              productId={product._id}
              name={product.name}
              color={product.color}
              material={product.material}
              type={product.type}
              occasion={product.occasion}
              img={product.img}
              stock={product.stock}
              price={product.price}
              tags={product.tags}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;

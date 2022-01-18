import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
// import { useSelector, useDispatch } from "react-redux";

import "./ProductList.css";
import ProductShop from "./ProductShop";

// import { getAllBags as listProducts } from "../redux/actions/productActions";
import Filter from "./Filter";

const ProductList = () => {
  // const dispatch = useDispatch();

  // // get the data info
  // const getAllBags = useSelector((state) => state.getAllBags);

  // // destructure the products. Before loading anything. it will check for error
  // const { products, loading, error } = getAllBags;

  // // every time the page loads, it lists the items
  // useEffect(() => {
  //   dispatch(listProducts());
  // }, [dispatch]);

  const [filterproducts, setFilterProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setloading] = useState(true);

  const [filters, setFilters] = useState({
    color: null,
    material: null,
    type: null,
  });
  const [Sort, setSort] = useState("newest");

  useEffect(() => {
    getAllBags();
  }, []);

  const getAllBags = async () => {
    try {
      const { data } = await axios.get("/api/bags");
      setFilterProducts(data);
      setloading(false);
    } catch (err) {
      const errMsg =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      setError(errMsg);
      setloading(false);
    }
  };
  // let filtered = products;
  useEffect(() => {
    getfilterProducts();
  }, [filters.color, filters.type, filters.material, Sort]);

  const getfilterProducts = () => {
    if (filters?.color) {
      let filtered = [];
      filtered = filterproducts.filter((item) => {
        return item.color === filters.color;
      });
      setFilterProducts(filtered);
    }

    if (filters?.material) {
      let filtered = [];
      filtered = filterproducts.filter((item) => {
        return item.material === filters.material.toLowerCase();
      });
      setFilterProducts(filtered);
    }

    if (filters?.type) {
      let filtered = [];
      filtered = filterproducts.filter((item) => {
        return item.type === filters.type.toLowerCase();
      });
      setFilterProducts(filtered);
    }

    if (Sort === "asc") {
      filterproducts.sort((item1, item2) => {
        return item1.price - item2.price;
      });
    }
    if (Sort === "desc") {
      filterproducts.sort((item1, item2) => {
        return item2.price - item1.price;
      });
    }
  };
  return (
    <div className="pList__container">
      <div className="pList__h2">
        <h2>SHOP BAGS</h2>
      </div>
      <Filter filters={filters} setFilters={setFilters} setSort={setSort} />
      <br />
      <br />
      <br />
      <h3>{filterproducts.length} Products Found</h3>
      <div className="pList__allProducts">
        {loading ? (
          <h2>Loading Bags...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          filterproducts.map((product) => (
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

import React from "react";
import ProductList from "../components/ProductList";

import "./ShopPage.css";

const ShopPage = () => {
  return (
    <div className="shop">
      <h2>
        <strong>
          READY TO GET YOUR <span>BAG-GING RIGHTS</span>
        </strong>
      </h2>
      <hr />
      <br />
      <ProductList />
    </div>
  );
};

export default ShopPage;

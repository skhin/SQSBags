import React from "react";
import "./ProductShop.css";
import { Link } from "react-router-dom";

const ProductShop = ({ img, name, price, type, productId }) => {
  return (
    <div className="product">
      <img src={img} alt={name} />
      <div className="product__info">
        <p className="info__name">{name}</p>
        <p className="info__price">${price}</p>
        <p className="info__type">Type: {type}</p>

        <Link to={`/bags/${productId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default ProductShop;

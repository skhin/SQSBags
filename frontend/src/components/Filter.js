import React from "react";
import "./ProductList.css";

const Filter = () => {
  return (
    <div className="filter__container">
      <div className="filter">
        <div className="filtertext">Filter Products:</div>
        <select>
          <option disabled selected>
            Color
          </option>
          <option>White</option>
          <option>Black</option>
          <option>Red</option>
          <option>Yellow</option>
          <option>Pink</option>
          <option>Brown</option>
          <option>Orange</option>
          <option>Multi</option>
          <option>Others</option>
        </select>

        <select>
          <option disabled selected>
            Material
          </option>
          <option>Leather</option>
          <option>Canvas</option>
          <option>Straw</option>
          <option>Suede</option>
          <option>Others</option>
        </select>

        <select>
          <option disabled selected>
            Type
          </option>
          <option>Handbag</option>
          <option>Briefcase</option>
          <option>Tote</option>
          <option>Clutch</option>
          <option>Wallet</option>
          <option>Others</option>
        </select>
      </div>

      <div className="filter">
        <div className="filtertext">Sort Products:</div>
        <select>
          <option selected>Newest</option>
          <option>Price (asc)</option>
          <option>Price (desc)</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;

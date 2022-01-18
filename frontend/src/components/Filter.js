import React, { useState } from "react";
// import { useLocation } from "react-router";
import "./ProductList.css";

const Filter = (props) => {
  // const location = useLocation();
  // const cat = location.pathname.split("/")[2];

  // const [filters, setFilters] = useState({});
  // const [sort, setSort] = useState("newest");

  let { filters, setFilters, setSort } = props;

  const handleFilters = (e) => {
    const value = e.target.value;
    console.log(value);
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <div className="filter__container">
      <div className="filter">
        <div className="filtertext">Filter Products:</div>
        <select name="color" onChange={handleFilters}>
          <option disabled>Color</option>
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

        <select name="material" onChange={handleFilters}>
          <option disabled>Material</option>
          <option>Leather</option>
          <option>Canvas</option>
          <option>Straw</option>
          <option>Suede</option>
          <option>Others</option>
        </select>

        <select name="type" onChange={handleFilters}>
          <option disabled>Type</option>
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
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="newest">Newest</option>
          <option value="asc">Price (asc)</option>
          <option value="desc">Price (desc)</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;

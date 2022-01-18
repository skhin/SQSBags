import React from "react";
import "./ProductPage.css";
import axios from "axios";
import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

// // Actions
// import { getProductDetails } from "../redux/actions/productActions";
// import { addToCart } from "../redux/actions/cartActions";

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

let cart = {
  cartItems: cartItemsInLocalStorage,
};

const ProductPage = ({ match, history }) => {
  // const [qty, setQty] = useState(1);
  // const dispatch = useDispatch();

  // const productDetails = useSelector((state) => state.getProductDetails);
  // const { loading, error, product } = productDetails;

  // useEffect(() => {
  //   if (product && match.params.id !== product._id) {
  //     dispatch(getProductDetails(match.params.id));
  //   }
  // }, [dispatch, match, product]);

  // const addToCartHandler = () => {
  //   dispatch(addToCart(product._id, qty));
  //   history.push(`/cart`);
  // };

  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);
  const [loading, setloading] = useState(true);

  const [qty, setQty] = useState(1);
  const { cartItems } = cart;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      getProductDetails(match.params.id);
    }
  }, [match, product]);

  const addToCartHandler = () => {
    addToCart(product._id, qty);
  };

  const addToCart = async (id, qty) => {
    const { data } = await axios.get(`/api/bags/${id}`);

    const item = {
      product: data._id,
      name: data.name,
      image: data.img,
      price: data.price,
      stock: data.stock,
      color: data.color,
      material: data.material,
      type: data.type,
      occasion: data.occasion,
      qty,
    };

    // check if items exist in the cart by mapping through
    const existItem = cart.cartItems.find((x) => x.product === item.product);

    if (existItem) {
      cart = {
        ...cart,
        cartItems: cartItems.map((x) =>
          x.product === existItem.product ? item : x
        ),
      };
    } else {
      cart = {
        // add in the new item into the array
        ...cart,
        cartItems: [...cartItems, item],
      };
    }
    localStorage.setItem("cart", JSON.stringify(cart.cartItems));

    history.push(`/cart`);
  };

  const getProductDetails = async (id) => {
    try {
      const { data } = await axios.get(`/api/bags/${id}`);
      setProduct(data);
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

  return (
    <div className="productpage">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productpage__left">
            <div className="left__image">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p>Price: ${product.price}</p>
            </div>
          </div>
          <div className="productpage__right">
            <div className="right__info">
              <p>
                Price:
                <span className="bold products">${product.price}</span>
              </p>
              <p>
                Type: <span className="bold products">{product.type}</span>
              </p>
              <p>
                Occasion:{" "}
                <span className="bold products">{product.occasion}</span>
              </p>
              <p>
                Material:{" "}
                <span className="bold products">{product.material}</span>
              </p>
              <p>
                Tags: <span className="bold products">{product.tags}</span>
              </p>
              <p>
                Colors Available:{" "}
                <span className="bold products">{product.color}</span>
              </p>
              <p>
                Status:
                <span>{product.stock > 0 ? "In Stock" : "Out of Stock"}</span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.stock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;

import React from "react";
import "./CartPage.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

// Components
import CartItem from "../components/CartItem";

// Actions
// import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CartPage = () => {
  // const dispatch = useDispatch();

  // const cart = useSelector((state) => state.cart);

  const cartItemsInLocalStorage = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  const [cart, setCart] = useState({ cartItems: cartItemsInLocalStorage });

  const { cartItems } = cart;
  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    // dispatch(addToCart(id, qty));
    addToCart(id, qty);
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
    const existItem = cartItems.find((x) => x.product === item.product);
    let cartData = {};
    if (existItem) {
      cartData = {
        ...cart,
        cartItems: cartItems.map((x) =>
          x.product === existItem.product ? item : x
        ),
      };
    } else {
      cartData = {
        // add in the new item into the array
        ...cart,
        cartItems: [...cartItems, item],
      };
    }
    localStorage.setItem("cart", JSON.stringify(cartData.cartItems));
    setCart(cartData);
  };

  const removeFromCartHandler = (id) => {
    removeFromCart(id);
    // dispatch(removeFromCart(id));
  };

  const removeFromCart = (id) => {
    const itemId = id;

    //update the local storage after the remove item
    let cartData = {
      ...cart,
      cartItems: cartItems.filter((x) => x.product !== itemId),
    };
    setCart(cartData);
    localStorage.setItem("cart", JSON.stringify(cartData.cartItems));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  const history = useHistory();
  const checkout = () => {
    const path = "/checkout";
    history.push(path);
  };

  return (
    <div className="cart-page">
      {" "}
      <div className="cartpage__left">
        <h2>Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <div>
            Your Cart Is Empty <Link to="/">Go Back</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.product}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeFromCartHandler}
            />
          ))
        )}
      </div>
      <div className="cartpage__right">
        <div className="cartpage__info">
          <p>Subtotal ({getCartCount()}) items</p>
          <p>${getCartSubTotal()}</p>
        </div>
        <div>
          <button onClick={checkout}>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

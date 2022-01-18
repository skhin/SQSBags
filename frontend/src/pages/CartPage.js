import React from "react";
import "./CartPage.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

// Components
import CartItem from "../components/CartItem";

// Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CartPage = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
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
          <button onClick = {checkout}>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

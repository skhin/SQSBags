import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/bags/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
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
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  //update the local storage after the remove item
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

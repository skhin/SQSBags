import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { cartReducer } from "./reducers/cartReducers";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./reducers/productReducers";

const reducer = combineReducers({
  cart: cartReducer,
  getAllBags: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
});

//creates an array that has all the middleware in it
// helps in making async request in actions
const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  // takes in state or enhancer in redux
  // applymiddleware adds in to the array of the middlewares
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

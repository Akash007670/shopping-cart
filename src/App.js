import axios from "axios";
import React, { useEffect, useReducer } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Products from "./components/Products";
import { cartReducer } from "./reducers/cartReducer";

const App = () => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });
  const fetchData = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="app-container">
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;

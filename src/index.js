import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import './index.css';
import { configureStore } from "./store";
import { Provider } from "react-redux";
const store = configureStore();
console.log("store", store.getState());
ReactDOM.render(<Provider store={store}>
 <App /> </Provider>,
  document.getElementById("root"));

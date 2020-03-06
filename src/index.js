/******************************************************************************
 * Basic React Setup file. You can use either of the two setup lines below.
 ******************************************************************************/
// var React = require("react");
// var ReactDom = require("react-dom");
import React from "react";
import ReactDom from "react-dom";
import App from "./App";
// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import reducers from "./reducers";

// Syntax: ReactDom.render(What to display, where to display it (what element));
// const store = createStore(reducers, []);
ReactDom.render(
  // <Provider store={store}>
  <App />,
  // </Provider>,
  document.getElementById("root")
);

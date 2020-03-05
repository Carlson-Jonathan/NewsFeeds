/******************************************************************************
 * Basic React Setup file. You can use either of the two setup lines below.
 ******************************************************************************/
// var React = require("react");
// var ReactDom = require("react-dom");
import React from "react";
import ReactDom from "react-dom";
import App from "./App";

// Syntax: ReactDom.render(What to display, where to display it (what element));
ReactDom.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
// import PropTypes from "prop-types";
// import { hot } from "react-hot-loader";
import "./scss/reset.scss";
import "./scss/main.scss";
import "./scss/loan.scss";
import "./scss/lease.scss";
import "./scss/dealer.scss";
import "@babel/polyfill";
import Credit from "./Credit";

ReactDOM.render(<Credit />, document.querySelector("#root"));

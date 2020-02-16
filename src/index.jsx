import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { hot } from "react-hot-loader";
import "./scss/main.scss";
import "./scss/reset.scss";
import "@babel/polyfill";
import Wrapper from "./wrapper";

ReactDOM.render(<Wrapper/>, document.querySelector("#root"));

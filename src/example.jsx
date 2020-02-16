import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { hot } from "react-hot-loader";
import "./scss/main.scss";
import img from "../public/china.png";

import "@babel/polyfill";

function PostUI({ className, title, author, description, urlToImage }) {
  return (
    <div className={className}>
      <img src={urlToImage} alt={title} />
      <div className="post-info-details">
        <div>{title}</div>
        <div>{author}</div>
        <div>{description}</div>
      </div>
    </div>
  );
}

PostUI.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  urlToImage: PropTypes.string,
};

PostUI.default = {
  title: "",
  author: "",
  description: "",
  urlToImage: "",
};

ReactDOM.render(<PostUI сlassName='hello' />, document.querySelector("#root"));

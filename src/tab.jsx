import React from "react";

function Tab(props) {
  const {id, className, text} = props;
return <button id={id} className={className}>{text}</button>;
}
export default Tab;

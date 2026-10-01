import React from "react";

const NameTag = (props) => (
  <div className="name-tag">
    <h2 className="title">HELLO</h2>
    <p className="subtitle">my name is</p>
    <h3 className="name">{props.name}</h3>
  </div>
);

export default NameTag;

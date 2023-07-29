import React from "react";
import "./GardientHeading.scss";

const GradientHeading = ({ heading, number, lineWidth }) => {
  return (
    <div className="head">
      <span className="green-line">{number}</span>
      <h4>{heading}</h4>
      <div className="line"></div>
    </div>
  );
};

export default GradientHeading;

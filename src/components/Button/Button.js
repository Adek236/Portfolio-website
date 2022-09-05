import React from "react";
import "./Button.css";

const Button = ({ title, bgColor }) => {
  return (
    <div className={
      bgColor === "secondary" ? "buttonOuter secondaryBorder" : "buttonOuter"
    }>
      <div
        className={
          bgColor === "secondary" ? "buttonInner secondaryBg" : "buttonInner"
        }
      >
        <div className="buttonTitle">{title}</div>
        <a role="button" aria-label={title} className="fill-container" href="/"> </a>
      </div>
    </div>
  );
};

export default Button;

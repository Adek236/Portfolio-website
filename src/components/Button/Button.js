import React from "react";
import "./Button.css";

const Button = ({ shortTitle, longTitle, children, link }) => {
  return (
    <div className="button">
      <div className="button__short-title">{shortTitle?shortTitle:""}{children}</div>
      <div className="button__long-title">{longTitle}</div>
      <a role="button" aria-label={longTitle} className="fill-container" href={link}>
        {" "}
      </a>
    </div>
  );
};

export default Button;

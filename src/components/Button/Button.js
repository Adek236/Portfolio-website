import React from "react";
import "./Button.css";
import { motion } from "framer-motion";

const Button = ({ data }) => {
  const {shortTitle, longTitle, link, icon} = data;
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="button"
    >
      
      <div className="button__short-title">
        {shortTitle ? shortTitle : ""}
        {data.icon}
      </div>
      <div className="button__long-title">{longTitle}</div>
      <a
        role="button"
        aria-label={longTitle}
        className="fill-container"
        href={link}
      >
        {" "}
      </a>
    </motion.div>
  );
};

export default Button;

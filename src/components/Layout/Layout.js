import React from "react";
import "./Layout.css";

const Layout = ({ children, isDarkMode }) => {
  return (
    <div
      className={`container ${
        isDarkMode
          ? "font-color-dark background-color-dark"
          : "font-color-light background-color-light"
      }`}
    >
      {children}
    </div>
  );
};

export default Layout;

import React from "react";
import "./Layout.css";

const Layout = ({ children }) => {
  return <div className="container font-color-light">{children}</div>;
};

export default Layout;

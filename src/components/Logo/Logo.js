import "./Logo.css";
// import { useRef } from "react";
// import { useInView } from "framer-motion";

const Logo = ({ data, headerIsInView }) => {
  // const ref = useRef(null);
  // const isInView = useInView(ref);
  return (
    <div
      // ref={ref}
      className="logo"
      style={{
        transform: headerIsInView ? "none" : "translateX(-200px)",
        transition: "all 0.5s",
      }}
    >
      <h3>{data.title}</h3>
      <p>{data.p}</p>
    </div>
  );
};

export default Logo;

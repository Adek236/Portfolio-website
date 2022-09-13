import React from "react";
import "./Modal.css";
import { motion } from "framer-motion";

const variants = {
  open: {
    // opacity: 0,
    clipPath: `circle(1000px at 140px 500px)`,
    transition: {
        duration: 0.4,
      },
  },
  closed: {
    // opacity: 1,
    clipPath: `circle(30px at 440px 40px)`,
    transition: {
      duration: 3,
    },
  },
};

const Modal = ({ isModalOpen }) => {
  return (
    <motion.div
      className="modal"
      variants={variants}
      initial="open"
      animate={isModalOpen ? "open": "closed"}
    >
      Modal
    </motion.div>
  );
};

export default Modal;

import React from "react";
import "./Modal.css";
import { motion } from "framer-motion";

const variants = {
  open: {
    // opacity: 0,
    height: '25rem',
    // clipPath: `circle(150% at 150% 50%)`,
    transition: {
        duration: 0.4,
      },
  },
  closed: {
    // opacity: 1,
    // clipPath: `circle(5% at 150% 50%)`,
    height: '10rem',
    transition: {
      duration: 0.4,
    },
  },
};

const Modal = ({ isModalOpen }) => {
  return (
    <motion.div
      className="modal"
      variants={variants}
      initial="closed"
      animate={isModalOpen ? "open": "closed"}
    >
      Modal
    </motion.div>
  );
};

export default Modal;

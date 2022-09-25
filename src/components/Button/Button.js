import { useEffect } from "react";
import "./Button.css";
import { motion, useAnimation } from "framer-motion";

const Button = ({ data, download, animation }) => {
  const { shortTitle, longTitle, link, icon } = data;
  const controls = useAnimation();

  useEffect(() => {
    if (animation?.headerIsInView) {
      controls.start("visible");
    }
    if (!animation?.headerIsInView) {
      controls.start("hidden");
    }
  });

  const variants = {
    slideDown: {
      hidden: { y: -200 },
      visible: {
        y: 0,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 25,
          duration: 0.5,
        },
      },
    },
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      initial={animation.isAnim ? "hidden" : "visible"}
      animate={controls}
      variants={variants[animation.name]}
      className="button"
    >
      <div className="button__short-title">
        {shortTitle ? shortTitle : ""}
        {icon ? icon : ""}
      </div>
      <div className="button__long-title">{longTitle}</div>
      {download ? (
        <a
          role="button"
          aria-label={longTitle}
          className="fill-container"
          href={link}
          download
        >
          {" "}
        </a>
      ) : (
        <a
          role="button"
          aria-label={longTitle}
          className="fill-container"
          href={link}
        >
          {" "}
        </a>
      )}
    </motion.div>
  );
};

export default Button;

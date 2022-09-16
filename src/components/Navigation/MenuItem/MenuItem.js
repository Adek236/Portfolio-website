import { motion } from "framer-motion";

const menuItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    closed: {
      y: 35,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

const MenuItem = ({data, toggleModal}) => {
  return (
    <motion.li
      className="navigation__menu__el"
      variants={menuItemVariants}
      onClick={() => toggleModal()}
    >
      <a href={data.link}>{data.name}</a>
    </motion.li>
  );
};

export default MenuItem;

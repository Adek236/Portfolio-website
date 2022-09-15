import "./Navigation.css";
import MenuIcon from "@mui/icons-material/Menu";
// import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LanguageIcon from "@mui/icons-material/Language";
import { motion, useCycle } from "framer-motion";

const variants = {
  open: {
    // opacity: 0,
    width: "10rem",
    height: "10rem",
    transition: {
      duration: 0.4,
    },
  },
  closed: {
    // opacity: 1,
    width: "6rem",
    height: "2.5rem",
    transition: {
      duration: 0.4,
      delay: 0.5,
    },
  },
};

const menuVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    pointerEvents: "auto"
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    pointerEvents: "none"
  },
};

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
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

const NavBar = () => {
  const [isModalOpen, toggleModal] = useCycle(false, true);
  return (
    <nav className="navigation" aria-label="Primary">
      <motion.div
        variants={variants}
        initial="closed"
        animate={isModalOpen ? "open" : "closed"}
        className="navigation__icons"
      >
        <div>
          <DarkModeIcon />
        </div>
        <div>
          <LanguageIcon />
        </div>
        <div
          role="button"
          aria-label="Open modal"
          tabIndex="0"
          onClick={() => toggleModal()}
          // onKeyDown={(e) => {
          //   if (e.key === "Enter") {
          //     toggleShowModal();
          //   }
          //   if (e.key === "Tab" && showModal && !e.shiftKey) {
          //     modalRef.current.focus();
          //   }
          // }}
        >
          <MenuIcon />
        </div>
      </motion.div>
      <motion.ul
        initial="closed"
        animate={isModalOpen ? "open" : "closed"}
        variants={menuVariants}
        className="navigation__menu"
      >
        {[1, 1, 1, 1].map((e, i) => {
          return <motion.li variants={menuItemVariants}><a href="/">elo</a></motion.li>;
        })}
      </motion.ul>
    </nav>
  );
};

export default NavBar;

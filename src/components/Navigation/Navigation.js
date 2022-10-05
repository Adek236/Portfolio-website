import { motion, useCycle } from "framer-motion";
import "./Navigation.css";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LanguageIcon from "@mui/icons-material/Language";
import MenuItem from "./MenuItem/MenuItem";

const variants = {
  open: {
    // opacity: 0,
    width: "10rem",
    height: "11rem",
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
    pointerEvents: "auto",
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    pointerEvents: "none",
  },
};

const NavBar = ({ data, toggleLang, lang, toggleDarkMode, isDarkMode }) => {
  const [isModalOpen, toggleModal] = useCycle(false, true);
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="navigation"
      aria-label="Primary"
    >
      <motion.div
        variants={variants}
        initial="closed"
        animate={isModalOpen ? "open" : "closed"}
        className="navigation__icons"
      >
        <motion.div
          whileHover={{ scale: 1.05, originX: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => toggleDarkMode()}
        >
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05, originX: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="navigation__icons__lang"
          onClick={() => toggleLang()}
        >
          <LanguageIcon />
          <div className="flex-center">{lang === "en" ? "PL" : "EN"}</div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05, originX: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          role="button"
          aria-label="Open modal"
          tabIndex="0"
          onClick={() => {
            toggleModal();
          }}
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
        </motion.div>
      </motion.div>
      <motion.ul
        initial="closed"
        animate={isModalOpen ? "open" : "closed"}
        variants={menuVariants}
        className="navigation__menu"
      >
        {Array.from(data.menu).map((el, i) => {
          return (
            <MenuItem key={`item-${i}`} data={el} toggleModal={toggleModal} />
          );
        })}
      </motion.ul>
    </motion.nav>
  );
};

export default NavBar;

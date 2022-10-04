import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

const Footer = () => {
  const footerVariants = {
    offscreen: {
      y: 200,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
        duration: 10,
        // delay: 0.3,
      },
    },
  };
  return (
    <motion.footer
      initial="offscreen"
      whileInView="onscreen"
      className="footer flex-center"
    >
      <motion.div variants={footerVariants} className="footer__nav">
        <div className="footer__nav__copyright">©Adrian Zawadzki 2022</div>
      </motion.div>
      <motion.div variants={footerVariants} className="footer__socials flex-center">
        <nav aria-label="Third">
          <ul>
            <li>
              <a role="button" aria-label="Facebook" href="/">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a role="button" aria-label="Linked in" href="/">
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a role="button" aria-label="Github" href="/">
                <GitHubIcon />
              </a>
            </li>
          </ul>
        </nav>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;

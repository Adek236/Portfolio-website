import "./Contact.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Contact = ({ data }) => {
  const cardVariantsL = {
    offscreen: {
      translateX: "500%",
      rotate: 10,
    },
    onscreen: {
      translateX: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
        duration: 5,
        delay: 0.9,
      },
    },
  };
  const cardVariantsR = {
    offscreen: {
      translateX: "-500%",
      rotate: -10,
    },
    onscreen: {
      translateX: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
        duration: 5,
        delay: 0.6,
      },
    },
  };
  const titleVariants = {
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
        delay: 0.5,
      },
    },
  };
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      id="contact"
      className="contact flex-center-col"
    >
      <motion.div variants={titleVariants} className="contact__desc flex-center-col">
        <p>{data.prevTitle}</p>
        <h2>{data.title}</h2>
      </motion.div>
      <div className="contact__btns flex-center-col">
        <motion.div
          variants={cardVariantsR}
          className="contact__btns__box flex-center-col"
        >
          <FontAwesomeIcon icon={faPaperPlane} />
          <h3>Email</h3>
          <p>{data.email}</p>
          <a href={`mailto:${data.email}`}>{data.p}</a>
        </motion.div>
        <motion.div
          variants={cardVariantsL}
          className="contact__btns__box flex-center-col"
        >
          <FontAwesomeIcon icon={faFacebookMessenger} />
          <h3>Messenger</h3>
          <p>{data.messenger}</p>
          <a href="https://m.me/adrian.zawadzki.12327">{data.p}</a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;

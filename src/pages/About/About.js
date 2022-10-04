import "./About.css";
import { motion } from "framer-motion";

const About = ({ data }) => {
  const aboutVariantsMainTitle = {
    offscreen: {
      x: 200,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        // stiffness: 400,
        // damping: 30,
        bounce: 0.2,
        duration: 1,
        delay: 0.2,
      },
    },
  };
  const aboutVariantsMainDesc = {
    offscreen: {
      y: 20,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
        // bounce: 0.4,
        duration: 1.5,
        delay: 0.4,
      },
    },
  };
  const aboutVariantsTitle = {
    offscreen: {
      x: 200,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        // stiffness: 400,
        // damping: 30,
        bounce: 0.2,
        duration: 1,
        delay: 0.7,
      },
    },
  };
  const aboutVariantsDesc = {
    offscreen: {
      y: 20,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
        // bounce: 0.4,
        duration: 1.5,
        delay: 1.2,
      },
    },
  };
  const aboutVariantsPhoto = {
    offscreen: {
      rotate: 0,
      // x: 200,
      // opacity: 0,
    },
    onscreen: {
      rotate: -20,
      // x: 0,
      // opacity: 1,
      transition: {
        type: "spring",
        // stiffness: 400,
        // damping: 30,
        bounce: 0.4,
        duration: 1,
        delay: 0.3,
      },
    },
  };
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      id="about"
      className="about"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="about__image"
      >
        <div className="about__image__box">
          <motion.div
            variants={aboutVariantsPhoto}
            className="about__image__box__photo"
          >
            {data.img}
          </motion.div>
        </div>
      </motion.div>
      <div className="about__wrapper">
        <div className="about__wrapper__desc">
          <motion.h2 variants={aboutVariantsMainTitle}>
            {data.mainTitle}
          </motion.h2>
          <motion.p variants={aboutVariantsMainDesc}>{data.desc}</motion.p>
        </div>
        <div className="about__wrapper__hobbies">
          <motion.h3 variants={aboutVariantsTitle}>{data.title}</motion.h3>
          <div className="about__wrapper__hobbies__elements">
            {Array.from(data.interests).map((el, i) => {
              return (
                <motion.div variants={aboutVariantsDesc} key={i}>
                  {el.name}
                  {el.icon}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Skills.css";
import SkillsItem from "./SkillsItem/SkillsItem";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const skillsVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Skills = ({ data }) => {
  const [idButton, setIdButton] = useState(0);
  const [isOn, setIsOn] = useState(0);
  const [isDomClear, setIsDomClear] = useState(true);

  useEffect(() => {
    setIsDomClear(true);
  }, [idButton]);


  const skillsVariantsx = {
    offscreen: {
      y: 200,
      // opacity: 0,
    },
    onscreen: {
      y: 0,
      // opacity: 1,
      transition: {
        type: "spring",
        // stiffness: 400,
        // damping: 30,
        bounce: 0.6,
        duration: 1.5,
        // delay: 0.3,
      },
    },
  };

  return (
    <motion.section
    initial="offscreen"
      whileInView="onscreen"
      variants={skillsVariantsx}
      viewport={{ once: true }}
    // initial={{ opacity: 0, x: 400 }}
    // animate={{ opacity: 1, x: 0 }}
    // transition={{ duration: 0.5 }} 

      id="skills"
      className="skills flex-center"
    >
      <h2 className="skills-top">{data.title}</h2>
      <div className="skills__wrapper">
        <div className="skills__wrapper__categories">
          {Array.from(data.buttons).map((el, i) => {
            return (
              <div key={`el-${i}`} className="skills__wrapper__categories__el">
                {el.name}
                <div
                  tabIndex="0"
                  className="skills__wrapper__categories__el__switch"
                  data-ison={isOn === i ? true : false}
                  onClick={() => {
                    if (isOn === i) return;
                    setIdButton(i);
                    setIsOn(i);
                    setIsDomClear(false);
                  }}
                >
                  <motion.div
                    layout
                    transition={spring}
                    className="flex-center"
                  >
                    {el.icon}
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
        <motion.ul
          initial="closed"
          animate={isDomClear ? "open" : "closed"}
          variants={skillsVariants}
          className="skills__wrapper__items"
        >
          <h2 className="skills-right">{data.title}</h2>
          {isDomClear &&
            Array.from(data.buttons[idButton].items).map((el, i) => {
              return <SkillsItem key={`item-${i}`} el={el} />;
            })}
        </motion.ul>
      </div>
    </motion.section>
  );
};

export default Skills;

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

  return (
    <motion.section
    // animate={{ height: "auto" }}
    // transition={{ duration: 2 }}
    id="skills" className="skills flex-center">
      <h2 className="skills-top">{data.title}</h2>
      <div className="skills__wrapper">
        <div className="skills__wrapper__categories">
          {Array.from(data.buttons).map((el, i) => {
            return (
              <div key={`el-${i}`} tabIndex="1" className="skills__wrapper__categories__el">
                {el.name}
                <div
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

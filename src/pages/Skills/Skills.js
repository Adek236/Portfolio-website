import { useState } from "react";
import "./Skills.css";

const Skills = ({ data }) => {
  const [idButton, setIdButton] = useState(0);
  return (
    <section className="skills flex-center">
      <h2 className="skills-top">{data.title}</h2>
      <div className="skills__wrapper">
        <div className="skills__wrapper__categories">
          {Array.from(data.buttons).map((el, i) => {
            return (
              <div
                tabIndex="1"
                className="skills__wrapper__categories__el"
                onClick={()=> setIdButton(i)}
              >
                {el.name}{el.icon}
              </div>
            );
          })}
        </div>
        <div className="skills__wrapper__items">
          <h2 className="skills-right">{data.title}</h2>
          {Array.from(data.buttons[idButton].items).map((el)=>{
            return <div className="skills__wrapper__items__el flex-center">{el.name}{el.rating}</div>
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

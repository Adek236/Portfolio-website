import "./About.css";

const About = ({ data }) => {
  return (
    <section id="about" className="about">
      <div className="about__image">
        <div className="about__image__box">
          <div className="about__image__box__photo">{data.img}</div>
        </div>
      </div>
      <div className="about__wrapper">
        <div className="about__wrapper__desc">
          <h2>{data.mainTitle}</h2>
          <p>{data.desc}</p>
        </div>
        <div className="about__wrapper__hobbies">
          <h3>{data.title}</h3>
          <div className="about__wrapper__hobbies__elements">
            {Array.from(data.interests).map((el, i) => {
              return (
                <div key={i}>
                  {el.name}
                  {el.icon}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

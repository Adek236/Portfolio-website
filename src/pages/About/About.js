import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about__image">
        <div className="about__image__box">image</div>
      </div>
      <div className="about__wrapper">
        <div className="about__wrapper__desc">
          <h2>About me</h2>
          <p>desc</p>
        </div>
        <div className="about__wrapper__hobbies">
          <h3>Interests</h3>
          <div className="about__wrapper__hobbies__elements">
            <div>games</div>
            <div>football</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

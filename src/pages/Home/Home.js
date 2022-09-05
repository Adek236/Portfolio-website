import "./Home.css";

const Home = ({ children }) => {
  return (
    <section className="home flex-center">
      <div className="home__desc flex-center">
        <div className="home__desc_prev-title">Hello, I'm</div>
        <h1>Adrian Zawadzki</h1>
        <p>I'm interesed in Front End Developer</p>
      </div>
      <div className="home__children flex-center">{children}</div>
    </section>
  );
};

export default Home;

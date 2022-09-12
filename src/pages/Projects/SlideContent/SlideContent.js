import "./SlideContent.css";

const SlideContent = ({ index }) => {
  return (
    <div className="slide-content">
      <div className="slide-content__demo flex-center">
        <div className="slide-content__demo__el">Demo</div>
      </div>
      <div className="slide-content__desc">
        <h2 className="slide-content__desc__title">Title</h2>
        <div className="slide-content__desc__language">
          <div>React</div>
          <div>Scss</div>
        </div>
        <p className="slide-content__desc__language">Desc</p>
      </div>
    </div>
  );
}; 

export default SlideContent;

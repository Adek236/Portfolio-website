import "./SlideContent.css";

const SlideContent = ({ data }) => {
  return (
    <div className="slide-content">
      <div className="slide-content__demo flex-center">
        <div className="slide-content__demo__el" style={{backgroundImage: `url(${data.img})`}}>
          {/* {data.img} */}
          </div>
      </div>
      <div className="slide-content__desc">
        <h2 className="slide-content__desc__title">{data.title}</h2>
        <div className="slide-content__desc__language">
          {Array.from(data.types).map((el, i) => {
            return <div key={i}>{el}</div>;
          })}
        </div>
        <p className="slide-content__desc__language">{data.desc}</p>
      </div>
    </div>
  );
};

export default SlideContent;

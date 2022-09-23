import "./SlideContent.css";
import Button from "../../../components/Button/Button";

const SlideContent = ({ data }) => {
  return (
    <div className="slide-content">
      <div className="slide-content__demo flex-center">
        <div className="slide-content__demo__el">
          {data.slideComponent}
          </div>
      </div>
      <div className="slide-content__desc">
        <h2 className="slide-content__desc__title">{data.title}</h2>
        <div className="slide-content__desc__language">
          {Array.from(data.types).map((el, i) => {
            return <div key={i}>{el}</div>;
          })}
        </div>
        <p className="slide-content__desc__p">{data.desc}</p>
        <div className="slide-content__desc__btns">
          <Button
            data={{
              shortTitle: data.buttons[0].shortTitle,
              longTitle: data.buttons[0].longTitle,
              link: data.liveLink,
            }}
            animation={{ isInView: true, isAnim: false}}
          />
          <Button
            data={{
              shortTitle: data.buttons[1].shortTitle,
              longTitle: data.buttons[1].longTitle,
              link: data.gitHubLink,
            }}
            animation={{ isInView: true, isAnim: false}}
          />
        </div>
      </div>
    </div>
  );
};

export default SlideContent;

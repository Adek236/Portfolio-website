import "./Projects.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Projects = () => {
  return (
    <div className="project">
      <div className="project__slider">
       <div className="project__slider__left-arrow flex-center"><KeyboardArrowLeftIcon/></div>
       <div className="project__slider__elements">
        <div>SLIDE</div>
       </div>
       <div className="project__slider__right-arrow flex-center"><KeyboardArrowRightIcon/></div>
      </div>
      <div className="project__menu">
        <div  className="project__menu__el">Avatar</div>
      </div>
    </div>
  )
};

export default Projects;
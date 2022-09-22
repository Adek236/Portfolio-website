import { motion } from "framer-motion";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const skillsItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    closed: {
      y: 25,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

const SkillsItem = ({ el }) => {
    let isHalfStar = (el.rating).toString().split(".")[1];
    return (
    <motion.li variants={skillsItemVariants} className="skills__wrapper__items__el flex-center">
      {el.name}
      {[...Array(Math.floor(el.rating))].map((_,i)=>{
          return <StarIcon key={`star-${i}`}/>
      })}
      {isHalfStar? <StarHalfIcon/>:""}
    </motion.li>
  );
};

export default SkillsItem;

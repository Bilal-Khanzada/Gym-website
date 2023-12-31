import React, { useContext } from 'react';
import {ScrollMenu , VisibilityContext} from "react-horizontal-scrolling-menu"
import { Box, Typography } from '@mui/material';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import BodyPart from '../BodyPart/BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <button onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </button>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <button onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </button>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  return(
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {console.log(bodyParts)}
    {data.map((item) => (
      <Box
      key={item.id || item}
      itemId={item.id || item}
      title={item.id || item}
      m="0 40px"
      >
        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
      </Box>
    ))}
  </ScrollMenu>
  )
}

export default HorizontalScrollbar;
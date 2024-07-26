import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';

import ExerciseCard from '../ExerciseCard';
import BodyPart from '../BodyPart';
import RightArrowIcon from '../../assets/icons/right-arrow.png';
import LeftArrowIcon from '../../assets/icons/left-arrow.png';

const HorizontalScrollBar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  const scrollContainerRef = useRef(null);
  const itemRefs = useRef({});

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  const scrollToItem = (item) => {
    const itemRef = itemRefs.current[item.id || item];
    if (itemRef && scrollContainerRef.current) {
      const containerLeft = scrollContainerRef.current.getBoundingClientRect().left;
      const itemLeft = itemRef.getBoundingClientRect().left;
      const offset = itemLeft - containerLeft - 20; // Adjust the offset as needed
      scrollContainerRef.current.scrollBy({
        left: offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        ref={scrollContainerRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          whiteSpace: 'nowrap',
          width: '100%',
        }}
      >
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            ref={(el) => (itemRefs.current[item.id || item] = el)}
            sx={{ display: 'inline-block', margin: '0 20px' }}
            onClick={() => scrollToItem(item)}
          >
            {bodyParts ? (
              <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        ))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Typography onClick={scrollLeft} className="left-arrow">
          <img src={LeftArrowIcon} alt="left-arrow" />
        </Typography>
        <Typography onClick={scrollRight} className="right-arrow">
          <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
      </Box>
    </Box>
  );
};

export default HorizontalScrollBar;

import React, { useState } from 'react';
import classes from './Recommend.module.css';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const Recommend = ({ reccThumb }) => {
  const [thumbs, setThumbs] = useState(reccThumb);

  return (
    <div>
      <FaThumbsUp
        className={classes.thumbsUp}
        size={35}
        color={thumbs === 'y' ? '#0000CD' : '#e4e5e9'}
        onClick={() => { setThumbs('y'); }}
      />
      <FaThumbsDown
        className={classes.thumbsDown}
        size={35}
        color={thumbs === 'n' ? '#DC143C' : '#e4e5e9'}
        onClick={() => { setThumbs('n'); }}
      />
    </div>
  );
};

export default Recommend;
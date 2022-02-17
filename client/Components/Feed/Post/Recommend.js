import React, { useState } from 'react';
import classes from './Recommend.module.css';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const Recommend = ({ clickThumb, reccThumb }) => {
  const [thumbs, setThumbs] = useState(reccThumb);

  return (
    <div>
      <FaThumbsUp
        className={classes.thumbsUp}
        size={35}
        color={thumbs === 'y' ? '#0000CD' : '#e4e5e9'}
        onClick={() => { setThumbs('y'); clickThumb && clickThumb('y');}}
      />
      <FaThumbsDown
        className={classes.thumbsDown}
        size={35}
        color={thumbs === 'n' ? '#DC143C' : '#e4e5e9'}
        onClick={() => { setThumbs('n'); clickThumb && clickThumb('n');}}
      />
    </div>
  );
};

export default Recommend;
import React, { useState } from 'react';
import classes from '../../../App.module.scss';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ clickRate, numRating }) => {
  const [rating, setRating] = useState(numRating);
  const [hover, setHover] = useState(null);


  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              onClick={() => {setRating(ratingValue); clickRate && clickRate(ratingValue);}}
            />
            <FaStar
              className={classes.star}
              size={25}
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
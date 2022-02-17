import React, { Fragment } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Card from '../../UI/Card/Card';
import StarRating from './Rating';
import Recommend from './Recommend';
import classes from './Post.module.css';

const Post = ({ id, name, imageUrl, rating, recipeUrl, thumb, comments, trash }) => {
  return (
    <Card className={classes.post}>
      <h2 className={classes.heading}>{name}
        <FaTrashAlt
          className={classes.trash}
          onClick={() => trash(id)}
          size={25}
          color='#0000FF' />
      </h2>
      <div className={classes.body}>
        <img
          className={classes.photo}
          src={imageUrl}
          alt={'Photo of ' + { name }}
        />
        <div className={classes.info}>
          <StarRating numRating={rating} />
          <Recommend reccThumb={thumb} />
          <a href={recipeUrl}>Recipe to {name}</a>
          <b>Category</b>
        </div>
      </div>
      <h3>Notes</h3>
      <a>{comments}</a>
    </Card>
  );
};

export default Post;
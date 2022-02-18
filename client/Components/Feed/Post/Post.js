import React, { Fragment } from 'react';
import { BsTrash } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import Card from '../../UI/Card/Card';
import StarRating from './Rating';
import Recommend from './Recommend';
import classes from '../../../App.module.scss';

const Post = ({ id, name, imageUrl, rating, recipeUrl, thumb, comments, trash, edit }) => {
  return (
    <Card className={classes.post}>
      <h2 className={classes.heading}>{name}
        <BsTrash
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
      <AiOutlineEdit
        className={classes.editBtn}
        size={25}
        color='#0000FF'
        onClick={() => edit(id)}
      />
    </Card>
  );
};

export default Post;
import React, { Fragment } from "react";
import Card from "../../UI/Card/Card";
import StarRating from "./Rating";
import Recommend from "./Recommend";
import classes from './Post.module.css';

const Post = ({name, imageUrl, rating, recipeUrl, thumb, comments}) => {
  return (
    <Card className={classes.post}>
      <h2 className={classes.heading}>{name}</h2>
      <div className={classes.body}>
        <img 
        className={classes.photo} 
        src={imageUrl} 
        alt={'Photo of '+{name}} 
        />
        <div className={classes.info}>
          <StarRating numRating={rating} />
          <Recommend reccThumb={thumb}/>
          <a href={recipeUrl}>Recipe to {name}</a>
          <b>Category</b>
        </div>
      </div>
      <h3>Notes</h3>
      <a>{comments}</a>
    </Card>
  )
}

export default Post;
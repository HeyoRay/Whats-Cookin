import React, { useState } from 'react';
import Modal from '../../UI/Modal.js/Modal';
import classes from './EditPost.module.css';
import StarRating from '../Post/Rating';
import Recommend from '../Post/Recommend';

const EditPost = (props) => {
  const [name, setName] = useState(props.name);
  const [rating, setRating] = useState(props.rating);
  const [thumb, setThumb] = useState(props.thumb);
  const [comments, setComments] = useState(props.comments);
  const [imageUrl, setImageUrl] = useState(props.imageUrl);
  const [recipeUrl, setRecipeUrl] = useState(props.recipeUrl);

  console.log(props);

  const submitHandler = () => {
    const body = {
      id : props.id,
      name,
      rating,
      thumb,
      comments,
      imageUrl,
      recipeUrl
    };

    fetch('/api', {
      method: 'PUT',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch(err => console.log('Edit Post fetch /api: ERROR: ', err));
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const rateChangeHandler = (stars) => {
    setRating(stars);
  };

  const thumbChangeHandler = (thumb) => {
    setThumb(thumb);
  };


  const urlRChangeHandler = (e) => {
    setRecipeUrl(e.target.value);
  };

  const urlPChangeHandler = (e) => {
    setImageUrl(e.target.value);
  };

  const commentChangeHandler = (e) => {
    setComments(e.target.value);
  };

  const refresh = () => {
    setTimeout(function () {
      window.location.reload();
    }, 500);
  };

  return (
    <Modal onHideCart={props.onHideEdit}>

      <section>
        <article className={classes.post}>
          <h3 className={classes.title}>Enter your Recipe details</h3>
          <div className={classes.heading}>
            <input name="name" placeholder="Name Of Recipe" value={name} onChange={nameChangeHandler} />
          </div>

          <div className={classes.body}>
            <div className={classes.photo}>
              <input className={classes.imgInput} name="imageUrl" placeholder="Image Url!" value={imageUrl} onChange={urlPChangeHandler} />
            </div>
            <div className={classes.info}>
              <div >
                <StarRating clickRate={rateChangeHandler} numRating={rating}/>
              </div>
              <div >
                <Recommend clickThumb={thumbChangeHandler} reccThumb={thumb}/>
              </div>
              <div >
                <input name="recipeUrl" placeholder="Recipe Url!" value={recipeUrl} onChange={urlRChangeHandler} />
              </div>
            </div>
          </div>

          <div>
            <input className={classes.comment} name="comments" placeholder="Add Comments!!" value={comments} onChange={commentChangeHandler} />
          </div>
        </article>
        <button type="button" className="btnMain" onClick={() => { submitHandler(); props.onHideEdit(); refresh(); }}>Save</button>
      </section>
    </Modal>
  );
};

export default EditPost;
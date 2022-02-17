import React, { useState } from 'react';
import Modal from '../UI/Modal.js/Modal';
import classes from './CreatePost.module.css';
import StarRating from '../Feed/Post/Rating';
import Recommend from '../Feed/Post/Recommend';

const CreatePost = (props) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [thumb, setThumb] = useState('');
  const [comments, setComments] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [recipeUrl, setRecipeUrl] = useState('');


  const submitHandler = () => {
    const body = {
      name,
      rating,
      thumb,
      comments,
      imageUrl,
      recipeUrl
    };

    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
      .then((data) => {
        console.log(data);
        //push new State to Feed.js
      })
      .catch(err => console.log('Create Post fetch /api: ERROR: ', err));
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
    <Modal onHideCart={props.onHideCart}>

      <section>
        <article className={classes.post}>
          <h3 className={classes.title}>Enter your Recipe details</h3>
          <div className={classes.heading}>
            <input name="name" placeholder="Name Of Recipe" value={name} onChange={nameChangeHandler} />
          </div>

          <div className={classes.body}>
            <div className={classes.photo}>
              <input className= {classes.imgInput} name="imageUrl" placeholder="Image Url!" value={imageUrl} onChange={urlPChangeHandler} />
            </div>
            <div className={classes.info}>
              <div >
                <StarRating clickRate={rateChangeHandler}/>
              </div>
              <div >
                <Recommend clickThumb={thumbChangeHandler}/>
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
        <button type="button" className="btnMain" onClick={() => {submitHandler(); props.onHideCart(); refresh();}}>Save</button>
      </section>
    </Modal>
  );
};

export default CreatePost;
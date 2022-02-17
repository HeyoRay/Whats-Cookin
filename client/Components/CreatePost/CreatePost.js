import React, { useState } from 'react';
import Modal from '../UI/Modal.js/Modal';

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
      .catch(err => console.log('CreateCharacter fetch /api/character: ERROR: ', err));
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const rateChangeHandler = (e) => {
    setRating(e.target.value);
  };

  const thumbChangeHandler = (e) => {
    setThumb(e.target.value);
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

  // const refresh = () => {
  //   setTimeout(function () {
  //     window.location.reload(1);
  //   }, 500);
  // };

  return (
    <Modal onHideCart={props.onHideCart}>
      <section>
        <article className="card createChar">
          <h3>Enter your Recipe details</h3>
          <div className="createCharFields">
            <label htmlFor="name">Name: </label>
            <input name="name" placeholder="Name Of Recipe" value={name} onChange={nameChangeHandler} />
          </div>
          <div className="createCharFields">
            <label htmlFor="name">Rating: </label>
            <input name="rating" placeholder="Rating!" value={rating} onChange={rateChangeHandler} />
          </div>
          <div className="createCharFields">
            <label htmlFor="name">Thumb: </label>
            <input name="thumb" placeholder="Thumb!" value={thumb} onChange={thumbChangeHandler} />
          </div>
          <div className="createCharFields">
            <label htmlFor="name">Image Url: </label>
            <input name="imageUrl" placeholder="Image Url!" value={imageUrl} onChange={urlPChangeHandler} />
          </div>
          <div className="createCharFields">
            <label htmlFor="name">Recipe Url: </label>
            <input name="recipeUrl" placeholder="Recipe Url!" value={recipeUrl} onChange={urlRChangeHandler} />
          </div>
          <div className="createCharFields">
            <label htmlFor="name">Comments: </label>
            <input name="comments" placeholder="Add Comments!!" value={comments} onChange={commentChangeHandler} />
          </div>
        </article>
        <button type="button" className="btnMain" onClick={() => {submitHandler(); props.onHideCart(); }}>Save</button>
      </section>
    </Modal>
  );
};

export default CreatePost;
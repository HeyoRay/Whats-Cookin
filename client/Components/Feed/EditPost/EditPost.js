import React, { useState } from 'react';
import Modal from '../../UI/Modal.js/Modal';

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

  const refresh = () => {
    setTimeout(function () {
      window.location.reload();
    }, 500);
  };

  return (
    <Modal onHideCart={props.onHideEdit}>
      <section>
        <article className="card createChar">
          <h3>Edit your Recipe details</h3>
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
        <button type="button" className="btnMain" onClick={() => { submitHandler(); props.onHideEdit(); refresh(); }}>Save</button>
      </section>
    </Modal>
  );
};

export default EditPost;
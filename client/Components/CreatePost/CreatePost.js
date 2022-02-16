import React, { useState } from 'react';

const CreatePost = () => {
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

  return (
    <div>
      <form onSubmit={submitHandler}>
        <article className="card createChar">
          <h3>Enter your Recipe details</h3>
          <div className="createCharFields">
            <label htmlFor="name">Name: </label>
            <input name="name" placeholder="Name Of Recipe" value={name} onChange={setName} />
          </div>
          <div className="createCharFields">
            <label htmlFor="name">Rating: </label>
            <input name="rating" placeholder="Rating!" value={rating} onChange={setRating} />
          </div>
          <div className="createCharFields">
            <label htmlFor="name">Thumb: </label>
            <input name="thumb" placeholder="Thumb!" value={thumb} onChange={setThumb} />
          </div>
          <div className="createCharFields">
            <label htmlFor="name">Image Url: </label>
            <input name="imageUrl" placeholder="Image Url!" value={imageUrl} onChange={setImageUrl} />
          </div>
          <div className="createCharFields">
            <label htmlFor="name">Recipe Url: </label>
            <input name="recipeUrl" placeholder="Recipe Url!" value={recipeUrl} onChange={setRecipeUrl} />
          </div>
          <div className="createCharFields">
            <label htmlFor="name">Comments: </label>
            <input name="comments" placeholder="Add Comments!!" value={comments} onChange={setComments} />
          </div>
        </article>
      </form>
    </div>
  );
};

export default CreatePost;
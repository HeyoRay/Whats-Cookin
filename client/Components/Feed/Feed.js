import React, { useState, useEffect } from 'react';
import Post from './Post/Post';
import CreatePost from '../CreatePost/CreatePost';


const Feed = () => {

  const [gotPosts, setGotPosts] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [cartShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true);
  };

  const hideCartHandler = () => {
    setCartShown(false);
  };


  const posts = [];

  useEffect(() => {
    setGotPosts(false);
    fetch('/api')
      .then((res) => res.json())
      .then((post) => {
        post.forEach((el, i) => {
          posts.push(<Post
            key={i}
            id={el._id}
            name={el.name}
            imageUrl={el.imageurl}
            rating={el.rating}
            thumb={el.thumb}
            recipeUrl={el.linkurl}
            comments={el.notes}
            trash={deletingPost}
          />);
        });
        setAllPosts(posts);
        setGotPosts(true);
      })
      .catch(err => console.log('Feed useEffect: get post: ERROR: ', err));
  }, [cartShown]);


  const deletingPost = (id) => {
    fetch('/api', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify({id: id})
    })
      .then(window.location.reload(1))
      .catch(err => console.log('Delete fetch /api/: ERROR: ', err));
  };



  return (
    <div>
      <button onClick={showCartHandler}>CREATE HERE!</button>
      {cartShown && <CreatePost onHideCart={hideCartHandler} />}
      {gotPosts ? allPosts : <h1>Loading data, please wait...</h1>}
    </div>
  );
};

export default Feed;
import React, { useState, useEffect } from 'react';
import Post from './Post/Post';
import CreatePost from '../CreatePost/CreatePost';
import EditPost from './EditPost/EditPost';

const Feed = () => {

  const [gotPosts, setGotPosts] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [cartShown, setCartShown] = useState(false);
  const [editShown, setEditShown] = useState(false);
  const [editObj, setEditObj] = useState({});

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
        postCache = post;
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
            edit={editPost}
          />);
        });
        setAllPosts(posts);
        setGotPosts(true);
      })
      .catch(err => console.log('Feed useEffect: get post: ERROR: ', err));
  }, []);


  const deletingPost = (id) => {
    fetch('/api', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify({ id: id })
    })
      .then(window.location.reload())
      .catch(err => console.log('Delete fetch /api/: ERROR: ', err));
  };

  let postCache;
  let postEdit;

  const editPost = (id) => {
    const obj = postCache.find((el) => el._id === id);
    setEditObj(obj);
    console.log(postEdit);
    setEditShown(true);
  };

  const hideEditHandler = () => {
    for (const key in postEdit) delete postEdit[key];
    setEditShown(false);
  };

  return (
    <div>
      <button onClick={showCartHandler}>CREATE HERE!</button>
      {cartShown && <CreatePost onHideCart={hideCartHandler} />}
      {editShown && <EditPost
        onHideEdit={hideEditHandler}
        obj={editObj}
        id={editObj._id}
        name={editObj.name}
        imageUrl={editObj.imageurl}
        rating={editObj.rating}
        thumb={editObj.thumb}
        recipeUrl={editObj.linkurl}
        comments={editObj.notes}
      />}
      {gotPosts ? allPosts : <h1>Loading data, please wait...</h1>}
    </div>
  );
};

export default Feed;
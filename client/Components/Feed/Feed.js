import React from 'react';
import Post from './Post/Post';
import { useState, useEffect } from 'react';

//these would come in as props from Feed.js after fetching from DB
const name = 'Bacon Tomato Soup';
const rating = 4;
const thumb = 'n';
const comments = 'JUST SOME NOTES THAT WOULD GO HERE TO TALK ABOUT HOW GREAT THIS RECIPE IS!';
const imageUrl = 'https://www.simplyrecipes.com/thmb/uioMJ2BUO0mThSdC6VVWvMNXY3Q=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2009__08__tomato-white-bean-bacon-soup-horiz-a-2000-ba364e751c664086a08d68f7e3077ce5.jpg';
const recipeUrl = 'https://www.w3schools.com/cssref/css_colors.asp';
//

const Feed = () => {

  const [gotPosts, setGotPosts] = useState(false);
  const [allPosts, setAllPosts] = useState([]);

  const posts = [];
  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((post) => {
        post.forEach((el, i) => {
          posts.push(<Post
            key={i}
            name={el.name}
            imageUrl={el.imageUrl}
            rating={el.rating}
            thumb={el.thumb}
            recipeUrl={el.linkUrl}
            comments={el.notes}
          />);
        });
        setAllPosts(posts);
        setGotPosts(true);
      })
      .catch(err => console.log('Feed useEffect: get post: ERROR: ', err));
  }, []);

  return (
    <div>
      <h1> header </h1>
      {gotPosts ? allPosts : <h1>Loading data, please wait...</h1>}
    </div>
  );
};

export default Feed;
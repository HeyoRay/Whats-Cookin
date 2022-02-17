const db = require('../models/whatsCookinModels.js');

const whatsCookinController = {};

whatsCookinController.getPosts = (req, res, next) => {
  // write code here
  const getAllPosts = `
    SELECT p.* 
    FROM post p 
  `;
  db.query(getAllPosts)
    .then(data => {
      res.locals.posts = data.rows;
      return next();
    })
    .catch((err) => next({
      log: `whatsCookinController.getPosts ERROR: ${err}`,
      message: { err: `whatsCookinController.getPosts ERROR: ${err}` }
    }));
};

whatsCookinController.createPost = (req, res, next) => {
  const { name, rating, thumb, comments, imageUrl, recipeUrl } = req.body;
  const createPost = `
    INSERT INTO post (name, rating, thumb, notes, imageurl, linkurl)
    VALUES ($1,$2,$3,$4,$5,$6)
  `;
  db.query(createPost, [name, rating, thumb, comments, imageUrl, recipeUrl])
    .then((data) => {
      next();
    })
    .catch((err) => next({
      log: `whatsCookinController.createPost ERROR: ${err}`,
      message: { err: `whatsCookinController.createPost ERROR: ${err}` }
    }));
};

whatsCookinController.deletePost = (req, res, next) => {
  const {id} = req.body;
  const deletePost = `
  DELETE FROM post
  WHERE _id = $1;
  `;
  db.query(deletePost, [id])
    .then((data) => {
      next();
    })
    .catch((err) => next({
      log: `whatsCookinController.createPost ERROR: ${err}`,
      message: { err: `whatsCookinController.createPost ERROR: ${err}` }
    }));
};


whatsCookinController.editPost = (req, res, next) => {
  const { id, name, rating, thumb, comments, imageUrl, recipeUrl } = req.body;
  const editPost = `
    UPDATE post 
    SET name = $2, rating = $3, thumb= $4, notes= $5, imageurl= $6, linkurl= $7
    WHERE _id = $1;
  `;
  db.query(editPost, [id, name, rating, thumb, comments, imageUrl, recipeUrl])
    .then((data) => {
      next();
    })
    .catch((err) => next({
      log: `whatsCookinController.createPost ERROR: ${err}`,
      message: { err: `whatsCookinController.createPost ERROR: ${err}` }
    }));
};
module.exports = whatsCookinController;
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
  console.log(req.body);
  const { name, gender, species_id, birth_year, eye_color } = req.body;
  const createPost = `
    INSERT INTO post (name, rating, thumb, notes, imageUrl, linkUrl)
    VALUES ($1,$2,$3,$4,$5, $6)
  `;
  db.query(createPost, [name, gender, species_id, birth_year, eye_color])
    .then((data) => {
      console.log(data, 'done');
      next();
    })
    .catch((err) => next({
      log: `whatsCookinController.createPost ERROR: ${err}`,
      message: { err: `whatsCookinController.createPost ERROR: ${err}` }
    }));
};

module.exports = whatsCookinController;
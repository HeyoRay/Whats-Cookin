const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const whatsCookinController = require('./controllers/whatsCookinController');

const PORT = 3000;
const app = express();

// Auto parse urlencoded and cookies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.get('/api', whatsCookinController.getPosts, (req, res) => res.status(200).json(res.locals.posts));

app.post('/api', whatsCookinController.createPost, (req, res) => res.status(200));

app.delete('/api', whatsCookinController.deletePost, (req, res) => res.status(200));
// 404 handler
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => { console.log(`Listening on port ${PORT}...🚀`); });

module.exports = app;
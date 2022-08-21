/** express js for server
 * Video: MERN 8-14-22 https://youtu.be/GTp3sggl2rg << start from this;
 * Learned: prefix confusion, template file solve, middleware,
 *> Note start:
 * const middleware = (req, res, next) = {
 *  console.log('paused');
 *  next(); //give u permission by call next();
 * }
 */
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const pageRoute = require('./routes/pageRoute');

// config dotenv
dotenv.config();
const PORT = process.env.SERVER_PORT || 5000;

// express init
const app = express();

// form needs
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// server listen
app.listen(PORT, () => {
  console.log(`express is running on port 5050`.rainbow);
});

// static folder
app.use(express.static('public'));

// router init
app.use(pageRoute);

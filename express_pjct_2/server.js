// init needy
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const pageRoute = require('../express_pjct_2/routes/pageRoute');

// env setup
dotenv.config();
const PORT = process.env.SERVER_PORT || 6000;

// express function
const app = express();

// form setup
// app.use(express.join());
// app.use(express.urlencoded({ extended: false }));

// create server
app.listen(PORT, (req, res) => {
  console.log(`Express is running on port ${PORT}`.america);
});

// static folder
app.use(express.static('public'));

// route
app.use(pageRoute);

//init express
const express = require('express');
const { showCurr, showAge } = require('../controllers/helperController');
const {
  showHomePage,
  showAboutPage,
  showTeamPage,
  showContactPage,
  showErrorPage,
  showServicePage,
  showElementPage,
} = require('../controllers/pageController');
const marry = require('../middlewares/checkMiddleware');

//init router
const router = express.Router();

/**
 * routes
 */
router.get('/', showHomePage);
router.get('/about', showAboutPage);
router.get('/team', showTeamPage);
router.get('/contact', showContactPage);
router.get('/service', showServicePage);
router.get('/element', showElementPage);
router.use(showErrorPage);

// form route
router.post('/age-check', marry, showAge);

// currency converter route
router.get('/curr/:type/:value', showCurr);

// export router
module.exports = router;

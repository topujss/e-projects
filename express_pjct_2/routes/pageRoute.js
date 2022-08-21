const express = require('express');
const {
  homePage,
  menuPage,
  locationPage,
  archivePage,
  resPage,
  staffPage,
  newsPage,
  galleryPage,
} = require('../controllers/pageController');

// route init
const router = express.Router();

/**
 * routes
 */
router.get('/', homePage);
router.get('/menu', menuPage);
router.get('/location', locationPage);
router.get('/archive', archivePage);
router.get('/res', resPage);
router.get('/staff', staffPage);
router.get('/news', newsPage);
router.get('/gallery', galleryPage);
// export router
module.exports = router;

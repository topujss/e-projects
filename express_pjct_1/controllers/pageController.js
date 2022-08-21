const path = require('path');
/**
 * home page controllers aka req res handle
 */
const showHomePage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
};

/**
 * about page controllers
 */
const showAboutPage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/about.html'));
};

/**
 * team page controllers
 */
const showTeamPage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/team.html'));
};

/**
 * contact page controllers
 */
const showContactPage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/contact.html'));
};

/**
 * service page controllers
 */
const showServicePage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/services.html'));
};

/**
 * elements page controllers
 */
const showElementPage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/elements.html'));
};

/**
 * 404 page
 */
const showErrorPage = (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../public/404.html'));
};

// export pages controllers
module.exports = {
  showHomePage,
  showAboutPage,
  showTeamPage,
  showContactPage,
  showServicePage,
  showElementPage,
  showErrorPage,
};

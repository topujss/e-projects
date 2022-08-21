// declare path first
const path = require('path');

// home page
const homePage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
};

// menu page
const menuPage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/menu.html'));
};

// location page
const locationPage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/location.html'));
};

// archive page
const archivePage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/archive.html'));
};

// reservation page
const resPage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/reservation.html'));
};

// staff page
const staffPage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/staff.html'))
}

// news page
const newsPage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/news.html'))
}

// gallery page
const galleryPage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/gallery.html'))
}

// export controllers
module.exports = {
  homePage,
  menuPage,
  locationPage,
  archivePage,
  resPage,
  staffPage, newsPage, galleryPage
};

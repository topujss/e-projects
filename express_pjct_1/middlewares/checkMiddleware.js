// marraiage check
const marry = (req, res, next) => {
  const { name, agecal } = req.body;
  if (agecal >= 60) {
    res.send(`<h1>Dada ${name}, apnar natir boyosh hoice ki?</h1>`);
  } else {
    next();
  }
};

module.exports = marry;

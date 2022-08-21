/**
 * show age controllers
 */
const showAge = (req, res) => {
  // get form data
  const { name, agecal } = req.body;

  if (agecal >= 21) {
    res.status(200).send(`hi ${name}, you can marry`);
  } else {
    // res.status(400).send(`Hi ${name}, you can't marry`);
  }
};

/**
 * show currency controllers
 * url > http://localhost:5050/curr/type/value
 */
const showCurr = (req, res) => {
  //GET dollar value
  const { value, type } = req.params;

  if (type == 'dollar') {
    res.status(200).send(`<h1>${value} ${type} = ${value * 96} BDT</h1>`);
  } else if (type == 'euro') {
    res.status(200).send(`<h1>${value} ${type} = ${value * 109} BDT</h1>`);
  } else {
    // res.status(200).json(req.params)
    res.status(200).send(`<h1>Didn't match, please check diffently</h1>`);
  }
};

// export helper controllers
module.exports = { showAge, showCurr };

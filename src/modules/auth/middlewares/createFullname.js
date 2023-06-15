const createFullname = async (req, res, next) => {
  if (req.body.firstName && req.body.lastName) {
    req.body.fullName = req.body.firstName + " " + req.body.lastName;
    next();
  } else {
    res.status(400).send("please enter your firstname and lastname");
  }
};

module.exports = createFullname;

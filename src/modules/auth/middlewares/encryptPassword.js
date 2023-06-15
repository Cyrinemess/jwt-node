var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const encryptPassword = async (req, res, next) => {
  if (req.body.password) {
    const salt = await bcrypt.genSalt(13);
    req.body.password = await bcrypt.hash(req.body.password, salt);
    next();
  } else {
    res.status(400).send("Please Enter Your Password");
  }
};
module.exports = encryptPassword;

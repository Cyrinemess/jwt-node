const userModel = require("../../../data/models/user.model");

const registerUser = async (req, res, next) => {
  try {
    const user = await userModel.create(req.body);
    return res.status(200).send({
      message: "User Registered Successfully",
      payload: user,
    });
  } catch (err) {
    res.status(500).send({ message: "Unable to create user" });
  }
};

module.exports = registerUser;

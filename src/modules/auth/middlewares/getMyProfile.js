const userModel = require("../../../data/models/user.model");

const getMyProfile = async (req, res, next) => {
  const userId = req.user.id;

  const userProfile = await userModel.findOne({ _id: userId });

  if (userProfile) {
    return res
      .status(200)
      .send({ message: "Success", payload: { profile: userProfile } });
  }
  return res.status(404).send({ message: "no user found" });
};

module.exports = getMyProfile;

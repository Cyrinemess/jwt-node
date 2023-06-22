const user = require("../../../data/models/user.model");
const bcrypt = require("bcryptjs");
const {
  createJwtAccessToken,
  createJwtRefreshToken,
} = require("../utils/token");

const loginUser = async (req, res, next) => {
  try {
    const foundUser = await user.findOne({
      email: req.body.email,
    });
    if (foundUser) {
      const isPasswordCorrect = await bcrypt.compare(
        req.body.password,
        foundUser?.password
      );
      console.log(createJwtAccessToken);
      if (isPasswordCorrect) {
        delete foundUser._doc.password;

        const AccessToken = await createJwtAccessToken(foundUser);
        const RefreshToken = await createJwtRefreshToken(foundUser);
        res.cookie("rtk", RefreshToken);

        //console.log(AccessToken);
        return res.status(200).send({
          message: "User Logged In Successfully",
          payload: { user: foundUser, AccessToken: AccessToken },
        });
      } else {
        return res.status(402).send({
          message: "Password Incorrect",
        });
      }
    } else {
      return res.status(401).send({
        message: "Please Enter Correct Credentials",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Server Error" });
  }
};

module.exports = loginUser;

const jsonwebtoken = require("jsonwebtoken");
const { JWT_CONFIG } = require("../../../../config");
const userModel = require("../../../data/models/user.model");
const {
  createJwtAccessToken,
  createJwtRefreshToken,
} = require("../utils/token");

const refreshUserTokens = async (req, res, next) => {
  try {
    if (!req.cookies?.rtk) {
      throw new Error("No Refresh Token Received");
    }
    const refreshTokenPayload = jsonwebtoken.verify(
      req.cookies.rtk,
      JWT_CONFIG.publicKey
    );
    const userId = refreshTokenPayload.sub.id;
    const userFound = await userModel.findById(userId).select(["-password"]);
    const userProfile = userFound._doc;
    const accessToken = createJwtAccessToken(userProfile);
    const refreshToken = createJwtRefreshToken(userProfile);
    console.log(accessToken);
    res.cookie("rtk", refreshToken);
    res.status(200).send({
      message: "Success",
      payload: {
        profile: userProfile,
        accessToken: accessToken,
      },
    });
  } catch (err) {
    console.log("error:", err);
    res.status(403).send({ message: "Not Authorized" });
  }
};

module.exports = { refreshUserTokens };

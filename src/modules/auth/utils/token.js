const jwt = require("jsonwebtoken");
const { JWT_CONFIG } = require("../../../../config");

const createJwtToken = async (user) => {
  var token = await jwt.sign(
    {
      sub: { id: user._id, name: user.fullName },
      iat: Date.now(),
    },
    JWT_CONFIG.privateKey,
    { algorithm: "RS256" }
  );
  return token;
};

module.exports = createJwtToken;

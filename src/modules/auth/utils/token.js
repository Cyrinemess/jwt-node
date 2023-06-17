const jwt = require("jsonwebtoken");
const { JWT_CONFIG } = require("../../../../config");

const createJwtToken = async (user) => {
  var token = await jwt.sign(
    {
      sub: { id: user._id, name: user.fullName },
      iat: Math.floor(Date.now() / 1000),
    },
    JWT_CONFIG.privateKey,
    { algorithm: "RS256", expiresIn: JWT_CONFIG.accessTokenExperationPeriod }
  );
  return token;
};

module.exports = createJwtToken;

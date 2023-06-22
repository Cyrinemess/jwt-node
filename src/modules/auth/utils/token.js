const jwt = require("jsonwebtoken");
const { JWT_CONFIG } = require("../../../../config");

const createJwtToken = (user, expirationPeriod) => {
  var token = jwt.sign(
    {
      sub: { id: user._id, name: user.fullName },
      iat: Math.floor(Date.now() / 1000),
    },
    JWT_CONFIG.privateKey,
    { algorithm: "RS256", expiresIn: expirationPeriod }
  );
  return token;
};

const createJwtAccessToken = (userPayload) =>
  createJwtToken(userPayload, JWT_CONFIG.accessTokenExpirationPeriod);

const createJwtRefreshToken = (userPayload) =>
  createJwtToken(userPayload, JWT_CONFIG.refreshTokenExpirationPeriod);

module.exports = { createJwtAccessToken, createJwtRefreshToken };

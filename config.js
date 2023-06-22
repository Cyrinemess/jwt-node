require("dotenv/config");

const jwtConfig = {
  privateKey: process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
  publicKey: process.env.PUBLIC_KEY.replace(/\\n/g, "\n"),
  accessTokenExpirationPeriod: process.env.JWT_ACCESS_EXPIRATION_PERIOD,
  refreshTokenExpirationPeriod: process.env.JWT_REFRESH_EXPIRATION_PERIOD,
};
const REFRESH_COOKIE_NAME = "rtk";
const serverConfig = {
  port: process.env.PORT,
};

const databaseConfig = {
  url: process.env.DATABASE_URL,
  dbname: process.env.DATABASE_NAME,
};

module.exports = {
  SERVER_CONFIG: serverConfig,
  DATABASE_CONFIG: databaseConfig,
  JWT_CONFIG: jwtConfig,
};

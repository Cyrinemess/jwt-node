const express = require("express");
const createFullname = require("../middlewares/createFullname");
const encryptPassword = require("../middlewares/encryptPassword");
const registerUser = require("../controllers/registerUser");
const login = require("../controllers/login");
const authMiddleware = require("../middlewares/authMiddleware");
const getMyProfile = require("../middlewares/getMyProfile");
const { refreshUserTokens } = require("../controllers/refreshUserToken");
const { validate } = require("../../../globalMiddlewares/validationMiddleware");
const registerValidator = require("../validators/registerValidator");

const authRouter = express.Router();

authRouter.post(
  "/register",
  validate(registerValidator),
  createFullname,
  encryptPassword,
  registerUser
);
authRouter.post("/login", login);
authRouter.get("/profile/me", authMiddleware, getMyProfile);
authRouter.get("/refresh", refreshUserTokens);

module.exports = authRouter;

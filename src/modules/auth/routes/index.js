const express = require("express");
const createFullname = require("../middlewares/createFullname");
const encryptPassword = require("../middlewares/encryptPassword");
const registerUser = require("../controllers/registerUser");
const login = require("../controllers/login");
const authMiddleware = require("../middlewares/authMiddleware");
const getMyProfile = require("../middlewares/getMyProfile");

const authRouter = express.Router();

authRouter.post("/register", createFullname, encryptPassword, registerUser);
authRouter.post("/login", login);
authRouter.get("/profile/me", authMiddleware, getMyProfile);

module.exports = authRouter;

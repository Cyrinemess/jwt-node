const express = require("express");
const createFullname = require("../middlewares/createFullname");
const encryptPassword = require("../middlewares/encryptPassword");
const registerUser = require("../controllers/registerUser");
const login = require("../controllers/login");
const decryptToken = require("../controllers/decrypt");

const authRouter = express.Router();

authRouter.post("/register", createFullname, encryptPassword, registerUser);
authRouter.post("/login", login);
authRouter.get("/decrypt", decryptToken);

module.exports = authRouter;

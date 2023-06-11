const express = require("express")
const createFullname = require("../middlewares/createFullname")
const registerUser = require("../controllers/registerUser")
const authRouter = express.Router()

authRouter.post('/register', createFullname, registerUser)

module.exports = authRouter
const express = require("express")
const authRouter = express.Router()
const authController = require("../controllers/auth.controller")

authRouter.post("/register", authController.registerHandle)

authRouter.post("/login", authController.loginHanlde)


module.exports = authRouter

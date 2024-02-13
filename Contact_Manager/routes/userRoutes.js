const express = require('express')
const router = express.Router()

const validate = require('../MiddleWare/tokenValidator')
const {registerUser, loginUser, viewProfile} = require('../controller/userController')

router.post("/register", registerUser)

router.post("/login", loginUser)

router.get("/profile", validate , viewProfile)

module.exports = router
const express = require('express')
const router = express.Router()

const {registerUser, loginUser, viewProfile} = require('../controller/userController')

router.post("/register", registerUser)

router.post("/login", loginUser)

router.get("/profile", viewProfile)

module.exports = router
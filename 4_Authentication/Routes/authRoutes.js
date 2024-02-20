const express = require('express')
const router = express.Router()

const {login, dashBoard, register} = require('../controller/authCont')

router.post('/login', login)
router.get('/dashboard', dashBoard)
router.post('/register', register)

module.exports = router
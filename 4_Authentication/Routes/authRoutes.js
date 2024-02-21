const express = require('express')
const router = express.Router()
const validate = require('../MiddleWare/validation')

const {login, dashBoard, register} = require('../controller/authCont')

router.post('/login', login)
router.get('/dashboard', validate, dashBoard)
router.post('/register', register)

module.exports = router
const express = require('express')
const router = express.Router()

const {login, dashBoard} = require('../controller/authCont')

router.post('/login', login)
router.get('/dashboard', dashBoard)

module.exports = router
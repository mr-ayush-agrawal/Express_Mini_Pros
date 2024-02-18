const express = require('express');
const router = express.Router();
const {getAllPro, getAllProStaic} = require('../Contollers/productController')

// This shall be using .../products/
router.route('/').get(getAllPro)
router.route('/static').get(getAllProStaic)

module.exports = router
const express = require('express')
const router = express.Router()
const {getContact,createContact, getContacts, updateContact, delContact} = require('../controller/contactController');
const validate = require('../MiddleWare/tokenValidator');

router.use(validate)

router.route('/').get(getContacts).post(createContact);
router.route('/:id').get(getContact).put(updateContact).delete(delContact);
module.exports = router;
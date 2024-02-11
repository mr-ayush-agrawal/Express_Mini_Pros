// When we create some api methods we need to provide some labels to them

const asyncHandler = require('express-async-handler');

// @desc GET all contacts
// @route GET /api/contacts
// @access public
const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({ status: 200, msg: "Get all the contats" })
})

// @desc Create New contacts
// @route POST /api/contacts
// @access public
const createContact = asyncHandler(async(req, res) => {
    console.log(req.body)
    const {name, phone} = req.body;
    if(!name || !phone){
        res.status(400);
        throw new Error('Name and Phone number are mendatory');
    }
    res.status(201).json({ status: 201, msg: "Create new contats" })
})

// @desc GET contact via id
// @route GET /api/contacts/:id
// @access public
const getContact = asyncHandler(async(req, res) => {
    res.status(200).json({ status: 200, msg: `getting contat ${req.params.id} ` })
})

// @desc Update contacts
// @route PUT /api/contacts
// @access public
const updateContact = asyncHandler(async(req, res) => {
    res.status(200).json({ status: 200, msg: `update contat ${req.params.id} ` })
})

// @desc Update contacts
// @route PUT /api/contacts
// @access public
const delContact = asyncHandler(async(req, res) => {
    res.status(200).json({ status: 200, msg: `Delete contat ${req.params.id} ` })
})



module.exports = { getContacts, createContact, getContact, updateContact, delContact }
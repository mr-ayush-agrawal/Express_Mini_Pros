// When we create some api methods we need to provide some labels to them

const asyncHandler = require('express-async-handler');
const Contact = require('../Models/contactModel')

// @desc GET all contacts
// @route GET /api/contacts
// @access public
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts)
})

// @desc Create New contacts
// @route POST /api/contacts
// @access public
const createContact = asyncHandler(async(req, res) => {
    console.log(req.body)
    const {name, phone, email} = req.body;
    if(!name || !phone){
        res.status(400);
        throw new Error('Name and Phone number are mendatory');
    }

    const contact = await Contact.create({
        name,
        phone,
        email
    })

    res.status(200).json(contact)
})




// @desc GET contact via id
// @route GET /api/contacts/:id
// @access public
const getContact = asyncHandler(async(req, res) => {
    const contact =await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error('Contact Not found')
    }
    res.status(200).json(contact)
})




// @desc Update contacts
// @route PUT /api/contacts
// @access public
const updateContact = asyncHandler(async(req, res) => {
    const contact =await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error('Contact Not found')
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )

    res.status(200).json(updatedContact)
})



// @desc Update contacts
// @route PUT /api/contacts
// @access public
const delContact = asyncHandler(async(req, res) => {
    const contact =await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error('Contact Not found')
    }
    console.log(contact);

    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json(contact)   
})



module.exports = { getContacts, createContact, getContact, updateContact, delContact }
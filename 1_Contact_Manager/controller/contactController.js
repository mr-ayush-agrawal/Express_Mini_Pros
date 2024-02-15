// When we create some api methods we need to provide some labels to them

const asyncHandler = require('express-async-handler');
const Contact = require('../Models/contactModel')

// @desc GET all contacts
// @route GET /api/contacts
// @access private
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({ user_id: req.user.id });
    res.status(200).json(contacts)
})

// @desc Create New contacts
// @route POST /api/contacts
// @access private
const createContact = asyncHandler(async (req, res) => {
    console.log(req.body)
    const { name, phone, email } = req.body;
    if (!name || !phone) {
        res.status(400);
        throw new Error('Name and Phone number are mendatory');
    }

    const contact = await Contact.create({
        name,
        phone,
        email,
        user_id : req.user.id
    })

    res.status(200).json(contact)
})




// @desc GET contact via id
// @route GET /api/contacts/:id
// @access private
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error('Contact Not found')
    }
    res.status(200).json(contact)
})




// @desc Update contacts
// @route PUT /api/contacts
// @access private
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error('Contact Not found')
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(403)
        throw new Error("User don't have permision to update other user contact")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )

    res.status(200).json(updatedContact)
})



// @desc Update contacts
// @route PUT /api/contacts
// @access private
const delContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error('Contact Not found')
    }
    
    if(contact.user_id.toString() !== req.user.id){
        res.status(403)
        throw new Error("User don't have permision to delete other user contact")
    }

    await Contact.deleteOne({id: req.params.id});
    res.status(200).json(contact)
})



module.exports = { getContacts, createContact, getContact, updateContact, delContact }
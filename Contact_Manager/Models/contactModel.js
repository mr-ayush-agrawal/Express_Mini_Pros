const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please Add the contact name']
    },
    phone:{
        type: String,
        required: [true, 'Please Add the Phone Nubmer']
    },
    email: {
        type: String,
        required: [false, 'Please Add the email Address']
    }
})

module.exports = mongoose.model('Contact', contactSchema);
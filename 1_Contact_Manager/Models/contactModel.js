const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    user_id :{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
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
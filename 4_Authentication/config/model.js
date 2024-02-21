const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    user : {
        type : String,
        required: true
    },
    password: {
        type: String,
        required : true,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)
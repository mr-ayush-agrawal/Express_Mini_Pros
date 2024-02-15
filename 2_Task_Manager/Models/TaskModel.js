const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required : [true, "Enter the Task"],
        trim: true,
        maxlength: [24, "Title can't be more than "]
    },
    isCompleted : {
        type: Boolean,
        required : false,
        default: false
    }
})

module.exports = mongoose.model('Task', taskSchema);
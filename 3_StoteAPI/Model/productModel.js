const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'product must have a name'],
    },
    price: {
        type: Number,
        required: [true, 'product must have a price'],
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.2
    }, 
    company: {
        type: String,
        enum: {
            values: ['Apple', 'Realme', 'Samsung', 'OnePlus'],
            message: '{VALUE} is not supported'
        }
        // enum: ['apple', 'Realme', 'Samsumg', 'OnePlus']
    }
}, {
    timestamps : true
})

module.exports = mongoose.model('Product', productSchema)
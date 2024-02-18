require('dotenv').config()

const connectDB = require('./config/dbConnection')
const Product = require('./Model/productModel')

// .json contains all product we want to fill
const jsonPros = require('./product.json')

const start = async() => {
    try{
        connectDB();
        await Product.deleteMany()
        await Product.create(jsonPros)
        console.log("SUCCESS!!!")
        process.exit(0)
    }
    catch(err){
        console.log(err)
        process.exit(1)
    }
}

start()
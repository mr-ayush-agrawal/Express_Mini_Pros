require('dotenv').config();
require('express-async-errors')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

const errorHandler = require('./MiddleWare/errorHandler')
const notFound = require('./MiddleWare/404_Notfound')
const connectDB = require('./config/dbConnection')
const productRouter = require('./Routes/productRoute')


// using the middle wares
app.use(express.json())
app.use(errorHandler)


app.use('/products', productRouter);

app.get('/', (req, res)=> res.send('<h1>Store API</h1><a href="/products">Products</a>'))
app.use(notFound)



const start = async() => {
    try{
        connectDB();
        app.listen(PORT, ()=> console.log(`Listning to PORT : ${PORT}`))
    }
    catch(err){
        console.log(err)
    }
}

start() 
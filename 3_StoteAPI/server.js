// require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5500;

const errorHandler = require('./MiddleWare/errorHandler')
const notFound = require('./MiddleWare/404_Notfound')

// using the middle wares
app.use(express.json())
app.use(errorHandler)

// app.get('/', (req, res)=> res.send('Chsdgs  alu h'))
app.get('/', (req, res)=> res.send('<h1>Store API</h1><a href="/products">Products</a>'))
app.use(notFound)

const start = async() => {
    try{
        app.listen(PORT, ()=> console.log(`Listning to PORT : ${PORT}`))
    }
    catch(err){
        console.log(err)
    }
}

start()
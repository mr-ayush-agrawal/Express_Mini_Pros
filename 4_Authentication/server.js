require('dotenv').config()
require('express-async-errors')
const express = require('express')
const errorHandler = require('./MiddleWare/errorHandler')
const DBconnection = require('./config/connectDB')


const PORT = process.env.PORT || 5000

const app = express()

app.use(express.static('./public'))
app.use(express.json())

app.use(errorHandler)

async function start() {
    try {
        DBconnection();
        app.listen(PORT, () => console.log(`Listning to PORT : ${PORT}`))
    }
    catch (err) {
        console.log(err)
    }
}

start()
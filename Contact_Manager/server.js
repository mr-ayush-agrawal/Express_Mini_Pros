const express = require('express')
const dotenv = require('dotenv').config()

// Importing self made files
const errorHandler = require('./MiddleWare/errorHandler')

const app = express()
const port = process.env.PORT || 5000;
app.use(express.json())
app.use('/api/contacts', require('./routes/contactRoutes'))
app.use(errorHandler)


app.listen(port, ()=> console.log("Listing to port", port))
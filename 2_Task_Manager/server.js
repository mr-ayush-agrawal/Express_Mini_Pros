const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const PORT = process.env.PORT

const router = require('./routes/tasksRoute')

app.use(express.json())
app.use('/', router )



app.listen(PORT, ()=>console.log(`listning to port : ${PORT}`))
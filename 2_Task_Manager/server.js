const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const PORT = process.env.PORT

const DBconnection = require('./config/dbConnetion')

const router = require('./routes/tasksRoute')

DBconnection()
app.use(express.json())
app.use(express.static('./public'))
app.use('/tasks', router )



app.listen(PORT, ()=>console.log(`listning to port : ${PORT}`))
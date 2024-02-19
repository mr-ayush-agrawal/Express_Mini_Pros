require('dotenv')
const express = require('express')

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.static('./public'))

async function start () {
    app.listen(PORT , ()=> console.log(`Listning to port : ${PORT}`))
}

start()
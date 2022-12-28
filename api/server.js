const express = require("express")

const server = express()

server.use(express.json())    //allows express to parse JSON

// DO YOUR MAGIC

server.use('*', (request, response) => {
     response.send("API is running")
})

module.exports = server

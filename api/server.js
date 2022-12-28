const express = require("express")
const carsRouter = require('./cars/cars-router')

const server = express()

server.use(express.json())    //allows express to parse JSON
server.use('/api/cars', carsRouter)


server.use('*', (request, response) => {
     response.send("API is running")
})

module.exports = server

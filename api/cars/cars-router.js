const express = require('express');
const CARS = require('./cars-model');
const { } = require('./cars-middleware');

const router = express.Router();


router.get('/', async (request, response, next) => {
     try {
          const cars = await CARS.getAll()
          response.json(cars)
     }
     catch (error) {
          next(error)
     }
})
router.get('/:id', (request, response, next) => {
     console.log('get specific car endpoint')
})
router.post('/', (request, response, next) => {
     console.log('post endpoint')
})
// router.put('/', (request, response, next) => {
//      console.log('update endpoint')
// })
// router.delete('/:id', (request, response, next) => {
//      console.log('delete endpoint')
// })

// Error Handling MiddleWare
router.use((error, request, response, next) => {
     response.status(error.status || 500).json({
          message: error.message,
          stack: error.stack
     })
})


module.exports = router
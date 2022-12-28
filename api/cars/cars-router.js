const express = require('express');
const CARS = require('./cars-model');
const { checkCarId, checkCarPayload, checkVinNumberUnique, checkVinNumberValid } = require('./cars-middleware');

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
router.get('/:id', checkCarId, async (request, response, next) => {
     try {
          const car = await CARS.getById(request.params.id)
          response.json(car)
     }
     catch (error) {
          next(error)
     }
})
router.post('/', checkCarPayload, checkVinNumberUnique, checkVinNumberValid, async (request, response, next) => {
     try {
          const car = await CARS.create(request.body)
          response.status(200).json(car)
     }
     catch (error) {
          next(error)
     }
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
const db = require('../../data/db-config');
exports.checkCarId = async (request, response, next) => {
     const carId = await db('cars').where('id', request.params.id).first()
     if (!carId) {
          next({ status: 404, message: `car with id ${request.params.id} is not found` })
     }
     else {
          next()
     }
}

exports.checkCarPayload = (request, response, next) => {
     // DO YOUR MAGIC
}

exports.checkVinNumberValid = (request, response, next) => {
     // DO YOUR MAGIC
}

exports.checkVinNumberUnique = (request, response, next) => {
     // DO YOUR MAGIC
}

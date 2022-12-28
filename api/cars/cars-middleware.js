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
     const { vin, make, model, mileage } = request.body
     if (!vin) { return next({ status: 400, message: "vin is missing" }) }
     else if (!make) { return next({ status: 400, message: "make is missing" }) }
     else if (!model) { return next({ status: 400, message: "model is missing" }) }
     else if (!mileage) { return next({ status: 400, message: "mileage is missing" }) }
     else { next() }
}

exports.checkVinNumberValid = (request, response, next) => {
     // DO YOUR MAGIC
}

exports.checkVinNumberUnique = (request, response, next) => {
     // DO YOUR MAGIC
}

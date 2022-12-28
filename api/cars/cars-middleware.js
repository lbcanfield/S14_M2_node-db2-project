const db = require('../../data/db-config');
const vinNumber = require('vin-validator');
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
     const { vin } = request.body
     if (vinNumber.validate(vin)) { next() }
     else { return next({ status: 400, message: `vin ${vin} is invalid` }) }

}


exports.checkVinNumberUnique = async (request, response, next) => {
     try {
          const checkVinUnique = await db('cars').where('vin', request.body.vin).first()
          if (checkVinUnique) {
               return next({ status: 400, message: `vin ${request.body.vin} already exists` })
          }
          else {
               next()
          }
     }
     catch (error) {
          next(error)
     }
}

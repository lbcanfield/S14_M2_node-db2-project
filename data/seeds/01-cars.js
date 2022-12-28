// STRETCH
const tblName = 'cars';
exports.seed = async function (knex) {
     await knex(tblName).truncate();
     await knex(tblName).insert([
          { vin: '1111111111111', make: 'Chevrolet', model: 'Camaro', mileage: 5000, title: 'clean', transmission: 'manual' },
          { vin: '2222222222222', make: 'Chevrolet', model: 'Traverse', mileage: 10000, title: 'clean', transmission: 'automatic' },
          { vin: '3333333333333', make: 'Chevrolet', model: 'Silverado', mileage: 9000, title: 'clean', transmission: 'automatic' },
          { vin: '4444444444444', make: 'Dodge', model: 'Charger', mileage: 4000, title: 'clean', transmission: 'manual' },
          { vin: '5555555555555', make: 'Dodge', model: 'Challenger', mileage: 200, title: 'clean', transmission: 'manual' },
          { vin: '6666666666666', make: 'Dodge', model: 'Dart', mileage: 5000, title: 'clean', transmission: 'automatic' },
     ]);
};
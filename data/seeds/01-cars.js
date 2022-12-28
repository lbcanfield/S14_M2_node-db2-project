// STRETCH
const tblName = 'cars';
exports.seed = async function (knex) {
     await knex(tblName).truncate();
     await knex(tblName).insert([
          { vin: '2G1F91EP8E9800255', make: 'Chevrolet', model: 'Camaro', mileage: 5000, title: 'clean', transmission: 'manual' },
          { vin: 'WBAEF832XVC801585', make: 'BMW', model: '8 Series', mileage: 10000, title: 'clean', transmission: 'manual' },
          { vin: '1GB5K0C80F0014964', make: 'Chevrolet', model: 'Silverado', mileage: 9000, title: 'clean', transmission: 'automatic' },
          { vin: '1FMZU32X9XUC28293', make: 'Ford', model: 'Explorer', mileage: 4000, title: 'clean', transmission: 'automatic' },
          { vin: 'YV4CN592661302070', make: 'Volvo', model: 'XC90', mileage: 200, title: 'clean', transmission: 'automatic' },
          { vin: 'JT5ST62K7K7324036', make: 'Toyota', model: 'Celica', mileage: 5000, title: 'clean', transmission: 'automatic' },
     ]);
};
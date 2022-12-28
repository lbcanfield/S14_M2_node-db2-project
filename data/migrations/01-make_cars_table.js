const tblName = 'cars';
exports.up = function (knex) {
     return knex.schema.createTable(tblName, tbl => {
          tbl.increments();   //primary key
          tbl.string('vin', 17).unique().notNullable(); //unique and required
          tbl.string('make').notNullable() // required
          tbl.string('model').notNullable() // required
          tbl.numeric('mileage').notNullable() // required
          tbl.string('title') // optional
          tbl.string('transmission') // optional
     })
};

exports.down = function (knex) {
     return knex.schema.dropTableIfExists(tblName);
};

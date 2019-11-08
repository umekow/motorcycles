
exports.up = function(knex) {
  //year make and model, engine, mileage, VIN, edition, id
  return knex.schema
  .createTable('bikes', tbl=>{
      tbl.increments(); 
      tbl.integer('year', 4).notNullable();
      tbl.string('make', 128).notNullable();
      tbl.string('model', 128).notNullable(); 
      tbl.string('engine', 128)
      tbl.integer('mileage', 6)
      tbl.string('VIN', 128)
      tbl.string('edition', 128)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('bikes')
};


exports.up = function(knex) {
  return knex.schema.createTable('checkpoint', table => {
      table.increments('id'); 
      table.string('input')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('checkpoint')
};

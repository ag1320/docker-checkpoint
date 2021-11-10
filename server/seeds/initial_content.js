
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('checkpoint').del()
    .then(function () {
      // Inserts seed entries
      return knex('checkpoint').insert([
        {input: 'Chuck Norris doesn’t read books. He stares them down until he gets the information he wants.'}
      ]);
    });
};

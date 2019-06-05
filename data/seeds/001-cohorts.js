exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('cohorts').insert([
        { name: 'web19' },
        { name: 'ds3' },
        { name: 'ux2' },
        { name: 'ios4' },
        { name: 'and3' },
      ]);
    });
};

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('students').insert([
        { name: 'Jonathan', cohort_id: 3 },
        { name: 'Tas', cohort_id: 2 },
        { name: 'Amanda', cohort_id: 1 },
      ]);
    });
};

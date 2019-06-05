const db = require('../data/dbConfig');

module.exports = {
  find,
  findById,
  update,
  add,
  remove,
};

function find() {
  return db('students');
}

// function findById(id) {
//   return db('students').where({ id });
// }

function findById(id) {
  return db('students')
    .join('cohorts', 'cohorts.id', 'students.cohort_id')
    .select('students.id', 'students.name', 'cohorts.name as cohort')
    .where('students.id', id);
}

function update(id, changes) {
  return db('students')
    .where({ id })
    .update(changes);
}

function add(cohort) {
  return db('students').insert(cohort);
}

function remove(id) {
  return db('students')
    .where({ id })
    .del();
}

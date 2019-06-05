const db = require('../data/dbConfig');

module.exports = {
  find,
  findById,
  update,
  add,
  remove,
  getCohortStudents,
};

function find() {
  return db('cohorts');
}

function findById(id) {
  return db('cohorts').where({ id });
}

function update(id, changes) {
  return db('cohorts')
    .where({ id })
    .update({ changes });
}

function add(cohort) {
  return db('cohorts').insert(cohort);
}

function remove(id) {
  return db('cohorts')
    .where({ id })
    .del();
}

function getCohortStudents(id) {
  return db('cohorts')
    .join('students', 'students.cohort_id', 'cohorts.id')
    .select('students.name', 'students.cohort_id')
    .where('cohorts.id', id);
}

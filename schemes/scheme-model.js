const db = require('../data/db')


module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
};


function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes').where({ id: Number(id) }).first();
}

function findSteps(id) {
  return db('steps').where({scheme_id: Number(id)}).orderBy('step_number')
}

function add(schemes) {
  return db('schemes')
    .insert(schemes)
    .then(ids => ({ id: ids[0] }));
}

function update(schemes, id) {
  return db('schemes')
    .where('id', Number(id))
    .update(schemes);
}

function remove(id) {
  return db('schemes')
    .where('id', Number(id))
    .del();
}
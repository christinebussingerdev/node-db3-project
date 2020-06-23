const db = require('../data/dbConfig')

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove
}

function find() {
  return db('schemes')
}

function findById(schemeId) {
  return db('schemes')
  .where('id', schemeId)
  .first()
}

function findSteps(schemeId) {
  return db('steps')
  .where('scheme_id', schemeId)
}

function add(newScheme) {
  return db('schemes')
    .insert(newScheme, 'id')
    .then(ids => ({ id: ids[0] }))
}

function addStep(newStep, schemeId) {
  return db('steps')
  .insert({...newStep, scheme_id: schemeId})
  .then(ids => ({ id: ids[0] }))
}

function update(updatedScheme, schemeId) {
  return db('schemes')
  .where('id', schemeId)
  .update(updatedScheme, 'id')
  .then(ids => ({ id: ids[0] }))
}

function remove (schemeId) {
  return db('schemes')
  .where('id', schemeId)
  .del()
}
// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burgers = {
 
  selectAll(cbController) {
    orm.selectAll("burgers", (burgers_db) => cbController(burgers_db));
  },

  insertOne(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, (res) => cb(res));
  },

  update(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, (res) => cb(res));
  },
  delete(condition, cb) {
    orm.delete('burgers', condition, (res) => cb(res));
  },
};

// Export the database functions for the controller
module.exports = burgers;

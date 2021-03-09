// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burgers = {
  //   selectAll() {}, insertOne() {}, updateOne() {}
  selectAll(cbController) {
    orm.selectAll("burgers", (burgers_db) => cbController(burgers_db));
  },
  // The variables cols and vals are arrays.
  create(cols, vals, cb) {
    orm.create("burgers", cols, vals, (res) => cb(res));
  },
  update(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, (res) => cb(res));
  },
  delete(condition, cb) {
    orm.delete("burgers", condition, (res) => cb(res));
  },
};

// Export the database functions for the controller
module.exports = burgers;

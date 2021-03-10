// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burgers = {
  //   selectAll() {}, insertOne() {}, updateOne() {}
  selectAll(cbController) {
    orm.selectAll("burgers", (burgers_db) => cbController(burgers_db));
  },

  insertOne(burgerName, cb) {
    orm.insertOne("burgers", burgerName, (res) => cb(res));
  },

  update(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, (res) => cb(res));
  },
};

// Export the database functions for the controller
module.exports = burgers;

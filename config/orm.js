// Import MySQL connection.
const connection = require("./connection.js");

const orm = {
  selectAll: (table, cbModel) => {
    const statement = connection.query(
      "select * FROM ?? ",
      table,
      function (err, burgers_db) {
        console.log(burgers_db);
        cbModel(burgers_db);
      }
    );
    console.log(statement.sql);
  },
  insertOne() {},
  updateOne() {},
};

// Export the orm object for the model (cat.js).
module.exports = orm;

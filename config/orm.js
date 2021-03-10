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
  insertOne(table, burgerName, cbModel) {
    const queryString = "INSERT INTO ?? SET ?";
    connection.query(queryString, [table, burgerName], (err, result) => {
      console.log(burgerName);
      if (err) throw err;
      cb(result);
    });
  },
  updateOne(table, devoured, col, val, cbModel) {
    const queryString = "UPDATE ?? SET ? WHERE ?? = ?";
    connection.query(
      queryString,
      [table, devoured, col, val, cb],
      (err, result) => {
        if (err) throw err;
        cb(result);
      }
    );
  },
};

// Export the orm object for the model (cat.js).
module.exports = orm;

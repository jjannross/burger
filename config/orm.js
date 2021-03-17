// Import MySQL connection.
const connection = require("./connection.js");

const printQuestionMarks = (num) => {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push('?');
  }

  return arr.toString();
};

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
  insertOne(table, col, burgerName, cbModel) {
    const queryString = `INSERT INTO ${table} (${col.toString()}) VALUES (${printQuestionMarks(burgerName.length)});`
    connection.query(queryString, burgerName, (err, result) => {
      console.log(burgerName);
      if (err) throw err;
      cbModel(result);
    });
  },
 
 
 
 
  // insertOne(table, col, burgerName, cbModel) {
  //   const queryString = "INSERT INTO ?? SET ?";
  //   connection.query(queryString, [table, col, burgerName], (err, result) => {
  //     console.log(burgerName);
  //     if (err) throw err;
  //     cbModel(result);
  //   });
  // },
  updateOne(table, devoured, col, val, cbModel) {
    const queryString = "UPDATE ?? SET ? WHERE ?? = ?";
    connection.query(
      queryString,
      [table, devoured, col, val, cbModel],
      (err, result) => {
        if (err) throw err;
        cbModel(result);
      }
    );
  },
  delete(table, condition, cb) {
    let queryString = `DELETE FROM ${table}`;
    queryString += ' WHERE ';
    queryString += condition;

    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
};

// Export the orm object for the model (burger.js).
module.exports = orm;

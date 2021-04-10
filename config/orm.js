// Import MySQL connection.
const connection = require("./connection.js");

const printQuestionMarks = (num) => {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push('?');
  }

  return arr.toString();
};

const objToSql = (ob) => {
  const arr = [];

  // Loop through the keys and push the key/value as a string int arr
  for (const key in ob) {
    let value = ob[key];
    // Check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      
      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = `'${value}'`;
      }
     
      arr.push(`${key}=${value}`);
    }
  }

  // Translate array of strings to a single comma-separated string
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
 
 
  updateOne(table, col, val, cbModel) {
    const queryString = `UPDATE ${table} SET ${objToSql(col)} WHERE ${val}`;
    connection.query(
      queryString,
      [table, col, val, cbModel],
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

const mysql = require('mysql');
let connection;

if (process.env.PROJECT2_URL) {
  connection = mysql.createConnection(process.env.PROJECT2_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.myPassword,
    database: 'dbevents',
});
}

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;
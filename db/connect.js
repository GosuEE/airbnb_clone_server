const mysql = require("mysql2");

var conn = mysql.createConnection({
  host: "localhost",
  user: "testuser",
  password: "test",
  database: "TESTDB",
});
conn.connect();

module.exports = conn;

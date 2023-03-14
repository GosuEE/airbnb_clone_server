var express = require("express");
var router = express.Router();
var conn = require("../db/connect");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/api/data", (req, res) => {
  var sql = "SELECT * FROM user";
  conn.query(sql, function (err, rows, fields) {
    if (err) {
      console.error("error connecting: " + err.stack);
    } else {
      console.log("send");
      res.send(rows);
    }
  });
});

module.exports = router;

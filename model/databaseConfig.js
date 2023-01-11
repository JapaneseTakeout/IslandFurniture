var mysql = require("mysql");

const dotenv = require("dotenv");
dotenv.config();

var dbconnect = {
  getConnection: function () {
    var conn = mysql.createConnection({
      host: "localhost",
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: "islandfurniture-it07",
    });
    return conn;
  },
};
module.exports = dbconnect;

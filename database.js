/**
 ** @Creating Database Connection
 **/

var mysql = require("mysql");
var db_info = {
    host: "localhost",
    port: 3036,
    user: "root",
    password: "",
    database: "mydata",
};
var conn = mysql.createConnection(db_info);
conn.connect((error) => {
    if (error) {
        throw error;
    }
});

module.exports = conn;

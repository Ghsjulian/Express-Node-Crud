/**
 ** @Creating Database Connection
 **/

var mysql = require("mysql");
var db_info = {
    host: "localhost",
    user: "root",
    password: "",
    database: "my_data",
};
var conn = mysql.createConnection(db_info);
conn.connect((error) => {
    if (error) {
        throw error;
    }
});

module.exports = conn;

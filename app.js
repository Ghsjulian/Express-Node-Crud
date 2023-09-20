/**
 *
 **@AUTHOR Ghs Julian
 **@DESCRIPTIONS CRUD
 **@REQUIRED MODULUS
 *
 **/
var conn = require("./database");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = 3000;
var host = "127.0.0.1";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

// DEFINED ROUTES ***
app.get("/", (req, res) => {
    var sql = "SELECT * FROM users";
    conn.query(sql, (error, result) => {
        if (error) throw error;
        res.render("users", { users: result });
    });
});
app.get("/add-user", (req, res) => {
    res.render("add-user", {});
});
app.get("/edit-user", (req, res) => {
    var id = req.query.userId;
    var sql = `SELECT * FROM users WHERE user_id='${id}'`;
    conn.query(sql, (error, result) => {
        if (error) throw error;
        res.render("edit-user", { users: result });
    });
});

app.get("/delete-user", (req, res) => {
    var id = req.query.userId;
    var sql = `DELETE FROM users WHERE user_id='${id}'`;
    conn.query(sql, (error, result) => {
        if (error) throw error;
        res.redirect("/");
    });
});

app.post("/edit-user", (req, res) => {
    var id = req.body.user_id;
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var sql = `UPDATE
    users SET user_name='${name}',user_email='${email}',user_phone='${phone}' WHERE user_id=${id}`;
    conn.query(sql, (error, result) => {
        if (error) {
            throw error;
        } else {
            res.redirect("/");
        }
    });
});

app.post("/add-user", (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var sql = `INSERT INTO
    users(user_name,user_email,user_phone)VALUES('${name}','${email}','${phone}')`;
    conn.query(sql, (error, result) => {
        if (error) {
            throw error;
        } else {
            res.redirect("/");
        }
    });
});

// SERVER STARTED ***
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server Started At ${host}:${port}`);
});

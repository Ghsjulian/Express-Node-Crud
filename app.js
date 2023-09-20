/**
 *
 **@AUTHOR Ghs Julian
 **@DESCRIPTIONS CRUD
 **@REQUIRED MODULUS
 *
 **/
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
    res.render("users", {});
});
app.get("/add-user", (req, res) => {
    res.render("add-user", {});
});
app.get("/edit-user", (req, res) => {
    res.render("edit-user", {});
});

app.post("/add-user", (req, res) => {
    console.log(req.body);
    return res.send(req.body);
});

// SERVER STARTED ***
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server Started At ${host}:${port}`);
});

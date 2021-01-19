// Dependencies
var db = require("../models");


module.exports = function (app) {
//Routing

app.get('/', function (req, res) {
    res.render("home")
  });

app.get('/projects', function (req, res) {
    res.render("projects")
  });

app.get('/budget', function (req, res) {
    res.render("budget")
  });

app.get('/people', function (req, res) {
    res.render("people")
  });

app.get('/tasks', function (req, res) {
    res.render("tasks")
  });

};



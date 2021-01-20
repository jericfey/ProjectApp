// Dependencies
var db = require("../models");

module.exports = function (app) {
  //Routing

  app.get("/", function (req, res) {
    //db.People.findAll().then(test => console.log(test));
  });

  app.get("/home", function (req, res) {
    res.render("home");
  });

  app.get("/projects", function (req, res) {
    res.render("projects");
  });

  app.get("/budget", function (req, res) {
    res.render("budget");
  });

  app.get("/people", function (req, res) {
    res.render("people");
  });

  app.get("/tasks", function (req, res) {
    db.Task.findAll({
      include: [db.Project, db.State, db.People],
    })
      // .then((dbTasks) => res.json(dbTasks))
      .then((dbTasks) => {
        res.render("tasks", { Tasks: dbTasks });
        // let jsonTasks = JSON.parse(dbTasks);
        console.log(dbTasks[0]);
      });

    // res.render("tasks");
  });
};

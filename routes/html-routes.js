// Dependencies
var db = require("../models");

module.exports = function (app) {
  //Routing

  app.get("/", function (req, res) {
    res.render("home");
  });

  app.get("/projectadd", function (req, res) {
    res.render("formproject");
  });

  app.get("/home", function (req, res) {
    res.render("home");
  });

  app.get("/projects", function (req, res) {
    db.Project.findAll({
      // include: [db.Project, db.State, db.People],
    })
      // .then((dbTasks) => res.json(dbTasks))
      .then((dbProjects) => {
        res.render("projects", { Projects: dbProjects });
        // let jsonTasks = JSON.parse(dbTasks);
        console.log(dbProjects[0]);
      });
  });

  app.get("/budget", function (req, res) {
    res.render("budget");
  });

  app.get("/people", function (req, res) {
    res.render("people");
  });

  app.get("/tasks", function (req, res) {
    db.Task.findAll(
      { include: [{ all: true, nested: true }] },
      { group: [db.State.id] }
    ).then((dbTasks) => {
      res.render("tasks", { Tasks: dbTasks });
      console.log(dbTasks);
    });
  });
};

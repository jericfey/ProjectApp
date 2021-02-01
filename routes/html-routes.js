// Dependencies
var db = require("../models");

module.exports = (app) => {
  //Routing
  // ! on home page load home handlebars
  app.get("/", function (req, res) {
    res.render("home");
  });

  // ! on project add load the project add form
  app.get("/projectadd", function (req, res) {
    res.render("formproject");
  });

  //! if /home is called render home.
  app.get("/home", function (req, res) {
    res.render("home");
  });

  //! project route for rendering project handlebars
  app.get("/projects", function (req, res) {
    const projectGet = db.Project.findAll({
      include: [{ all: true, nested: true }],
    });
    const departmentGet = db.Department.findAll({
      include: [{ all: true, nested: true }],
    });
    Promise.all([projectGet, departmentGet]).then((dbAll) => {
      // console.log(dbTasks);
      const projects = dbAll[0];
      const department = dbAll[1];
      console.log(projects);
      console.log(department);
      res.render("projects", { Projects: projects, Department: department });
    });
  });

  app.get("/budget", function (req, res) {
    res.render("budget");
  });

  app.get("/people", function (req, res) {
    db.People.findAll({
      include: [{ all: true }],
    })
      // .then((dbTasks) => res.json(dbTasks))
      .then((dbPeople) => {
        res.render("people", { People: dbPeople });
        // let jsonTasks = JSON.parse(dbTasks);
        console.log(dbPeople[0].Role);
      });
  });

  app.get("/tasks", (req, res) => {
    const taskGet = db.Task.findAll({ include: [{ all: true, nested: true }] });
    const peopleGet = db.People.findAll({
      include: [{ all: true, nested: true }],
    });
    const projectGet = db.Project.findAll({
      include: [{ all: true, nested: true }],
    });
    Promise.all([taskGet, peopleGet, projectGet]).then((dbAll) => {
      // console.log(dbTasks);
      const tasks = dbAll[0];
      const people = dbAll[1];
      const projects = dbAll[2];
      // console.log(tasks);
      // console.log(people);
      // console.log(projects);
      res.render("tasks", { Tasks: tasks, People: people, Project: projects });
    });
  });
};

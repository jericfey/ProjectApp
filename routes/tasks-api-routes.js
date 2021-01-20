const db = require("../models");

module.exports = (app) => {
  app.get("/api/tasks", (req, res) => {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Task.findAll({
      include: [db.Project, db.State, db.People],
    }).then((dbTasks) => res.json(dbTasks));
    res.render("tasks", dbTasks);
  });

  app.get("/api/tasks/:id", (req, res) => {
    db.Task.findOne({
      where: {
        id: req.params.id,
      },
      include: [{ all: true }],
    }).then((dbTasks) => res.json(dbTasks));
  });

  app.post("/api/tasks", (req, res) => {
    db.Task.create(req.body).then((dbTasks) => res.json(dbTasks));
  });

  app.delete("/api/tasks/:id", (req, res) => {
    db.Task.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbTasks) => res.json(dbTasks));
  });
};

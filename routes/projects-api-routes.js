const db = require("../models");

module.exports = (app) => {
  //Pull all projects
  app.get("/api/projects", (req, res) => {
    db.Project.findAll({
      include: [db.Departments],
    }).then((dbProjects) => res.json(dbProjects));
    res.render("projects", dbProjects);
  });

  //Pull by project id 
  app.get("/api/projects/:id", (req, res) => {
    db.Project.findOne({
      where: {
        id: req.params.id,
      },
      include: [{ all: true, nested: true }],
    }).then((dbProjects) => res.json(dbProjects));
  });

  //create new project
  app.post("/api/projects", (req, res) => {
    db.Project.create(req.body).then((dbProjects) => res.json(dbProjects));
  });

  //Delete project
  app.delete("/api/projects/:id", (req, res) => {
    db.Project.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbProjects) => res.json(dbProjects));
  });
};

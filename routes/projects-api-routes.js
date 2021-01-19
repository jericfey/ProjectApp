const db = require("../models");

module.exports = (app) => {
  //Pull all projects
  app.get("/api/projects", (req, res) => {
    db.Project.findAll({
      include: [{ all: true, nested: true }],
    }).then((dbProjects) => res.json(dbProjects));
  });
};

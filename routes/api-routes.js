// Grabbing our models

const db = require("../models");

module.exports = (app) => {
  //GET route to get all projects
  app.get("/api/projects", (req, res) => {
    db.Project.findAll().then((dbProject) => res.json(dbProject));
  });

  //POST route

  //DELETE route

  //PUT route for updates
};

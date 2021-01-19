const db = require("../models");

module.exports = (app) => {
  app.get("/api/tasks", (req, res) => {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Task.findAll({
      include: [{ all: true, nested: true }],
    }).then((dbTasks) => res.json(dbTasks));
  });

  //   app.get("/api/tasks/:id", (req, res) => {
  //     // Here we add an "include" property to our options in our findOne query
  //     // We set the value to an array of the models we want to include in a left outer join
  //     // In this case, just db.Post
  //     db.Author.findOne({
  //       where: {
  //         id: req.params.id,
  //       },
  //       include: [db.Post],
  //     }).then((dbAuthor) => res.json(dbAuthor));
  //   });

  //   app.post("/api/tasks", (req, res) => {
  //     db.Author.create(req.body).then((dbAuthor) => res.json(dbAuthor));
  //   });

  //   app.delete("/api/tasks/:id", (req, res) => {
  //     db.Author.destroy({
  //       where: {
  //         id: req.params.id,
  //       },
  //     }).then((dbAuthor) => res.json(dbAuthor));
  //   });
};

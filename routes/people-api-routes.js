const db = require("../models");

module.exports = (app) => {
  //Pull all people
  app.get("/api/people", (req, res) => {
    db.People.findAll({
      include: [{ all: true, nested: true }],
    }).then((dbPeople) => res.json(dbPeople));
  });

  //Pull by People id
  app.get("/api/people/:id", (req, res) => {
    db.People.findOne({
      where: {
        id: req.params.id,
      },
      include: [{ all: true, nested: true }],
    }).then((dbPeople) => res.json(dbPeople));
  });

  //create new People
  app.post("/api/people", (req, res) => {
    db.People.create(req.body).then((dbPeople) => res.json(dbPeople));
  });

  //Delete People
  app.delete("/api/people/:id", (req, res) => {
    db.People.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbPeople) => res.json(dbPeople));
  });
};

const db = require("../models");

module.exports = (app) => {
  app.get("/api/tasks", (req, res) => {
    db.Task.findAll({ include: [{ all: true }] });
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
    const taskPost = {};
    taskPost.name = req.body.name;
    taskPost.hours = req.body.hours;
    taskPost.billable = req.body.billable;
    db.People.findOne({
      attributes: ["id", "RoleId"],
      where: { full_name: req.body.person },
    }).then(({ id, RoleId }) => {
      taskPost.PersonId = id;
      // console.log(taskPost);
      db.Role.findOne({
        attributes: ["bill_rate", "cost_rate"],
        where: { id: RoleId },
      }).then(({ bill_rate, cost_rate }) => {
        if (req.body.billable) {
          taskPost.cost = cost_rate * taskPost.hours;
          taskPost.revenue = bill_rate * taskPost.hours;
        } else {
          taskPost.cost = cost_rate * taskPost.hours;
          taskPost.revenue = 0;
        }
        // console.log(taskPost);
        db.State.findOne({
          attributes: ["id"],
          where: { name: req.body.state },
        }).then(({ id }) => {
          taskPost.StateId = id;
          // console.log(taskPost);
          db.Project.findOne({
            attributes: ["id"],
            where: { name: req.body.project },
          }).then(({ id }) => {
            taskPost.ProjectId = id;
            console.log(taskPost);
            db.Task.create(taskPost).then((dbTasks) => {
              res.json(dbTasks);
            });
          });
        });
      });
      //! db.create.Tasks(taskPost);
    });

    // // gets stateID from state selected on form
    // const StateId = db.State.findOne({
    //   attributes: ["id"],
    //   where: { name: req.body.state },
    // });
    // const name = req.body.name;
    // const hours = req.body.hours;
    // // get cost rate for person
    // const rates = db.Role.findOne({
    //   attributes: ["cost_rate", "bill_rate"],
    //   where: { id: PersonId.roleId },
    // });
    // // need to return rate from role and multiply by hours.
    // const revenue = rates.bill_rate * hours;
    // // need to return rate from role and multiply by hours if billable checked.
    // const cost = rates.cost_rate * hours;
    // // need to add checkbox to form.
    // const billable = true;
    // // need to get project id from something
    // const ProjectId = 1;

    // Promise.all([PersonId, StateId, rates]).then((data) => {
    //   console.log(data);
    //   db.Task.create({
    //     name: name,
    //     hours: hours,
    //     cost: cost,
    //     revenue: revenue,
    //     billable: billable,
    //     PersonId: PersonId,
    //     ProjectId: ProjectId,
    //     StateId: StateId,
    //   }).then((dbTasks) => res.json(dbTasks));
  });
  // });

  app.delete("/api/tasks/:id", (req, res) => {
    db.Task.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbTasks) => res.json(dbTasks));
  });
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("States", [
      {
        name: "Backlog",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "In Progress",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Blocked",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Completed",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    return queryInterface.bulkInsert("Tasks", [
      {
        name: "Create Propoganda",
        hours: 5,
        cost: 500,
        revenue: 2500,
        billable: false,
        PersonId: 6,
        ProjectId: 1,
        StateId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Get to Endor",
        hours: 2,
        cost: 200,
        revenue: 1000,
        billable: true,
        PersonId: 3,
        ProjectId: 2,
        StateId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Capture Han Solo",
        hours: 10,
        cost: 1000,
        revenue: 5000,
        billable: true,
        PersonId: 7,
        ProjectId: 3,
        StateId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tasks", null, {});
  },
};

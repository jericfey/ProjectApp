module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Projects", [
      {
        name: "Implement the Tarkin Doctrine",
        DepartmentId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Restore the Galactic Republic",
        DepartmentId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Improve Fiscal Outlook",
        DepartmentId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down:  (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Projects", null, {});
  },
};

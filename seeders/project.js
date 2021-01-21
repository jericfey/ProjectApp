module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Projects", [
      {
        name: "Implement the Tarkin Doctrine",
        description:
          "Complete Death Star so no one would dare act against the Empire. Terror at the prospect of planetary annihilation will ensure compliance and order.",
        DepartmentId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Restore the Galactic Republic",
        description:
          "Expand galactic civilization through exploration and colonization",
        DepartmentId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Improve Fiscal Outlook",
        description: "Need better budgeting process to keep slaves fed",
        DepartmentId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Projects", null, {});
  },
};

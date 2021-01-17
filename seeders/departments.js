"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Departments", [
      {
        name: "Rebel Alliance",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Galactic Empire",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nal Hutta",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Departments", null, {});
  },
};

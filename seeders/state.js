"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("States", [
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
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("States", null, {});
  },
};

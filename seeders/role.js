"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Roles", [
      {
        name: "Jedi",
        cost_rate: 100,
        bill_rate: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Princess",
        cost_rate: 100,
        bill_rate: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Captain",
        cost_rate: 100,
        bill_rate: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sith Lord",
        cost_rate: 100,
        bill_rate: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Co-Pilot",
        cost_rate: 100,
        bill_rate: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Commander",
        cost_rate: 100,
        bill_rate: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Crime Lord",
        cost_rate: 100,
        bill_rate: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("States", null, {});
  },
};

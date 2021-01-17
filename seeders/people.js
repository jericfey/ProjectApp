module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Roles", [
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
    return queryInterface.bulkInsert("People", [
      {
        first_name: "Luke",
        last_name: "Skywalker",
        full_name: "Luke Skywalker",
        RoleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "Leia",
        last_name: "Organa",
        full_name: "Leia Organa",
        RoleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "Han",
        last_name: "Solo",
        full_name: "Han Solo",
        RoleId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "Darth",
        last_name: "Vader",
        full_name: "Darth Vader",
        RoleId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "Chewbacca",
        last_name: "Rahhggaahh Urughaghhh",
        full_name: "Chewbacca Rahhggaahh Urughaghhh",
        RoleId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "Wilhuff",
        last_name: "Tarkin",
        full_name: "Wilhuff Tarkin",
        RoleId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "Jabba",
        last_name: "Tiure",
        full_name: "Jabba the Hut",
        RoleId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("People", null, {});
  },
};

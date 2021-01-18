require("dotenv").config();
module.exports = {
  development: {
    username: "root",
    password: "P@ssword!",
    database: "kanban",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: "null",
    database: "database_test",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
  },
};

require("dotenv").config();
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PW,
    database: "kanban",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
    use_env_variable: "JAWSDB_URL",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
  },
  production: {
    use_env_variable: "JAWSDB_URL",
  },
};

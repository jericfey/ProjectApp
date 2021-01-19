require("dotenv").config();

const express = require("express");
const taskRouter = require("./routes/tasks-api-routes");
const projectRouter = require("./routes/projects-api-routes");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require("./models");

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "home" }));
app.set("view engine", "handlebars");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// // Static directory
// app.use(express.static("public"));

// Import routes and give the server access to them.
// const routes = require("./routes/api-routes.js");

// app.use(routes);

// Invoke Routes
taskRouter(app);
projectRouter(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});

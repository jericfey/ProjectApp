require("dotenv").config();

const express = require("express");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require("./models");

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Import routes and give the server access to them.
const routes = require("./routes/api-routes.js");

app.use(routes);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});

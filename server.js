const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

// Requiring our models for syncing - for sequelize
const db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Const for API route:
const apiRoutes = require("./routes/api-routes");

app.use("api/", apiRoutes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);

// ?? alternate code for server? from Full-Stack Activity 13
// const express = require("express");

// const htmlRouter = require("./routes/html-routes.js");
// const apiRouter = require("./routes/post-api-routes.js");

// // Sets up the Express App
// const app = express();
// const PORT = process.env.PORT || 8080;

// // Requiring our models for syncing
// const db = require("./models");

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Static directory
// app.use(express.static("public"));

// // Invoke routes
// htmlRouter(app);
// apiRouter(app);

// // Syncing our sequelize models and then starting our Express app
// db.sequelize.sync({ force: true }).then(() => {
//   app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
// });

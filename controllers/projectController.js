const express = require("express");

const router = express.Router();

// Import the model (project.js) to use its database functions.
const project = require("../models/project.js");

router.get("/", (req, res) => {
  project.all((data) => {
    const hbsObject = {
      projects: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

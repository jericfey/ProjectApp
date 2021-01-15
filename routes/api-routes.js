var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  console.log("Request called...");
  resizeBy.sendStatus(200);
});

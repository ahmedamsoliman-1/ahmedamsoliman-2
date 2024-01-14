var express = require("express");
var router = express.Router();

var middleware = require("../middleware");


router.get("/linkedin", middleware.isLoggedIn, function (req, res) {
  res.redirect("https://www.linkedin.com/in/ahmed-ali-m-soliman-01aa54120/");
});

module.exports = router;

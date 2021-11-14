var express = require("express");
var router = express.Router();

var middleware = require("../middleware");


router.get("/links", middleware.isLoggedIn , function(req, res) 
{
    res.render("links");
});

module.exports = router;
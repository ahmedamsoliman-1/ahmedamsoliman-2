var express = require("express");
var router = express.Router();

router.get("/games", function(req, res) 
{
    res.render("games");
});

router.get("/games/rgp", function(req, res) 
{
    res.render("rgp");
});

module.exports = router;
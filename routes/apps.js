var express = require("express");
var router = express.Router();


router.get("/apps", function(req, res) 
{
    res.render("apps/apps")
});

router.get("/apps/calculator", function(req, res) 
{
    res.render("apps/calculator")
});

router.get("/apps/calendar", function(req, res) 
{
    res.render("apps/calendar")
});

module.exports = router;
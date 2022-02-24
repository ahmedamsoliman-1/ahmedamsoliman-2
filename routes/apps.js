var express = require("express");
var router = express.Router();


router.get("/apps", function(req, res) 
{
    res.render("apps/apps");
});

router.get("/apps/calculator", function(req, res) 
{
    res.render("apps/calculator");
});

router.get("/apps/calendar", function(req, res) 
{
    res.render("apps/calendar");
});

router.get("/apps/houndify", function(req, res) 
{
    res.render("apps/houndify");
});

router.get("/apps/todo", function(req, res) 
{
    res.render("apps/todo");
});

router.get("/apps/dogsrand", function(req, res) 
{
    res.render("apps/dogsrand");
});

module.exports = router;
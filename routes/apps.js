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

module.exports = router;
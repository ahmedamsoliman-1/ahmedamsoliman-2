var express = require("express");
var router = express.Router();



router.get("/badges", function(req, res) 
{
    res.render("badges");
});

module.exports = router;
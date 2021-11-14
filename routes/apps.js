var express = require("express");
var router = express.Router();


router.get("/apps", function(req, res) 
{
    res.render("apps/apps")
});

module.exports = router;
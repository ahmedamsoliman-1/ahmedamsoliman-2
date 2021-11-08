var express = require("express");
var router = express.Router();

router.get("/links", function(req, res) {
    res.render("links")
});

module.exports = router;
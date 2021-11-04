var express = require("express");
var router = express.Router();

router.get("/galary", function(req, res) {
    res.render("galary")
});

module.exports = router;
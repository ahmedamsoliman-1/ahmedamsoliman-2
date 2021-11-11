var express = require("express");
var router = express.Router();

var pict = 
[
    {name: "Ahmed Ali M. Soliman", image: "/image/galary/IMG_20210613_000958_573.jpg"},
    {name: "Ahmed Ali M. Soliman", image: "/image/galary/IMG_20210613_000958_647.jpg"},
    {name: "Ahmed Ali M. Soliman", image: "/image/galary/IMG_20210613_000958_740.jpg"},
    {name: "Ahmed Ali M. Soliman", image: "/image/galary/IMG_20210613_000958_773.jpg"}
]

router.get("/galary", function(req, res) 
{
    res.render("galary")
});

router.get("/galary/local", function(req, res) 
{
    res.render("local", {pict: pict});
});

module.exports = router;
var express = require("express");
var app = express();

var express = require("body-parser");

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing")
});

app.listen(process.env.PORT || 3000, process.env.IP, function() {
    console.log("Personal server started ...");
});
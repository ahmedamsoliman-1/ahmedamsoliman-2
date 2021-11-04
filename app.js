var express = require("express");
var app = express();

var express = require("body-parser");

var indexRoutes = require("./routes/index");
var galaryRoutes = require("./routes/galary");

app.set("view engine", "ejs");

app.use(indexRoutes);
app.use(galaryRoutes);

app.listen(process.env.PORT || 3000, process.env.IP, function() {
    console.log("Personal server started ...");
});
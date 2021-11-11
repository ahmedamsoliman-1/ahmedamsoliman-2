var express = require("express");
var app = express();
var port = process.env.PORT || 3000;


var indexRoutes = require("./routes/index");
var galaryRoutes = require("./routes/galary");
var linksRoutes = require("./routes/links");
var gamesRoutes = require("./routes/games");
// var anni = require("./scripts/main");


app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

app.use(indexRoutes);
app.use(galaryRoutes);
app.use(linksRoutes);
app.use(gamesRoutes);
// app.use(anni);

app.listen(port, process.env.IP, function() {
    console.log(`Personal server started  on port ${port}`);
});
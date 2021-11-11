var     express = require("express"),
        mongoose = require("mongoose"),
        bodyParser = require("body-parser"),
        app = express(),

        Picture = require("./models/picture"),
        Comment = require("./models/comment"),

        port = process.env.PORT || 3000,


        indexRoutes = require("./routes/index"),
        galaryRoutes = require("./routes/galary"),
        linksRoutes = require("./routes/links"),
        gamesRoutes = require("./routes/games");


mongoose.connect("mongodb://localhost/web");
app.use(bodyParser.urlencoded({extended: true}));app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.use(indexRoutes);
app.use(galaryRoutes);
app.use(linksRoutes);
app.use(gamesRoutes);
// app.use(anni);

app.listen(port, process.env.IP, function() {
    console.log(`Personal server started  on port ${port}`);
});
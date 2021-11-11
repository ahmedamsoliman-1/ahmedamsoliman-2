var     express = require("express"),
        mongoose = require("mongoose"),
        bodyParser = require("body-parser"),
        app = express(),

        Picture = require("./models/picture"),
        Comment = require("./models/comment"),

        port = process.env.PORT || 3000,


        indexRoutes = require("./routes/index"),
        gallaryRoutes = require("./routes/gallary"),
        linksRoutes = require("./routes/links"),
        gamesRoutes = require("./routes/games");


mongoose.connect("mongodb+srv://ahmed:123@cluster0.7ocrq.mongodb.net/yelp?retryWrites=true&w=majority");
app.use(bodyParser.urlencoded({extended: true}));app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.use(indexRoutes);
app.use(gallaryRoutes);
app.use(linksRoutes);
app.use(gamesRoutes);
// app.use(anni);

app.listen(port, process.env.IP, function() {
    console.log(`Personal server started  on port ${port}`);
});
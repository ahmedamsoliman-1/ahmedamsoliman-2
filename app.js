var     express = require("express"),
        mongoose = require("mongoose"),
        hbs = require("hbs"),
        path = require("path"),
        bodyParser = require("body-parser"),
        flash = require("connect-flash"),
        passport = require("passport"),
        LocalStrategy = require("passport-local"),
        methodOverride = require("method-override"),
        app = express(),

        // Picture = require("./models/picture"),
        // Comment = require("./models/comment"),

        port = process.env.PORT || 3000,

        weatherData = require("./utils/weatherData"),


        indexRoutes = require("./routes/index"),
        gallaryRoutes = require("./routes/gallary"),
        linksRoutes = require("./routes/links"),
        gamesRoutes = require("./routes/games"),
        weatherRoutes = require("./routes/weather"),
        appsRoutes = require("./routes/apps"),

        User = require("./models/user");



mongoose.connect("mongodb+srv://ahmed:123@cluster0.7ocrq.mongodb.net/yelp?retryWrites=true&w=majority");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"));
app.use(flash());

// =========================================================
// Passport configurations
app.use(require("express-session")(
{
    secret: "Secret phrase",
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(function(req, res, next) 
{
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});
// =========================================================


app.use(indexRoutes);
app.use(gallaryRoutes);
app.use(linksRoutes);
app.use(gamesRoutes);
app.use(weatherRoutes);
app.use(appsRoutes);
// app.use(anni);

app.listen(port, process.env.IP, function() 
{
    console.log(`Website server started on port ${port}`);
});
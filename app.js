var     express = require("express"),
        mongoose = require("mongoose"),
        dynamodb = require("dynamodb"),
        hbs = require("hbs"),
        path = require("path"),
        fs = require('fs'),
        bodyParser = require("body-parser"),
        flash = require("connect-flash"),
        passport = require("passport"),
        LocalStrategy = require("passport-local"),
        methodOverride = require("method-override"),
        https = require('https'),
        Houndify = require('houndify'),
        cors = require('cors'),
        app = express(),

        // Picture = require("./models/picture"),
        // Comment = require("./models/comment"),

        port = process.env.PORT || 8080,
        ipaddress = require("ip").address();

        weatherData = require("./utils/weatherData"),


        indexRoutes = require("./routes/index"),
        gallaryRoutes = require("./routes/gallary"),
        linksRoutes = require("./routes/links"),
        gamesRoutes = require("./routes/games"),
        weatherRoutes = require("./routes/weather"),
        appsRoutes = require("./routes/apps/apps"),
        appsRoutes_HarryPotter = require("./routes/apps/harryPotter"),
        linkedinRoutes = require("./routes/linkedin"),

        User = require("./models/user");


mongoose.connect("mongodb+srv://ahmed:123@cluster0.7ocrq.mongodb.net/yelp?retryWrites=true&w=majority");
// dynamodb.connect("mongodb+srv://ahmed:123@cluster0.7ocrq.mongodb.net/yelp?retryWrites=true&w=majority");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"));
app.use(flash());
app.use(cors());
// app.use(express.json());

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
app.use(appsRoutes_HarryPotter);
app.use(linkedinRoutes);


// =========================================================
// Houndify configurations
//parse arguments
var argv = require('minimist')(process.argv.slice(2));

//config file
var configFile = argv.config || '.config';
var config = require(path.join(__dirname, configFile));

//authenticates requests
app.get('/houndifyAuth', Houndify.HoundifyExpress.createAuthenticationHandler({ 
  clientId:  config.clientId, 
  clientKey: config.clientKey
}));

//sends the request to Houndify backend with authentication headers
app.post('/textSearchProxy', bodyParser.text({ limit: '1mb' }), Houndify.HoundifyExpress.createTextProxyHandler());
// =========================================================


app.listen(port, process.env.IP, function() 
{
    console.log(`Website server started on ${ipaddress}:${port}`);
});
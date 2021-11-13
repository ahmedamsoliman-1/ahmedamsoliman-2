var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var middleware = require("../middleware");


router.get("/", function(req, res) 
{
    res.render("landing")
});


router.get("/index", function(req, res) 
{
    res.render("index")
});



// Show register form
router.get("/register", function(req, res)
{
    res.render("register");
});

// Signup logic
router.post("/register", function(req, res)
{
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user)
    {
        if(err)
        {
            req.flash("error", err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function()
        {
            req.flash("success", "Welcome to Ahmed's site " + user.username);
            res.redirect("/gallary");
        });
    });
});


// Show login form
router.get("/login", function(req, res)
{
    res.render("login");
});

// Login logic
router.post("/login", passport.authenticate("local", 
{
    successRedirect: "/gallary",
    failureRedirect: "/login",
}), function(req, res){});

// Log out route
router.get("/logout", function(req, res)
{
    req.logout();
    req.flash("success", "Logged you out!")
    res.redirect("/");
});




module.exports = router;
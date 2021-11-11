var express = require("express");
var mongoose = require("mongoose");
var router = express.Router();

var Picture = require("../models/picture");

router.get("/gallary", function(req, res) 
{
    res.render("gallary/gallary")
});

router.get("/gallary/local", function(req, res) 
{
    Picture.find({}, function(err, allPic)
    {
        if (err)
        {
            console.log(err);
        }
        else
        {
            res.render("gallary/local", {pict: allPic});
        }
    });
});

router.get("/gallary/local/new", function(req, res)
{
    res.render("gallary/new");
});

router.post("/gallary/local", function(req, res)
{
    //get data from form
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;

    var newPicture = { name: name, image: image, description: desc }

    Picture.create(newPicture, function(err, newlyCreatedPicture)
    {
        if (err)
        {
            console.log(err);
        }
        else
        {
            res.redirect("/gallary/local");
        }
    });
});

//Display picture - show
router.get("/gallary/local/:id", function(req, res)
{
    // Find the picture with provieded ID
    Picture.findById(req.params.id, function(err, foundedPic)
    {
        if (err)
        {
            console.log(err);
        }
        else
        {
            res.render("gallary/show", {_pict: foundedPic});
        }
    });
});

module.exports = router;
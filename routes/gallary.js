var express = require("express");
var mongoose = require("mongoose");
var router = express.Router();

// var pict = 
// [
//     {name: "Ahmed Ali M. Soliman", image: "/image/gallary/IMG_20210613_000958_573.jpg"},
//     {name: "Ahmed Ali M. Soliman", image: "/image/gallary/IMG_20210613_000958_647.jpg"},
//     {name: "Ahmed Ali M. Soliman", image: "/image/gallary/IMG_20210613_000958_740.jpg"},
//     {name: "Ahmed Ali M. Soliman", image: "/image/gallary/IMG_20210613_000958_773.jpg"}
// ]

// Scema setup
var pictureSchema = new mongoose.Schema(
    {
        name: String,
        image: String,
        description: String
    }
);

var Picture = mongoose.model("Picture", pictureSchema);

// Picture.create(
//     {
//         name: "Ahmed Ali Mohammed Soliman",
//         image: "/image/gallary/IMG_20210613_000958_647.jpg"
//     }, function(err, picture)
//     {
//         if(err)
//         {
//             console.log(err);
//         }
//         else
//         {
//             console.log("picture added to db!");
//             console.log(picture);
//         }
//     }
// );

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
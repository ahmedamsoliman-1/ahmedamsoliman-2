var express = require("express");
var mongoose = require("mongoose");
var router = express.Router();

// var pict = 
// [
//     {name: "Ahmed Ali M. Soliman", image: "/image/galary/IMG_20210613_000958_573.jpg"},
//     {name: "Ahmed Ali M. Soliman", image: "/image/galary/IMG_20210613_000958_647.jpg"},
//     {name: "Ahmed Ali M. Soliman", image: "/image/galary/IMG_20210613_000958_740.jpg"},
//     {name: "Ahmed Ali M. Soliman", image: "/image/galary/IMG_20210613_000958_773.jpg"}
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
//         image: "/image/galary/IMG_20210613_000958_647.jpg"
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

router.get("/galary", function(req, res) 
{
    res.render("galary/galary")
});

router.get("/galary/local", function(req, res) 
{
    Picture.find({}, function(err, allPic)
    {
        if (err)
        {
            console.log(err);
        }
        else
        {
            res.render("galary/local", {pict: allPic});
        }
    });
});

router.get("/galary/local/new", function(req, res)
{
    res.render("galary/new");
});

router.post("/galary/local", function(req, res)
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
            res.redirect("/galary/local");
        }
    });
});

module.exports = router;
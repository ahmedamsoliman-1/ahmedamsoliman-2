var express = require("express");
var mongoose = require("mongoose");
var router = express.Router();
var flash = require("connect-flash");
var middleware = require("../middleware");

var Picture = require("../models/picture");
var Picture_aws = require("../models/picture_aws");

router.get("/gallary", function (req, res) {
  res.render("gallary/gallary");
});

router.get("/gallary/local", function (req, res) {
  Picture.find({}, function (err, allPic) {
    if (err) {
      console.log(err);
    } else {
      res.render("gallary/local", { pict: allPic });
    }
  });
});

router.get("/gallary/local/new", middleware.isLoggedIn, function (req, res) {
  res.render("gallary/new");
});

router.post("/gallary/local", function (req, res) {
  //get data from form
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;

  var newPicture = { name: name, image: image, description: desc };

  Picture.create(newPicture, function (err, newlyCreatedPicture) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/gallary/local");
    }
  });
});

//Display picture - show
router.get("/gallary/local/:id", function (req, res) {
  // Find the picture with provieded ID
  Picture.findById(req.params.id, function (err, foundedPic) {
    if (err) {
      console.log(err);
    } else {
      res.render("gallary/show", { pic: foundedPic });
    }
  });
});

// Edit picture
router.get("/gallary/local/:id/edit", function (req, res) {
  Picture.findById(req.params.id, function (err, foundedPic) {
    res.render("gallary/edit", { pic: foundedPic });
  });
});

//Update picture
router.put("/gallary/local/:id", function (req, res) {
  console.log("route");

  Picture.findByIdAndUpdate(
    req.params.id,
    req.body.pic,
    function (err, updatePic) {
      if (err) {
        res.redirect("/gallary/local");
      } else {
        res.redirect("/gallary/local/" + req.params.id);
      }
    }
  );
});

//Destroy picture
router.delete("/gallary/local/:id", function (req, res) {
  Picture.findByIdAndDelete(req.params.id, function (err) {
    if (err) {
      res.redirect("/gallary/local");
    } else {
      res.redirect("/gallary/local/");
    }
  });
});

aws_pic = [
  "https://s3.amazonaws.com/ahmedalisolimanpics/01_01_Jan_2005_14.jpg",
  "https://s3.amazonaws.com/ahmedalisolimanpics/01_11_Nov_2012_0.jpg",
  "https://s3.amazonaws.com/ahmedalisolimanpics/01_11_Nov_2014_10.jpg",
  "https://s3.amazonaws.com/ahmedalisolimanpics/01_2_Feb_2014_33.jpg",
  "https://s3.amazonaws.com/ahmedalisolimanpics/01_3_Mar_2014_54.jpg",
  "https://s3.amazonaws.com/ahmedalisolimanpics/01_3_Mar_2014_7.jpg",
  "https://s3.amazonaws.com/ahmedalisolimanpics/01_5_May_2014_34.jpg",
  "https://s3.amazonaws.com/ahmedalisolimanpics/01_5_May_2014_35.jpg",
  "https://s3.amazonaws.com/ahmedalisolimanpics/01_6_Jun_2014_21.jpg",
  "https://s3.amazonaws.com/ahmedalisolimanpics/02_04_Apr_2021_402-WA0004.jpg",
  "https://s3.amazonaws.com/ahmedalisolimanpics/02_04_Apr_2021_402-WA0005.jpg",
  "https://s3.amazonaws.com/ahmedalisolimanpics/02_04_Apr_2021_402-WA0006.jpg",
  "https://s3.amazonaws.com/ahmedalisolimanpics/02_05_May_2021_502-WA0015.jpg",
  "https://s3.amazonaws.com/ahmedalisolimanpics/02_05_May_2021_502-WA0016.jpg",
  "https://s3.amazonaws.com/ahmedalisolimanpics/04_06_Jun_2018_154712.jpg",
  "https://s3.amazonaws.com/ahmedalisolimanpics/04_11_Nov_2018_194538.jpg",
  "https://s3.amazonaws.com/ahmedalisolimanpics/22_04_Apr_2021_422-WA0013.jpg",
  "https://s3.amazonaws.com/ahmedalisolimanpics/24_06_Jun_2020_20200624_861.jpg",
  "https://s3.amazonaws.com/ahmedalisolimanpics/31_05_May_2021_531-WA0000.jpg",
  "https://s3.amazonaws.com/ahmedalisolimanpics/oau/",
  "https://s3.amazonaws.com/ahmedalisolimanpics/oau/Certificate_1.jpg",
  "https://s3.amazonaws.com/ahmedalisolimanpics/oau/Certificate_2.jpg",
  "https://s3.amazonaws.com/ahmedalisolimanpics/oau/Transcript_1.jpg",
  "https://s3.amazonaws.com/ahmedalisolimanpics/oau/Transcript_2.jpg",
];
router.get("/gallary/all", function (req, res) {
  res.render("gallary/all", { aws_pic: aws_pic });
});

module.exports = router;

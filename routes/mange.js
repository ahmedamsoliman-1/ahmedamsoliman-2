var express = require("express");
var router = express.Router();

var User = require("../models/user");

router.get("/mange", function (req, res) {
  User.find({}, function (err, allUsers) {
    if (err) {
      console.log(err);
    } else {
      // console.log(allUsers[0]);
      res.render("mange", { _user: allUsers });
    }
  });
});

router.get("/gallary/profile/:id", function (req, res) {
  // Find the picture with provieded ID
  User.findById(req.params.id, function (err, foundedUsers) {
    if (err) {
      console.log(err);
    } else {
      // console.log(foundedUsers.username);
      // console.log(foundedUsers.fulname);
      res.render("showProfile", { fuser: foundedUsers });
    }
  });
});

router.delete("/mange/profile/:id", function (req, res) {
  User.findByIdAndDelete(req.params.id, function (err) {
    if (err) {
      res.redirect("/mange");
    } else {
      res.redirect("/mange");
    }
  });
});

module.exports = router;

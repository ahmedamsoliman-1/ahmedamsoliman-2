var express = require("express");
var request = require("request");
var fs = require("fs");
var router = express.Router();
var middleware = require("../middleware");

let allToJSONData = JSON.parse(
  fs.readFileSync("public/data/videos.json", "utf8")
);

let _ejs_page_vid = "videos";

let _videos = allToJSONData["video"];

router.get(
  "/gallary/videos",
  middleware.isLoggedInAsAdmin,
  function (req, res) {
    // res.send(_videos);
    res.render(_ejs_page_vid, { all: _videos, y: Object.keys({ _videos })[0] });
  }
);

module.exports = router;

var express = require("express");
var request = require("request");
var fs = require("fs");
var router = express.Router();

let allToJSONData = JSON.parse(
  fs.readFileSync(
    "public/data/aams-lambda-to-list-urls-years-1-LambdaFunction-iH209ueqspYb_response.json",
    "utf8"
  )
);

// console.log(allToJSONData["2015"]);

let _0ndated = allToJSONData["0ndated"];
let _2005 = allToJSONData["2005"];
let _2008 = allToJSONData["2008"];
let _2010 = allToJSONData["2010"];
let _2012 = allToJSONData["2012"];
let _2013 = allToJSONData["2013"];
let _2014 = allToJSONData["2014"];
let _2015 = allToJSONData["2015"];
let _2016 = allToJSONData["2016"];
let _2017 = allToJSONData["2017"];
let _2018 = allToJSONData["2018"];
let _2019 = allToJSONData["2019"];
let _2020 = allToJSONData["2020"];
let _2021 = allToJSONData["2021"];
let _2022 = allToJSONData["2022"];
let _2023 = allToJSONData["2023"];
let _instagram = allToJSONData["instagram"];

let _year_page = "0ndated";

let options = { json: true };

router.get("/gallary/all/" + Object.keys({ _0ndated })[0], function (req, res) {
  res.render(_year_page, { all: _0ndated, y: Object.keys({ _0ndated })[0] });
});

router.get("/gallary/all/" + Object.keys({ _2005 })[0], function (req, res) {
  res.render(_year_page, { all: _2005, y: Object.keys({ _2005 })[0] });
});

router.get("/gallary/all/" + Object.keys({ _2008 })[0], function (req, res) {
  res.render(_year_page, { all: _2008, y: Object.keys({ _2008 })[0] });
});

router.get("/gallary/all/" + Object.keys({ _2010 })[0], function (req, res) {
  res.render(_year_page, { all: _2010, y: Object.keys({ _2010 })[0] });
});

router.get("/gallary/all/" + Object.keys({ _2012 })[0], function (req, res) {
  res.render(_year_page, { all: _2012, y: Object.keys({ _2012 })[0] });
});

router.get("/gallary/all/" + Object.keys({ _2013 })[0], function (req, res) {
  res.render(_year_page, { all: _2013, y: Object.keys({ _2013 })[0] });
});

router.get("/gallary/all/" + Object.keys({ _2014 })[0], function (req, res) {
  res.render(_year_page, { all: _2014, y: Object.keys({ _2014 })[0] });
});

router.get("/gallary/all/" + Object.keys({ _2015 })[0], function (req, res) {
  res.render(_year_page, { all: _2015, y: Object.keys({ _2015 })[0] });
});

router.get("/gallary/all/" + Object.keys({ _2016 })[0], function (req, res) {
  res.render(_year_page, { all: _2016, y: Object.keys({ _2016 })[0] });
});

router.get("/gallary/all/" + Object.keys({ _2017 })[0], function (req, res) {
  res.render(_year_page, { all: _2017, y: Object.keys({ _2017 })[0] });
});

router.get("/gallary/all/" + Object.keys({ _2018 })[0], function (req, res) {
  res.render(_year_page, { all: _2018, y: Object.keys({ _2018 })[0] });
});

router.get("/gallary/all/" + Object.keys({ _2019 })[0], function (req, res) {
  res.render(_year_page, { all: _2019, y: Object.keys({ _2019 })[0] });
});

router.get("/gallary/all/" + Object.keys({ _2020 })[0], function (req, res) {
  res.render(_year_page, { all: _2020, y: Object.keys({ _2020 })[0] });
});

router.get("/gallary/all/" + Object.keys({ _2021 })[0], function (req, res) {
  res.render(_year_page, { all: _2021, y: Object.keys({ _2021 })[0] });
});

router.get("/gallary/all/" + Object.keys({ _2022 })[0], function (req, res) {
  res.render(_year_page, { all: _2022, y: Object.keys({ _2022 })[0] });
});

router.get("/gallary/all/" + Object.keys({ _2023 })[0], function (req, res) {
  res.render(_year_page, { all: _2023, y: Object.keys({ _2023 })[0] });
});

router.get(
  "/gallary/all/" + Object.keys({ _instagram })[0],
  function (req, res) {
    res.render(_year_page, {
      all: _instagram,
      y: Object.keys({ _instagram })[0],
    });
  }
);

module.exports = router;

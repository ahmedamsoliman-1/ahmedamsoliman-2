var express = require("express");
var request = require("request");
const fs = require("fs");
var router = express.Router();

// https://l34s1zxiga.execute-api.us-east-1.amazonaws.com/prod/fellas

// let _api = "https://l34s1zxiga.execute-api.us-east-1.amazonaws.com/prod/fellas";

// request(_api, function (error, response, body) {
//   // console.log(body);
//   fs.writeFile("fellas.json", body, function (err) {
//     if (err) throw err;
//   });
// });

let toJSONData = JSON.parse(fs.readFileSync("public/data/fellas.json", "utf8"));

let _000 = toJSONData["000"];
let _2010 = toJSONData["2010"];
let _2015 = toJSONData["2015"];
let _2016 = toJSONData["2016"];
let _2017 = toJSONData["2017"];
let _2018 = toJSONData["2018"];
let _2019 = toJSONData["2019"];
let _2020 = toJSONData["2020"];
let _2021 = toJSONData["2021"];
let _2022 = toJSONData["2022"];
let _2023 = toJSONData["2023"];
let _2024 = toJSONData["2024"];
let _gd = toJSONData["gd"];

let _fellas_page = "f0ndated";

router.get("/gallary/fellas/" + Object.keys({ _000 })[0], function (req, res) {
  res.render(_fellas_page, { all: _000, y: Object.keys({ _000 })[0] });
});

router.get("/gallary/fellas/" + Object.keys({ _2010 })[0], function (req, res) {
  res.render(_fellas_page, { all: _2010, y: Object.keys({ _2010 })[0] });
});

router.get("/gallary/fellas/" + Object.keys({ _2015 })[0], function (req, res) {
  res.render(_fellas_page, { all: _2015, y: Object.keys({ _2015 })[0] });
});

router.get("/gallary/fellas/" + Object.keys({ _2016 })[0], function (req, res) {
  res.render(_fellas_page, { all: _2016, y: Object.keys({ _2016 })[0] });
});

router.get("/gallary/fellas/" + Object.keys({ _2017 })[0], function (req, res) {
  res.render(_fellas_page, { all: _2017, y: Object.keys({ _2017 })[0] });
});
router.get("/gallary/fellas/" + Object.keys({ _2018 })[0], function (req, res) {
  res.render(_fellas_page, { all: _2018, y: Object.keys({ _2018 })[0] });
});
router.get("/gallary/fellas/" + Object.keys({ _2019 })[0], function (req, res) {
  res.render(_fellas_page, { all: _2019, y: Object.keys({ _2019 })[0] });
});
router.get("/gallary/fellas/" + Object.keys({ _2020 })[0], function (req, res) {
  res.render(_fellas_page, { all: _2020, y: Object.keys({ _2020 })[0] });
});
router.get("/gallary/fellas/" + Object.keys({ _2021 })[0], function (req, res) {
  res.render(_fellas_page, { all: _2021, y: Object.keys({ _2021 })[0] });
});
router.get("/gallary/fellas/" + Object.keys({ _2022 })[0], function (req, res) {
  res.render(_fellas_page, { all: _2022, y: Object.keys({ _2022 })[0] });
});
router.get("/gallary/fellas/" + Object.keys({ _2023 })[0], function (req, res) {
  res.render(_fellas_page, { all: _2023, y: Object.keys({ _2023 })[0] });
});
router.get("/gallary/fellas/" + Object.keys({ _2024 })[0], function (req, res) {
  res.render(_fellas_page, { all: _2024, y: Object.keys({ _2024 })[0] });
});

router.get("/gallary/fellas/" + Object.keys({ _gd })[0], function (req, res) {
  res.render(_fellas_page, { all: _gd, y: Object.keys({ _gd })[0] });
});

module.exports = router;

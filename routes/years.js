var express = require("express");
var request = require("request");
var router = express.Router();

let _y = "https://s3.amazonaws.com/ahmedamsoliman-replica/IAM/Years/";

let _api = "https://n03534ugof.execute-api.us-east-1.amazonaws.com/prod/";

let _0ndated = _api + "0ndated";
let _2005 = _api + "2005";
let _2008 = _api + "2008";
let _2010 = _api + "2010";
let _2012 = _api + "2012";
let _2013 = _api + "2013";
let _2014 = _api + "2014";
let _2015 = _api + "2015";
let _2016 = _api + "2016";
let _2017 = _api + "2017";
let _2018 = _api + "2018";
let _2019 = _api + "2019";
let _2020 = _api + "2020";
let _2021 = _api + "2021";
let _2022 = _api + "2022";
let _2023 = _api + "2023";

let _year_page = "0ndated";

let options = { json: true };

router.get("/gallary/all/" + Object.keys({ _0ndated })[0], function (req, res) {
  request(_0ndated, options, (error, res, body) => {
    all = res.body;
  });
  res.render(_year_page, { all: all, y: Object.keys({ _0ndated })[0] });
});

router.get("/gallary/all/" + Object.keys({ _2005 })[0], function (req, res) {
  request(_2005, options, (error, res, body) => {
    all = res.body;
  });
  res.render(_year_page, { all: all, y: Object.keys({ _2005 })[0] });
});

router.get("/gallary/all/" + Object.keys({ _2008 })[0], function (req, res) {
  request(_2008, options, (error, res, body) => {
    all = res.body;
  });
  res.render(_year_page, { all: all, y: Object.keys({ _2008 })[0] });
});

router.get("/gallary/all/" + Object.keys({ _2010 })[0], function (req, res) {
  request(_2010, options, (error, res, body) => {
    all = res.body;
  });
  res.render(_year_page, { all: all, y: Object.keys({ _2010 })[0] });
});

router.get("/gallary/all/" + Object.keys({ _2012 })[0], function (req, res) {
  request(_2012, options, (error, res, body) => {
    all = res.body;
  });
  res.render(_year_page, { all: all, y: Object.keys({ _2012 })[0] });
});

router.get("/gallary/all/" + Object.keys({ _2013 })[0], function (req, res) {
  request(_2013, options, (error, res, body) => {
    all = res.body;
  });
  res.render(_year_page, { all: all, y: Object.keys({ _2013 })[0] });
});

router.get("/gallary/all/" + Object.keys({ _2014 })[0], function (req, res) {
  request(_2014, options, (error, res, body) => {
    all = res.body;
  });
  res.render(_year_page, { all: all, y: Object.keys({ _2014 })[0] });
});

router.get("/gallary/all/" + Object.keys({ _2015 })[0], function (req, res) {
  request(_2015, options, (error, res, body) => {
    all = res.body;
  });
  res.render(_year_page, { all: all, y: Object.keys({ _2015 })[0] });
});

router.get("/gallary/all/" + Object.keys({ _2016 })[0], function (req, res) {
  request(_2016, options, (error, res, body) => {
    all = res.body;
  });
  res.render(_year_page, { all: all, y: Object.keys({ _2016 })[0] });
});

router.get("/gallary/all/" + Object.keys({ _2017 })[0], function (req, res) {
  request(_2017, options, (error, res, body) => {
    all = res.body;
  });
  res.render(_year_page, { all: all, y: Object.keys({ _2017 })[0] });
});

router.get("/gallary/all/" + Object.keys({ _2018 })[0], function (req, res) {
  request(_2018, options, (error, res, body) => {
    all = res.body;
  });
  res.render(_year_page, { all: all, y: Object.keys({ _2018 })[0] });
});

router.get("/gallary/all/" + Object.keys({ _2019 })[0], function (req, res) {
  request(_2019, options, (error, res, body) => {
    all = res.body;
  });
  res.render(_year_page, { all: all, y: Object.keys({ _2019 })[0] });
});

router.get("/gallary/all/" + Object.keys({ _2020 })[0], function (req, res) {
  request(_2020, options, (error, res, body) => {
    all = res.body;
  });
  res.render(_year_page, { all: all, y: Object.keys({ _2020 })[0] });
});

router.get("/gallary/all/" + Object.keys({ _2021 })[0], function (req, res) {
  request(_2021, options, (error, res, body) => {
    all = res.body;
  });
  res.render(_year_page, { all: all, y: Object.keys({ _2021 })[0] });
});

router.get("/gallary/all/" + Object.keys({ _2022 })[0], function (req, res) {
  request(_2022, options, (error, res, body) => {
    all = res.body;
  });
  res.render(_year_page, { all: all, y: Object.keys({ _2022 })[0] });
});

router.get("/gallary/all/" + Object.keys({ _2023 })[0], function (req, res) {
  request(_2023, options, (error, res, body) => {
    all = res.body;
  });
  res.render(_year_page, { all: all, y: Object.keys({ _2023 })[0] });
});

module.exports = router;

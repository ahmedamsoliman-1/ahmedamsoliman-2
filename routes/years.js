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

let options = { json: true };

router.get("/gallary/all/0ndated", function (req, res) {
  request(_0ndated, options, (error, res, body) => {
    if (error) {
      return console.log(error);
    }

    if (!error && res.statusCode == 200) {
      all = res.body;
    }
  });
  res.render("years/0ndated", { all: all, y: "0ndated" });
});

router.get("/gallary/all/2005", function (req, res) {
  request(_2005, options, (error, res, body) => {
    if (error) {
      return console.log(error);
    }

    if (!error && res.statusCode == 200) {
      all = res.body;
    }
  });
  res.render("years/2005", { all: all, y: "2005" });
});

router.get("/gallary/all/2008", function (req, res) {
  request(_2008, options, (error, res, body) => {
    if (error) {
      return console.log(error);
    }

    if (!error && res.statusCode == 200) {
      all = res.body;
    }
  });
  res.render("years/2008", { all: all, y: "2008" });
});

router.get("/gallary/all/2010", function (req, res) {
  request(_2010, options, (error, res, body) => {
    if (error) {
      return console.log(error);
    }

    if (!error && res.statusCode == 200) {
      all = res.body;
    }
  });
  res.render("years/2010", { all: all, y: "2010" });
});

router.get("/gallary/all/2012", function (req, res) {
  request(_2012, options, (error, res, body) => {
    if (error) {
      return console.log(error);
    }

    if (!error && res.statusCode == 200) {
      all = res.body;
    }
  });
  res.render("years/2012", { all: all, y: "2012" });
});

router.get("/gallary/all/2013", function (req, res) {
  request(_2013, options, (error, res, body) => {
    if (error) {
      return console.log(error);
    }

    if (!error && res.statusCode == 200) {
      all = res.body;
    }
  });
  res.render("years/2013", { all: all, y: "2013" });
});

router.get("/gallary/all/2014", function (req, res) {
  request(_2014, options, (error, res, body) => {
    if (error) {
      return console.log(error);
    }

    if (!error && res.statusCode == 200) {
      all = res.body;
    }
  });
  res.render("years/2014", { all: all, y: "2014" });
});

router.get("/gallary/all/2015", function (req, res) {
  request(_2015, options, (error, res, body) => {
    if (error) {
      return console.log(error);
    }

    if (!error && res.statusCode == 200) {
      all = res.body;
    }
  });
  res.render("years/2015", { all: all, y: "2015" });
});

router.get("/gallary/all/2016", function (req, res) {
  request(_2016, options, (error, res, body) => {
    if (error) {
      return console.log(error);
    }

    if (!error && res.statusCode == 200) {
      all = res.body;
    }
  });
  res.render("years/2016", { all: all, y: "2016" });
});

router.get("/gallary/all/2017", function (req, res) {
  request(_2017, options, (error, res, body) => {
    if (error) {
      return console.log(error);
    }

    if (!error && res.statusCode == 200) {
      all = res.body;
    }
  });
  res.render("years/2017", { all: all, y: "2017" });
});

router.get("/gallary/all/2018", function (req, res) {
  request(_2018, options, (error, res, body) => {
    if (error) {
      return console.log(error);
    }

    if (!error && res.statusCode == 200) {
      all = res.body;
    }
  });
  res.render("years/2018", { all: all, y: "2018" });
});

router.get("/gallary/all/2019", function (req, res) {
  request(_2019, options, (error, res, body) => {
    if (error) {
      return console.log(error);
    }

    if (!error && res.statusCode == 200) {
      all = res.body;
    }
  });
  res.render("years/2019", { all: all, y: "2019" });
});

router.get("/gallary/all/2020", function (req, res) {
  request(_2020, options, (error, res, body) => {
    if (error) {
      return console.log(error);
    }

    if (!error && res.statusCode == 200) {
      all = res.body;
    }
  });
  res.render("years/2020", { all: all, y: "2020" });
});

router.get("/gallary/all/2021", function (req, res) {
  request(_2021, options, (error, res, body) => {
    if (error) {
      return console.log(error);
    }

    if (!error && res.statusCode == 200) {
      all = res.body;
    }
  });
  res.render("years/2021", { all: all, y: "2021" });
});

router.get("/gallary/all/2022", function (req, res) {
  request(_2022, options, (error, res, body) => {
    if (error) {
      return console.log(error);
    }

    if (!error && res.statusCode == 200) {
      all = res.body;
    }
  });
  res.render("years/2022", { all: all, y: "2022" });
});

router.get("/gallary/all/2023", function (req, res) {
  request(_2023, options, (error, res, body) => {
    if (error) {
      return console.log(error);
    }

    if (!error && res.statusCode == 200) {
      all = res.body;
    }
  });
  res.render("years/2023", { all: all, y: "2023" });
});

module.exports = router;

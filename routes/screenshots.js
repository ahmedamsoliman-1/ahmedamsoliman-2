const express = require("express");
const fs = require("fs");

const router = express.Router();

const screenshots_page = "screenshots";

const screenshots = JSON.parse(
  fs.readFileSync("public/data/screenshots.json", "utf8")
);
const screenshots_thumb = JSON.parse(
  fs.readFileSync("public/data/screenshots-thumb.json", "utf8")
);

// Thumbnails
let __2016 = screenshots_thumb["2016"];
let __2017 = screenshots_thumb["2017"];
let __2018 = screenshots_thumb["2018"];
let __2019 = screenshots_thumb["2019"];
let __2020 = screenshots_thumb["2020"];
let __2021 = screenshots_thumb["2021"];
let __2022 = screenshots_thumb["2022"];
let __2023 = screenshots_thumb["2023"];
let __2024 = screenshots_thumb["2024"];
let __2025 = screenshots_thumb["2025"];

// Full photo
let _2016 = screenshots["2016"];
let _2017 = screenshots["2017"];
let _2018 = screenshots["2018"];
let _2019 = screenshots["2019"];
let _2020 = screenshots["2020"];
let _2021 = screenshots["2021"];
let _2022 = screenshots["2022"];
let _2023 = screenshots["2023"];
let _2024 = screenshots["2024"];
let _2025 = screenshots["2025"];

router.get(
  "/gallary/screenshots/" + Object.keys({ _2016 })[0],
  function (req, res) {
    res.render(screenshots_page, {
      __all: __2016,
      _all: _2016,
      y: Object.keys({ _2016 })[0],
    });
  }
);

router.get(
  "/gallary/screenshots/" + Object.keys({ _2017 })[0],
  function (req, res) {
    res.render(screenshots_page, {
      __all: __2017,
      _all: _2017,
      y: Object.keys({ _2017 })[0],
    });
  }
);

router.get(
  "/gallary/screenshots/" + Object.keys({ _2018 })[0],
  function (req, res) {
    res.render(screenshots_page, {
      __all: __2018,
      _all: _2018,
      y: Object.keys({ _2018 })[0],
    });
  }
);

router.get(
  "/gallary/screenshots/" + Object.keys({ _2019 })[0],
  function (req, res) {
    res.render(screenshots_page, {
      __all: __2019,
      _all: _2019,
      y: Object.keys({ _2019 })[0],
    });
  }
);

router.get(
  "/gallary/screenshots/" + Object.keys({ _2020 })[0],
  function (req, res) {
    res.render(screenshots_page, {
      __all: __2020,
      _all: _2020,
      y: Object.keys({ _2020 })[0],
    });
  }
);

router.get(
  "/gallary/screenshots/" + Object.keys({ _2021 })[0],
  function (req, res) {
    res.render(screenshots_page, {
      __all: __2021,
      _all: _2021,
      y: Object.keys({ _2021 })[0],
    });
  }
);

router.get(
  "/gallary/screenshots/" + Object.keys({ _2022 })[0],
  function (req, res) {
    res.render(screenshots_page, {
      __all: __2022,
      _all: _2022,
      y: Object.keys({ _2022 })[0],
    });
  }
);

router.get(
  "/gallary/screenshots/" + Object.keys({ _2023 })[0],
  function (req, res) {
    res.render(screenshots_page, {
      __all: __2023,
      _all: _2023,
      y: Object.keys({ _2023 })[0],
    });
  }
);

router.get(
  "/gallary/screenshots/" + Object.keys({ _2024 })[0],
  function (req, res) {
    res.render(screenshots_page, {
      __all: __2024,
      _all: _2024,
      y: Object.keys({ _2024 })[0],
    });
  }
);

router.get(
  "/gallary/screenshots/" + Object.keys({ _2025 })[0],
  function (req, res) {
    res.render(screenshots_page, {
      __all: __2025,
      _all: _2025,
      y: Object.keys({ _2025 })[0],
    });
  }
);

module.exports = router;

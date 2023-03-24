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

// // aws_pic = [
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/01_02_Feb_2022_201_014813_835.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/01_02_Feb_2022_201_014813_899.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/01_02_Feb_2022_201_014813_926.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/01_08_Aug_2020_801_144601_075.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/01_08_Aug_2020_801_144826_404.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/01_08_Aug_2020_801_144826_405.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/01_08_Aug_2020_801_203711_672.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/01_10_Oct_2019_001_120723_185.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/01_10_Oct_2020_001_105920_198.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/01_11_Nov_2019_101_124048_529.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/01_11_Nov_2019_101_202100_349.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/01_12_Dec_2017_201_130039_600.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/01_12_Dec_2017_201_130102_377.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/01_12_Dec_2017_201_130123_671.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/01_12_Dec_2019_201_160743_522.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/01_12_Dec_2019_201_160803_580.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/01_12_Dec_2019_201_173556_580.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/02_02_Feb_2022_202_222758_511.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/02_02_Feb_2022_202_222833_562.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/02_02_Feb_2022_202_222849_293.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/02_02_Feb_2022_202_223011_309.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/02_04_Apr_2021_402_162034_613.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/02_04_Apr_2022_402_210823_968.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/02_05_May_2020_502_174204_905.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/02_05_May_2022_502_230925_391.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/02_10_Oct_2017_002_184704_560.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/02_10_Oct_2019_002_110002_976.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/02_11_Nov_2019_102_210219_094.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/02_11_Nov_2021_102_003457_994.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/02_12_Dec_2019_202_144006_163.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/02_12_Dec_2019_202_184859_003.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/02_12_Dec_2021_202_140402_060.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/02_12_Dec_2021_202_140402_123.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_01_Jan_2022_103_232001_926.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_01_Jan_2022_103_232001_989.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_01_Jan_2022_103_232002_030.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_01_Jan_2022_103_232002_087.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_01_Jan_2022_103_232002_186.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_05_May_2021_503_025536_886.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_05_May_2021_503_025536_947.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_07_Jul_2020_703_131724_442.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_10_Oct_2019_003_141014_186.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_10_Oct_2019_003_223754_429.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_10_Oct_2020_003_225127_865.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_11_Nov_2019_103_022617_459.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_11_Nov_2019_103_022734_591.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_11_Nov_2019_103_022901.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_11_Nov_2019_103_022913_030.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_11_Nov_2019_103_023127.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_11_Nov_2019_103_023140_389.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_11_Nov_2019_103_110039_068.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_11_Nov_2019_103_125028_589.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_11_Nov_2019_103_125415_158.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_11_Nov_2019_103_161554_508.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_11_Nov_2021_103_020136_344.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_11_Nov_2021_103_020136_476.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_11_Nov_2021_103_020136_599.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_11_Nov_2021_103_020136_649.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_11_Nov_2021_103_020136_685.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_11_Nov_2021_103_020136_760.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_12_Dec_2019_203_173406_292.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_12_Dec_2019_203_203726.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_12_Dec_2019_203_203744_822.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_12_Dec_2021_203_201054_290.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_12_Dec_2021_203_201054_437.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_12_Dec_2021_203_201054_551.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_12_Dec_2021_203_201054_643.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_12_Dec_2021_203_201054_719.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_12_Dec_2021_203_201054_770.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_12_Dec_2021_203_201054_826.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_12_Dec_2021_203_201054_865.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_12_Dec_2021_203_201054_898.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/03_12_Dec_2021_203_201054_943.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/04_02_Feb_2022_204_130909_523.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/04_02_Feb_2022_204_130909_609.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/04_02_Feb_2022_204_130909_688.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/04_02_Feb_2022_204_214456_397.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/04_02_Feb_2022_204_225532_585.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/04_02_Feb_2022_204_225611_495.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/04_03_Mar_2022_304_120240_915.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/04_03_Mar_2022_304_120240_981.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/04_06_Jun_2021_604_033909_323.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/04_09_Sep_2017_904_120238_861.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/04_09_Sep_2017_904_163528_730.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/04_09_Sep_2017_904_193931_250.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/04_10_Oct_2017_004_004443_717.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/04_10_Oct_2019_004_203755_709.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/04_11_Nov_2020_104_193936_544.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/04_12_Dec_2019_204_113823_193.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/05_01_Jan_2021_105_145426_657.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/05_01_Jan_2021_105_145503_343.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/05_02_Feb_2021_205_000237_170.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/05_02_Feb_2021_205_001557_405.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/05_05_May_2017_505_230649_571.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/05_06_Jun_2021_605_180638_803.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/05_09_Sep_2020_905_155253_369.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/05_11_Nov_2019_105_103521.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/05_11_Nov_2019_105_103527_241.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/05_11_Nov_2019_105_104651_852.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/05_11_Nov_2019_105_190524_019.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/05_11_Nov_2019_105_203545_379.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/05_12_Dec_2017_205_233431_033.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/05_12_Dec_2017_205_233658_337.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/05_12_Dec_2017_205_233815_388.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/05_12_Dec_2017_205_234658_087.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/05_12_Dec_2019_205_173238.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/05_12_Dec_2019_205_173403.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/05_12_Dec_2019_205_173412_628.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/05_12_Dec_2021_205_200753_417.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/05_12_Dec_2021_205_200753_478.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/06_02_Feb_2022_206_160146_830.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/06_02_Feb_2022_206_160146_924.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/06_02_Feb_2022_206_160146_970.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/06_02_Feb_2022_206_160146_992.jpg",
// //   "https://s3.amazonaws.com/ahmedalisolimanpics/06_02_Feb_2022_206_160147_026.jpg",
// // ];

// // var AWS = require("aws-sdk");
// // var https = require("https");
// const request = require("request");
// // AWS.config.loadFromPath("./config.json");
// // const s3 = new AWS.S3();

// // var lambda = new AWS.Lambda();

// // var return_s3_bucket_object_names = {
// //   FunctionName: "return_s3_bucket_object_names",
// // };

// let url = "https://s9xv7ukid9.execute-api.us-east-1.amazonaws.com/prod/all";
// // new url
// // let url = "https://n03534ugof.execute-api.us-east-1.amazonaws.com/prod/2008";

// let options = { json: true };

// request(url, options, (error, res, body) => {
//   if (error) {
//     return console.log(error);
//   }

//   if (!error && res.statusCode == 200) {
//     all = res.body;
//   }
// });

router.get("/gallary/all", function (req, res) {
  res.render("gallary/all");
});

module.exports = router;

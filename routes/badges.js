var express = require("express");
var request = require("request");
var router = express.Router();

let options = { json: true };

// function: https://us-east-1.console.aws.amazon.com/lambda/home?region=us-east-1#/functions/return_urls_certs_and_badges_2?tab=code
let new_url_2d =
  "https://bjessle3ffrosciqy5jklv46yu0bjqar.lambda-url.us-east-1.on.aws/";

router.get("/badges", function (req, res_o) {
  request(new_url_2d, options, (error, res, body) => {
    res_o.render("badges", {
      aws_badges: res.body["Badges"],
      aws_cert: res.body["Certifications"],
      aws_train: res.body["Trainning"],
      hcl: res.body["HCL"],
      sdn: res.body["SDN"],
      percipio: res.body["Percipio"],
      linkedin: res.body["Linkedin"],
      other: res.body["Others"],
    });
  });
});

module.exports = router;

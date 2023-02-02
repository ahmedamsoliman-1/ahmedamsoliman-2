var express = require("express");
var router = express.Router();

var AWS = require("aws-sdk");
require("dotenv").config();

AWS.config.region = "us-east-1"; // Region

var lambda = new AWS.Lambda();

var params_1 = { FunctionName: "return_s3_object_oau" };
var params_2 = { FunctionName: "return_s3_object_hcl" };
var params_3 = { FunctionName: "return_s3_object_sudanese" };

lambda.invoke(params_1, function (err, data) {
  if (err) console.log(err, err.stack);

  JSONdata_oau = JSON.parse(data.Payload);

  return JSONdata_oau;
});

lambda.invoke(params_2, function (err, data) {
  if (err) console.log(err, err.stack);

  JSONdata_hcl = JSON.parse(data.Payload);

  return JSONdata_hcl;
});

lambda.invoke(params_3, function (err, data) {
  if (err) console.log(err, err.stack);

  JSONdata_sudanese = JSON.parse(data.Payload);

  return JSONdata_sudanese;
});

router.get("/badges", function (req, res) {
  res.render("badges", {
    oau: JSONdata_oau,
    hcl: JSONdata_hcl,
    sudan: JSONdata_sudanese,
  });
});

module.exports = router;

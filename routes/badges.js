var express = require("express");
var router = express.Router();

var AWS = require("aws-sdk");
require("dotenv").config();

AWS.config.region = "us-east-1"; // Region

var lambda = new AWS.Lambda();

var params_1 = { FunctionName: "return_s3_object_oau" };
var params_2 = { FunctionName: "return_s3_object_hcl" };
var params_3 = { FunctionName: "return_s3_object_sudanese" };
var params_4 = { FunctionName: "return_s3_object_percipio" };
var params_5 = { FunctionName: "return_s3_object_aws" };
var params_6 = { FunctionName: "return_s3_object_linkedin" };
var params_7 = { FunctionName: "return_s3_object_other" };

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

lambda.invoke(params_4, function (err, data) {
  if (err) console.log(err, err.stack);
  JSONdata_percipio = JSON.parse(data.Payload);
  return JSONdata_percipio;
});

lambda.invoke(params_5, function (err, data) {
  if (err) console.log(err, err.stack);
  JSONdata_aws = JSON.parse(data.Payload);
  return JSONdata_aws;
});

lambda.invoke(params_6, function (err, data) {
  if (err) console.log(err, err.stack);
  JSONdata_linkedin = JSON.parse(data.Payload);
  return JSONdata_linkedin;
});

lambda.invoke(params_7, function (err, data) {
  if (err) console.log(err, err.stack);
  JSONdata_other = JSON.parse(data.Payload);
  return JSONdata_other;
});

router.get("/badges", function (req, res) {
  res.render("badges", {
    oau: JSONdata_oau,
    hcl: JSONdata_hcl,
    sudan: JSONdata_sudanese,
    percipio: JSONdata_percipio,
    awscert: JSONdata_aws,
    linkedin: JSONdata_linkedin,
    other: JSONdata_other,
  });
});

module.exports = router;

var express = require("express");
var request = require("request");
var router = express.Router();

let _api = "https://s9xv7ukid9.execute-api.us-east-1.amazonaws.com/prod/";

let url_linkedin = _api + "linkedin";
let url_oau = _api + "oau";
let url_others = _api + "others";
let url_sudanese = _api + "sudanese";
let url_hcl = _api + "hcl";
let url_percipio = _api + "percipio";
let url_aws = _api + "aws";

let all_urls =
  "https://xx6y4bkrsg.execute-api.us-east-1.amazonaws.com/prod/certs";

let options = { json: true };
// request(all_urls, options, (error, res, body) => {
//   console.log(res.body);
// });

request(url_linkedin, options, (error, res, body) => {
  JSONdata_linkedin = res.body;
});

request(url_oau, options, (error, res, body) => {
  JSONdata_oau = res.body;
});

request(url_others, options, (error, res, body) => {
  JSONdata_other = res.body;
});

request(url_sudanese, options, (error, res, body) => {
  JSONdata_sudanese = res.body;
});

request(url_hcl, options, (error, res, body) => {
  JSONdata_hcl = res.body;
});

request(url_percipio, options, (error, res, body) => {
  JSONdata_percipio = res.body;
});

request(url_aws, options, (error, res, body) => {
  JSONdata_aws_trainning = res.body[0];
  JSONdata_aws_badges = res.body[1];
  JSONdata_aws_certifications = res.body[2];
});

// var AWS = require("aws-sdk");
// AWS.config.loadFromPath("./config.json");
// const s3 = new AWS.S3();

// var lambda = new AWS.Lambda();

// var return_s3_object_linkedin = { FunctionName: "return_s3_object_linkedin" };
// var return_s3_object_other = { FunctionName: "return_s3_object_other" };
// var return_s3_object_percipio = { FunctionName: "return_s3_object_percipio" };
// var return_s3_object_sudanese = { FunctionName: "return_s3_object_sudanese" };
// var return_s3_object_oau = { FunctionName: "return_s3_object_oau" };
// var return_s3_object_hcl = { FunctionName: "return_s3_object_hcl" };
// var return_s3_object_aws = { FunctionName: "return_s3_object_aws" };

// lambda.invoke(return_s3_object_linkedin, function (err, data) {
//   if (err) console.log(err, err.stack);
//   JSONdata_linkedin = JSON.parse(data.Payload);
//   return JSONdata_linkedin;
// });

// lambda.invoke(return_s3_object_other, function (err, data) {
//   if (err) console.log(err, err.stack);
//   JSONdata_other = JSON.parse(data.Payload);
//   return JSONdata_other;
// });

// lambda.invoke(return_s3_object_percipio, function (err, data) {
//   if (err) console.log(err, err.stack);
//   JSONdata_percipio = JSON.parse(data.Payload);
//   return JSONdata_percipio;
// });

// lambda.invoke(return_s3_object_sudanese, function (err, data) {
//   if (err) console.log(err, err.stack);
//   JSONdata_sudanese = JSON.parse(data.Payload);
//   return JSONdata_sudanese;
// });

// lambda.invoke(return_s3_object_oau, function (err, data) {
//   if (err) console.log(err, err.stack);
//   JSONdata_oau = JSON.parse(data.Payload);
//   return JSONdata_oau;
// });

// lambda.invoke(return_s3_object_hcl, function (err, data) {
//   if (err) console.log(err, err.stack);
//   JSONdata_hcl = JSON.parse(data.Payload);
//   return JSONdata_hcl;
// });

// lambda.invoke(return_s3_object_aws, function (err, data) {
//   if (err) console.log(err, err.stack);
//   JSONdata_aws_trainning = JSON.parse(data.Payload)[0];
//   JSONdata_aws_badges = JSON.parse(data.Payload)[1];
//   JSONdata_aws_certifications = JSON.parse(data.Payload)[2];

//   return (
//     JSONdata_aws_trainning, JSONdata_aws_badges, JSONdata_aws_certifications
//   );
// });

// const BUCKET_NAME_AWS = "ahmedalimsoliman-aws-certs";

// const listObjectsInBucket = (bucketName) => {
//   var bucketParams = {
//     Bucket: bucketName,
//   };
//   s3.listObjects(bucketParams, async function (err, data) {
//     var links = [];
//     if (err) {
//       console.log("Error", err);
//     } else {
//       console.log("Success", data.Contents.length);
//     }
//   });
//   return s3.listObjects.str_inner;
// };

// JSONdata_oau = [
//   "https://s3.amazonaws.com/ahmedalimsoliman-oau-certs/Certificate_1.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-oau-certs/Certificate_2.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-oau-certs/Experience_OAU.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-oau-certs/Transcript_1.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-oau-certs/Transcript_2.jpg",
// ];
// JSONdata_hcl = [
//   "https://s3.amazonaws.com/ahmedalimsoliman-hcl-certs/10_2019__Export_Compliance.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-hcl-certs/10_2022__DevJr.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-hcl-certs/12_2019__COBEC.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-hcl-certs/12_2019__Coding_Concenpts.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-hcl-certs/2_2020__BAF.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-hcl-certs/2_2020__BCMS.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-hcl-certs/2_2022__Dimensions_Of_Data_Privacy.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-hcl-certs/2_2022__JBC.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-hcl-certs/3_2021__InformationSecurity.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-hcl-certs/3_2022__Orientation.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-hcl-certs/4_2022__Unit_Testing.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-hcl-certs/6_2019__ABAC.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-hcl-certs/9_2020__Information_Secuirity.jpg",
// ];
// JSONdata_sudanese = [
//   "https://s3.amazonaws.com/ahmedalimsoliman-sudanese-certs/Sudanese_Cert_2006_Ar_F.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-sudanese-certs/Sudanese_Cert_2006_En_B.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-sudanese-certs/Sudanese_Cert_2006_En_F.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-sudanese-certs/Sudanese_Cert_2007_Ar_F.jpg",
// ];
// JSONdata_percipio = [
//   "https://s3.amazonaws.com/ahmedalimsoliman-percipio-certs/AI.png",
//   "https://s3.amazonaws.com/ahmedalimsoliman-percipio-certs/Cluture Impacts.png",
//   "https://s3.amazonaws.com/ahmedalimsoliman-percipio-certs/Coaching.png",
//   "https://s3.amazonaws.com/ahmedalimsoliman-percipio-certs/Conflict.png",
//   "https://s3.amazonaws.com/ahmedalimsoliman-percipio-certs/Effective Team.png",
//   "https://s3.amazonaws.com/ahmedalimsoliman-percipio-certs/Expert Insights.png",
//   "https://s3.amazonaws.com/ahmedalimsoliman-percipio-certs/Getting Expect.png",
//   "https://s3.amazonaws.com/ahmedalimsoliman-percipio-certs/Negotiation.png",
//   "https://s3.amazonaws.com/ahmedalimsoliman-percipio-certs/Performance.png",
//   "https://s3.amazonaws.com/ahmedalimsoliman-percipio-certs/Presentation.png",
//   "https://s3.amazonaws.com/ahmedalimsoliman-percipio-certs/Team Goals.png",
// ];
// JSONdata_aws = [
//   "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/Solutions Architect.png",
//   "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/AWS Architecting.png",
//   "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/Cloud Practitioner.png",
// ];
// JSONdata_aws_pdf = [
//   "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/AWS Backup Primer.pdf",
//   "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/AWS CloudFormation.pdf",
//   "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/AWS Compute Services.pdf",
//   "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/AWS EBS.pdf",
//   "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/AWS Foundations Cost Management.pdf",
//   "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/AWS Lambda Foundations.pdf",
//   "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/AWS Migration Evaluator Overview.pdf",
//   "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/AWS Network Connectivity Options.pdf",
//   "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/AWS Networking Basics.pdf",
//   "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/AWS Security Identity and Compliance.pdf",
//   "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/AWS Simple Storage S3.pdf",
//   "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/AWS Storage.pdf",
//   "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/AWS System Manger.pdf",
//   "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/AWS Technical Essentials.pdf",
//   "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/AWS Volume Gateway.pdf",
//   "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/Amazon API Gateway.pdf",
//   "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/Amazon DynamoDB.pdf",
//   "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/Amazon RDS Service Prime.pdf",
//   "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/Amazon Route 53.pdf",
//   "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/Amazon S3 File Gateway.pdf",
//   "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/Database Offerings.pdf",
//   "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/Introduction to AWS IAM.pdf",
//   "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/Monitoring and Troubleshooting.pdf",
// ];
// // JSONdata_linkedin = [
//   "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/Advanced Python.png",
//   "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/Algorithms.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/Cpp Code Clinic.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/Cpp LinkedIn.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/Cpp Move Semantics.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/Cpp Smart Pointers.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/Cpp.png",
//   "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/CppDeveloper.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/DataStructures.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/Docker.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/GitLab.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/InterpersonalCommunication.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/InterpersonalCommunicationPMI.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/IoT.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/Jira.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/Learning Cpp.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/LearningToBeApproachable.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/OOP.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/Problem Solving Techniques PMI.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/Problem Solving Techniques.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/Regex.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/SoftwareDesignCode&DesignSmells.jpg",
// ];
// JSONdata_other = [
//   "https://s3.amazonaws.com/ahmedalimsoliman-other-certs/Cpp.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-other-certs/Nanodegree_Cpp.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-other-certs/SQL.jpg",

//   "https://s3.amazonaws.com/ahmedalimsoliman-other-certs/Excellenc_Arche.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-other-certs/Excellenc_Win.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-other-certs/CCNA_KYM.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-other-certs/CCTV_KYM.jpg",
//   "https://s3.amazonaws.com/ahmedalimsoliman-other-certs/IELTS.jpg",
// ];

router.get("/badges", function (req, res) {
  res.render("badges", {
    oau: JSONdata_oau,
    hcl: JSONdata_hcl,
    sudan: JSONdata_sudanese,
    percipio: JSONdata_percipio,
    aws_cert: JSONdata_aws_certifications,
    aws_badges: JSONdata_aws_badges,
    aws_train: JSONdata_aws_trainning,
    linkedin: JSONdata_linkedin,
    other: JSONdata_other,
  });
});

module.exports = router;

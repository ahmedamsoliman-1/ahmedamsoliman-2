var express = require("express");
var router = express.Router();

JSONdata_oau = [
  "https://s3.amazonaws.com/ahmedalimsoliman-oau-certs/Certificate_1.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-oau-certs/Certificate_2.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-oau-certs/Experience_OAU.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-oau-certs/Transcript_1.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-oau-certs/Transcript_2.jpg",
];
JSONdata_hcl = [
  "https://s3.amazonaws.com/ahmedalimsoliman-hcl-certs/10_2019__Export_Compliance.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-hcl-certs/10_2022__DevJr.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-hcl-certs/12_2019__COBEC.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-hcl-certs/12_2019__Coding_Concenpts.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-hcl-certs/2_2020__BAF.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-hcl-certs/2_2020__BCMS.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-hcl-certs/2_2022__Dimensions_Of_Data_Privacy.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-hcl-certs/2_2022__JBC.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-hcl-certs/3_2021__InformationSecurity.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-hcl-certs/3_2022__Orientation.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-hcl-certs/4_2022__Unit_Testing.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-hcl-certs/6_2019__ABAC.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-hcl-certs/9_2020__Information_Secuirity.jpg",
];
JSONdata_sudanese = [
  "https://s3.amazonaws.com/ahmedalimsoliman-sudanese-certs/Sudanese_Cert_2006_Ar_F.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-sudanese-certs/Sudanese_Cert_2006_En_B.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-sudanese-certs/Sudanese_Cert_2006_En_F.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-sudanese-certs/Sudanese_Cert_2007_Ar_F.jpg",
];
JSONdata_percipio = [
  "https://s3.amazonaws.com/ahmedalimsoliman-percipio-certs/AI.png",
  "https://s3.amazonaws.com/ahmedalimsoliman-percipio-certs/Cluture Impacts.png",
  "https://s3.amazonaws.com/ahmedalimsoliman-percipio-certs/Coaching.png",
  "https://s3.amazonaws.com/ahmedalimsoliman-percipio-certs/Conflict.png",
  "https://s3.amazonaws.com/ahmedalimsoliman-percipio-certs/Effective Team.png",
  "https://s3.amazonaws.com/ahmedalimsoliman-percipio-certs/Expert Insights.png",
  "https://s3.amazonaws.com/ahmedalimsoliman-percipio-certs/Getting Expect.png",
  "https://s3.amazonaws.com/ahmedalimsoliman-percipio-certs/Negotiation.png",
  "https://s3.amazonaws.com/ahmedalimsoliman-percipio-certs/Performance.png",
  "https://s3.amazonaws.com/ahmedalimsoliman-percipio-certs/Presentation.png",
  "https://s3.amazonaws.com/ahmedalimsoliman-percipio-certs/Team Goals.png",
];
JSONdata_aws = [
  "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/Cloud Practitioner.png",
];
JSONdata_aws_pdf = [
  "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/AWS Compute Services.pdf",
  "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/AWS EBS.pdf",
  "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/AWS Networking Basics.pdf",
  "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/AWS Security Identity and Compliance.pdf",
  "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/AWS Simple Storage S3.pdf",
  "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/AWS Storage.pdf",
  "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/AWS Technical Essentials.pdf",
  "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/Amazon API Gateway.pdf",
  "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/Amazon DynamoDB.pdf",
  "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/Amazon RDS Service Prime.pdf",
  "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/Amazon Route 53.pdf",
  "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/Database Offerings.pdf",
  "https://s3.amazonaws.com/ahmedalimsoliman-aws-certs/aws-trainning/Introduction to AWS IAM.pdf",
];
JSONdata_linkedin = [
  "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/Advanced Python.png",
  "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/Algorithms.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/Cpp Code Clinic.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/Cpp LinkedIn.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/Cpp Move Semantics.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/Cpp Smart Pointers.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/Cpp.png",
  "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/CppDeveloper.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/DataStructures.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/Docker.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/GitLab.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/InterpersonalCommunication.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/InterpersonalCommunicationPMI.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/IoT.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/Jira.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/Learning Cpp.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/LearningToBeApproachable.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/OOP.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/Problem Solving Techniques PMI.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/Problem Solving Techniques.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/Regex.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-linkedin-certs/SoftwareDesignCode&DesignSmells.jpg",
];
JSONdata_other = [
  "https://s3.amazonaws.com/ahmedalimsoliman-other-certs/Cpp.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-other-certs/Nanodegree_Cpp.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-other-certs/SQL.jpg",

  "https://s3.amazonaws.com/ahmedalimsoliman-other-certs/Excellenc_Arche.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-other-certs/Excellenc_Win.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-other-certs/CCNA_KYM.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-other-certs/CCTV_KYM.jpg",
  "https://s3.amazonaws.com/ahmedalimsoliman-other-certs/IELTS.jpg",
];

// const AWS = require("aws-sdk");
// const s3 = new AWS.S3({
//   accessKeyId: "AKIAWKYYNFDWZE34KSBM",
//   secretAccessKey: "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",
// });
// const BUCKET_NAME_AWS = "ahmedalimsoliman-aws-certs";
// const BUCKET_NAME_OAU = "ahmedalimsoliman-oau-certs";

// const listBuckets = (s3) => {
//   s3.listBuckets(function (err, data) {
//     if (err) {
//       console.log("Error", err);
//     } else {
//       console.log("Success", data.Buckets);
//     }
//   });
// };

// // listBuckets(s3)

// const listObjectsInBucket = (bucketName) => {
//   var bucketParams = {
//     Bucket: bucketName,
//   };
//   let outer_arr = [];

//   s3.listObjects(bucketParams, function (err, data) {
//     var links = [];
//     if (err) {
//       console.log("Error", err);
//     } else {
//       console.log("Success", data.Contents.length);

//       // outer_arr = data.Contents;

//       for (const id in data.Contents) {
//         outer_arr.push(
//           "https://s3.amazonaws.com/ahmedalimsoliman-oau-certs/" +
//             data.Contents[id].Key
//         );
//       }
//     }

//     // return outer_arr;
//     // console.log(outer_arr);
//   });
//   return outer_arr;
// };

// console.log(listObjectsInBucket(BUCKET_NAME_OAU));

router.get("/badges", function (req, res) {
  res.render("badges", {
    oau: JSONdata_oau,
    hcl: JSONdata_hcl,
    sudan: JSONdata_sudanese,
    percipio: JSONdata_percipio,
    awscert: JSONdata_aws,
    aws_pdf: JSONdata_aws_pdf,
    linkedin: JSONdata_linkedin,
    other: JSONdata_other,
  });
});

module.exports = router;

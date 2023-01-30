

var AWS = require('aws-sdk');
require('dotenv').config();

const { json } = require('body-parser');

// you shouldn't hardcode your keys in production! See http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html
// AWS.config.update({accessKeyId: process.env.accessKeyId, secretAccessKey: process.env.secretAccessKey});
AWS.config.region = 'us-east-1'; // Region

var lambda = new AWS.Lambda();
var params = {
  FunctionName: 'return_s3_bucket_object_names'
};

lambda.invoke(params, function(err, data) {
  if (err) console.log(err, err.stack); 
  
  JSONdata = JSON.parse(data.Payload);

  console.log(process.env.region)
  return JSONdata;
});






var AWS = require('aws-sdk');
const { json } = require('body-parser');

// you shouldn't hardcode your keys in production! See http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html
AWS.config.update({accessKeyId: 'AKIAWKYYNFDWZ5MOTNNY', secretAccessKey: 'NUpNDUm8s/ix5SorrxpvriUGJplZaTxqurt4lovI'});
AWS.config.region = 'us-east-1'; // Region

var lambda = new AWS.Lambda();
var params = {
  FunctionName: 'return_s3_bucket_object_names'
};

lambda.invoke(params, function(err, data) {
  if (err) console.log(err, err.stack); 
  
  JSONdata = JSON.parse(data.Payload);

  return JSONdata;
  
  // JSONdata.forEach(element => {
  //   console.log(element.split("ahmedalisolimanpics/")[1])
  // });
});



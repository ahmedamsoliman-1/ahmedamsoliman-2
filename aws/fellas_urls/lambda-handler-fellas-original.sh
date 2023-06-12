#!/bin/bash

# Variables
stack='list-urls-fellas-original-lambda-function-1'
basic="lambda-handler-fellas-original"


# Const
profile="r53-us-east-1"
bucket='us.zipped.ahmedalimsoliman.click'
template='lambda.yml'


source=$basic.py
destination=basic.zip
handler=$basic.lambda_handler


# perform zipping ...
py ../zipper.py $source $destination

# upload ziiped file to s3 bucket
aws s3 cp \
    --profile $profile \
    $destination "s3://$bucket/$basic/$destination"


aws cloudformation validate-template \
    --template-body file://$template \
    --profile $profile

aws cloudformation deploy \
    --stack-name $stack \
    --capabilities CAPABILITY_IAM \
    --profile $profile \
    --parameter-overrides \
      S3KeyName=$basic/$source \
      LambdaHandler=$handler \
      S3BucketName=$bucket \
    --template-file $template

aws cloudformation wait \
    stack-create-complete \
    --profile $profile \
    --stack-name $stack

# Remove zipped file
rm $destination


sleep 6s
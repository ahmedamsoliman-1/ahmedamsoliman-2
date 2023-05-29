#!/bin/bash

profile="aams-1-us-east-1"
stack='get-all-videos-urls-lambda-stack-7'
template='lambda.yml'

aws cloudformation validate-template \
    --template-body file://$template \
    --profile $profile

# aws cloudformation create-stack \
#     --stack-name $stack \
#     --capabilities CAPABILITY_IAM \
#     --profile $profile \
#     --template-body file://$template

# aws cloudformation wait \
#     stack-create-complete \
#     --profile $profile \
#     --stack-name $stack



aws cloudformation update-stack \
    --stack-name $stack  \
    --capabilities CAPABILITY_IAM \
    --profile $profile \
    --template-body file://$template

aws cloudformation wait \
    stack-update-complete \
    --profile $profile \
    --stack-name $stack






# aws cloudformation describe-stacks \
#     --profile $profile \
#     --stack-name $stack \
#     --query "Stacks[0].Outputs[?OutputKey=='LambdaFunctionName'].OutputValue" \
#     --output text



# FUNCTION_NAME=$(aws cloudformation describe-stacks \
#   --profile $profile \
#   --stack-name $stack \
#   --query "Stacks[0].Outputs[?OutputKey=='LambdaFunctionName'].OutputValue" \
#   --output text)


# aws lambda invoke \
#   --function-name $FUNCTION_NAME \
#   --profile $profile \
#   $(tty) > /dev/null

sleep 6s
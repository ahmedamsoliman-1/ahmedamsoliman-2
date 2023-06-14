#!/bin/bash

# Variables
var='certs-original'

# Const
stack='ahmedalimsoliman-click-1'
profile='aams-1-us-east-1'
template='ahmedalimsoliman.click.yml'

aws cloudformation validate-template \
    --template-body file://$template \
    --profile $profile

aws cloudformation deploy \
    --stack-name $stack \
    --capabilities CAPABILITY_IAM \
    --profile $profile \
    --template-file $template


sleep 6s
import boto3
profile="aams-1-us-east-1"

# Create a Boto3 client for AWS Lambda
session = boto3.Session(profile_name=profile)
lambda_client = session.client('lambda')


# Retrieve a list of Lambda functions
response = lambda_client.list_functions()

# Retrieve and print the function URL for each Lambda function
for function in response['Functions']:
    function_name = function['FunctionName']
    
    # Retrieve the function URL configuration
    function_url_configs = lambda_client.list_function_url_configs(FunctionName=function_name)
    
    # Extract the function URL from the configuration
    function_url = function_url_configs['FunctionUrlConfigs'][0]['FunctionUrl']
    
    print(f"Function Name: {function_name}")
    print(f"Function URL: {function_url}")
    print()


    # Invoke the Lambda function
    invoke_response = lambda_client.invoke(
        FunctionName=function_name,
        InvocationType='RequestResponse'
    )
    
    # Extract the response payload
    payload = invoke_response['Payload'].read().decode('utf-8')
    
    # Write the response JSON to a file
    filename = f"{function_name}_response.json"
    with open(filename, 'w') as file:
        file.write(payload)
    
    print(f"Invoked function: {function_name}")
    print(f"Response written to file: {filename}")
    print()

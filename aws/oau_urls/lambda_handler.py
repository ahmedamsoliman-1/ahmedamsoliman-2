import boto3
import socket


bucket_2 = "ahmedamsoliman-replica"

if socket.gethostname() == "AAMSThinkPadX1":
    session = boto3.Session(profile_name="aams-1")
    s3 = session.client("s3")
else:
    s3 = boto3.client("s3")


def get_all_s3_objects(s3, **base_kwargs):
    continuation_token = None
    while True:
        list_kwargs = dict(MaxKeys=1000, **base_kwargs)
        if continuation_token:
            list_kwargs["ContinuationToken"] = continuation_token
        response = s3.list_objects_v2(**list_kwargs)
        yield from response.get("Contents", [])
        if not response.get("IsTruncated"):  # At the end of the list?
            break
        continuation_token = response.get("NextContinuationToken")


def lambda_handler(event, context):
    fixed = "https://s3.amazonaws.com/ahmedamsoliman-replica/"

    _oau = []

    for file in get_all_s3_objects(s3, Bucket=bucket_2, Prefix=f"OAU"):
        if "pptx" in file["Key"]:
            pass
        else:
            _oau.append(fixed + file["Key"])

    oau = {"oau": _oau}
    return oau


if socket.gethostname() == "AAMSThinkPadX1":
    res = lambda_handler(None, None)
    with open("urls.txt", "w") as f:
        for i in res:
            f.write(i + "\n")
            for j in res[i]:
                f.write(j + "\n")

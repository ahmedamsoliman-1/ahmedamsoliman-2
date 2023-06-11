import boto3
import socket


bucket = "pics.screenshots.ahmedalimsoliman.click"
region = "me-central-1"
uae_profile = "route53-me-central-1"

if socket.gethostname() == "AAMSThinkPadX1":
    session = boto3.Session(profile_name=uae_profile)
    s3 = session.client("s3")
else:
    s3 = boto3.client("s3", region_name=region)
    # s3 = boto3.client("s3")


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
    fixed = "https://s3.me-central-1.amazonaws.com/pics.screenshots.ahmedalimsoliman.click/"

    years = {
        "2016": [],
        "2017": [],
        "2018": [],
        "2019": [],
        "2020": [],
        "2021": [],
        "2022": [],
        "2023": []
    }

    for year in years.keys():
        prefix = f"{year}/"
        files = get_all_s3_objects(s3, Bucket=bucket, Prefix=prefix)
        years[year].extend(fixed + file["Key"] for file in files)

    return years



if socket.gethostname() == "AAMSThinkPadX1":
    res = lambda_handler(None, None)
    with open("urls.txt", "w") as f:
        for i in res:
            f.write(i + "\n")
            for j in res[i]:
                f.write(j + "\n")

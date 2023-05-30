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

    _0NDATED = []
    _2005 = []
    _2008 = []

    _2010 = []
    _2012 = []
    _2013 = []
    _2014 = []
    _2015 = []
    _2016 = []
    _2017 = []
    _2018 = []
    _2019 = []

    _2020 = []
    _2021 = []
    _2022 = []
    _2023 = []

    _instagram = []

    for file in get_all_s3_objects(s3, Bucket=bucket_2, Prefix=f"IAM/Years/0NDATED"):
        _0NDATED.append(fixed + file["Key"])
    
    for file in get_all_s3_objects(s3, Bucket=bucket_2, Prefix=f"IAM/Years/2005"):
        _2005.append(fixed + file["Key"])
    for file in get_all_s3_objects(s3, Bucket=bucket_2, Prefix=f"IAM/Years/2008"):
        _2008.append(fixed + file["Key"])

    for file in get_all_s3_objects(s3, Bucket=bucket_2, Prefix=f"IAM/Years/2010"):
        _2010.append(fixed + file["Key"])
    for file in get_all_s3_objects(s3, Bucket=bucket_2, Prefix=f"IAM/Years/2012"):
        _2012.append(fixed + file["Key"])
    for file in get_all_s3_objects(s3, Bucket=bucket_2, Prefix=f"IAM/Years/2013"):
        _2013.append(fixed + file["Key"])
    for file in get_all_s3_objects(s3, Bucket=bucket_2, Prefix=f"IAM/Years/2014"):
        _2014.append(fixed + file["Key"])
    for file in get_all_s3_objects(s3, Bucket=bucket_2, Prefix=f"IAM/Years/2015"):
        _2015.append(fixed + file["Key"])
    for file in get_all_s3_objects(s3, Bucket=bucket_2, Prefix=f"IAM/Years/2016"):
        _2016.append(fixed + file["Key"])
    for file in get_all_s3_objects(s3, Bucket=bucket_2, Prefix=f"IAM/Years/2017"):
        _2017.append(fixed + file["Key"])
    for file in get_all_s3_objects(s3, Bucket=bucket_2, Prefix=f"IAM/Years/2018"):
        _2018.append(fixed + file["Key"])
    for file in get_all_s3_objects(s3, Bucket=bucket_2, Prefix=f"IAM/Years/2019"):
        _2019.append(fixed + file["Key"])

    for file in get_all_s3_objects(s3, Bucket=bucket_2, Prefix=f"IAM/Years/2020"):
        _2020.append(fixed + file["Key"])
    for file in get_all_s3_objects(s3, Bucket=bucket_2, Prefix=f"IAM/Years/2021"):
        _2021.append(fixed + file["Key"])
    for file in get_all_s3_objects(s3, Bucket=bucket_2, Prefix=f"IAM/Years/2022"):
        _2022.append(fixed + file["Key"])
    for file in get_all_s3_objects(s3, Bucket=bucket_2, Prefix=f"IAM/Years/2023"):
        _2023.append(fixed + file["Key"])

    for file in get_all_s3_objects(s3, Bucket=bucket_2, Prefix=f"IAM/Instagram"):
        _instagram.append(fixed + file["Key"])

    years = {
        "0NDATED": _0NDATED,
        "2005": _2005,
        "2008": _2008,
        "2010": _2010,
        "2012": _2012,
        "2013": _2013,
        "2014": _2014,
        "2015": _2015,
        "2016": _2016,
        "2017": _2017,
        "2018": _2018,
        "2019": _2019,
        "2020": _2020,
        "2021": _2021,
        "2022": _2022,
        "2023": _2023,
        "instagram": _instagram,
    }
    return years


if socket.gethostname() == "AAMSThinkPadX1":
    res = lambda_handler(None, None)
    with open("urls.txt", "w") as f:
        for i in res:
            f.write(i + "\n")
            for j in res[i]:
                f.write(j + "\n")

import boto3
from botocore.client import Config
import datetime

# Liara storage credentials
ACCESS_KEY = 'qsigin6mu759c9h6'
SECRET_KEY = 'fe252bda-587d-4cdf-ad33-9ecf3e565505'
BUCKET_NAME = 'szkblog'
ENDPOINT = 'https://storage.c2.liara.space'

# Create S3 client
s3 = boto3.client(
    's3',
    aws_access_key_id=ACCESS_KEY,
    aws_secret_access_key=SECRET_KEY,
    endpoint_url=ENDPOINT,
    config=Config(signature_version='s3v4')
)

# Object key
OBJECT_KEY = 'fdhfxjcgh.mp4'

# Generate pre-signed URL valid for 1 hour
try:
    presigned_url = s3.generate_presigned_url(
        'get_object',
        Params={'Bucket': BUCKET_NAME, 'Key': OBJECT_KEY},
        ExpiresIn=3600  # 1 hour
    )
    print(f"Pre-signed URL: {presigned_url}")
except Exception as e:
    print(f"Error generating pre-signed URL: {e}")

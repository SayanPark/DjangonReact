import boto3
import os

def check_bucket_access():
    access_key = os.getenv('LIARA_ACCESS_KEY')
    secret_key = os.getenv('LIARA_SECRET_KEY')
    bucket_name = os.getenv('BUCKET_NAME')
    endpoint_url = os.getenv('LIARA_ENDPOINT_URL')

    if not all([access_key, secret_key, bucket_name, endpoint_url]):
        print("One or more required environment variables are missing.")
        print(f"LIARA_ACCESS_KEY: {access_key}")
        print(f"LIARA_SECRET_KEY: {'set' if secret_key else None}")
        print(f"BUCKET_NAME: {bucket_name}")
        print(f"LIARA_ENDPOINT_URL: {endpoint_url}")
        return

    s3_client = boto3.client(
        's3',
        endpoint_url=endpoint_url,
        aws_access_key_id=access_key,
        aws_secret_access_key=secret_key
    )

    try:
        response = s3_client.list_objects_v2(Bucket=bucket_name)
        files = [obj['Key'] for obj in response.get('Contents', [])]
        print(f"Files in bucket '{bucket_name}':")
        for f in files:
            print(f" - {f}")
    except Exception as e:
        print(f"Error accessing bucket: {e}")

if __name__ == "__main__":
    check_bucket_access()

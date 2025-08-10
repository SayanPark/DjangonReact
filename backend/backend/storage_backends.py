from storages.backends.s3boto3 import S3Boto3Storage
from django.conf import settings

class MediaStorage(S3Boto3Storage):
    location = 'media'
    file_overwrite = False
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.bucket_name = settings.AWS_STORAGE_BUCKET_NAME
        self.custom_domain = settings.AWS_S3_CUSTOM_DOMAIN

class UserImageStorage(S3Boto3Storage):
    location = 'media/users'
    file_overwrite = False
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.bucket_name = settings.AWS_STORAGE_BUCKET_NAME
        self.custom_domain = settings.AWS_S3_CUSTOM_DOMAIN

class PostImageStorage(S3Boto3Storage):
    location = 'media/posts'
    file_overwrite = False
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.bucket_name = settings.AWS_STORAGE_BUCKET_NAME
        self.custom_domain = settings.AWS_S3_CUSTOM_DOMAIN

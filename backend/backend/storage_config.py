"""
Storage configuration for handling persistent file uploads
"""
import os
from django.conf import settings
from storages.backends.s3boto3 import S3Boto3Storage

def ensure_media_directories():
    """Ensure media directories exist"""
    media_root = settings.MEDIA_ROOT
    directories = [
        os.path.join(media_root, 'image'),
        os.path.join(media_root, 'ckeditor_uploads'),
    ]
    
    for directory in directories:
        if not os.path.exists(directory):
            os.makedirs(directory, exist_ok=True)

def get_media_url(file_path):
    """Generate full media URL for a file"""
    if not file_path:
        return None
    
    # Handle both relative and absolute paths
    if str(file_path).startswith('http'):
        return str(file_path)
    
    return f"{settings.MEDIA_URL}{file_path}"

class LiaraStorage(S3Boto3Storage):
    bucket_name = settings.AWS_STORAGE_BUCKET_NAME
    custom_domain = settings.AWS_S3_CUSTOM_DOMAIN
    file_overwrite = False
    default_acl = 'public-read'

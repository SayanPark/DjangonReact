"""
Storage configuration for handling persistent file uploads
"""
import os
from django.conf import settings

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

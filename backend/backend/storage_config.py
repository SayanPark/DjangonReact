"""
Storage configuration for handling persistent file uploads in Liara deployment
"""
import os
import logging
from django.conf import settings

logger = logging.getLogger(__name__)

def ensure_media_directories():
    """Ensure media directories exist - adapted for Liara read-only filesystem"""
    # Skip directory creation in production (Liara handles this via disk mounts)
    if os.environ.get('LIARA_APP_NAME'):
        logger.info("Running in Liara environment - skipping directory creation")
        return
    
    # Only create directories in development
    media_root = settings.MEDIA_ROOT
    directories = [
        os.path.join(media_root, 'image'),
        os.path.join(media_root, 'ckeditor_uploads'),
    ]
    
    for directory in directories:
        try:
            if not os.path.exists(directory):
                os.makedirs(directory, exist_ok=True)
                logger.info(f"Created directory: {directory}")
        except OSError as e:
            logger.warning(f"Could not create directory {directory}: {e}")

def get_media_url(file_path):
    """Generate full media URL for a file"""
    if not file_path:
        return None
    
    # Handle both relative and absolute paths
    if str(file_path).startswith('http'):
        return str(file_path)
    
    return f"{settings.MEDIA_URL}{file_path}"

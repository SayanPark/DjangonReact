"""
Image utilities for handling base64 encoding/decoding
"""
import base64
import imghdr
from django.core.exceptions import ValidationError


def validate_base64_image(base64_string):
    """
    Validate if the base64 string is a valid image
    """
    if not base64_string:
        return None
    
    try:
        # Decode base64 string
        image_data = base64.b64decode(base64_string)
        
        # Check if it's a valid image
        image_type = imghdr.what(None, image_data)
        if image_type not in ['jpeg', 'jpg', 'png', 'gif', 'webp']:
            raise ValidationError("Invalid image format. Only JPEG, PNG, GIF, and WebP are supported.")
        
        return image_data
    except Exception:
        raise ValidationError("Invalid base64 image data")


def get_image_from_base64(base64_string):
    """
    Convert base64 string to image data
    """
    if not base64_string:
        return None
    
    try:
        return base64.b64decode(base64_string)
    except Exception:
        return None


def get_base64_from_image_file(image_file):
    """
    Convert image file to base64 string
    """
    if not image_file:
        return None
    
    try:
        image_content = image_file.read()
        return base64.b64encode(image_content).decode('utf-8')
    except Exception:
        return None


def get_image_mime_type(base64_string):
    """
    Get MIME type from base64 image
    """
    if not base64_string:
        return None
    
    try:
        image_data = base64.b64decode(base64_string)
        image_type = imghdr.what(None, image_data)
        
        mime_types = {
            'jpeg': 'image/jpeg',
            'jpg': 'image/jpeg',
            'png': 'image/png',
            'gif': 'image/gif',
            'webp': 'image/webp'
        }
        
        return mime_types.get(image_type, 'application/octet-stream')
    except Exception:
        return 'application/octet-stream'


def get_image_size(base64_string):
    """
    Get image size in bytes from base64 string
    """
    if not base64_string:
        return 0
    
    try:
        image_data = base64.b64decode(base64_string)
        return len(image_data)
    except Exception:
        return 0

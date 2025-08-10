"""
Cloud storage service for handling file uploads to Liara (S3-compatible storage)
"""
import os
import uuid
from typing import Optional, Dict, Any
from django.conf import settings
import boto3
from botocore.exceptions import ClientError
import logging

logger = logging.getLogger(__name__)

class CloudStorageService:
    """Service for handling cloud storage operations"""
    
    def __init__(self):
        self.bucket_name = settings.AWS_STORAGE_BUCKET_NAME
        self.endpoint_url = settings.AWS_S3_ENDPOINT_URL
        self.access_key = settings.AWS_ACCESS_KEY_ID
        self.secret_key = settings.AWS_SECRET_ACCESS_KEY
        
        # Initialize S3 client
        self.s3_client = boto3.client(
            's3',
            endpoint_url=self.endpoint_url,
            aws_access_key_id=self.access_key,
            aws_secret_access_key=self.secret_key
        )
    
    def upload_file(self, file_obj: Any, folder: str = "uploads", filename: Optional[str] = None) -> Dict[str, str]:
        """
        Upload a file to cloud storage
        
        Args:
            file_obj: File object to upload
            folder: Folder path in bucket
            filename: Optional custom filename
            
        Returns:
            Dict with upload details
        """
        try:
            # Generate unique filename if not provided
            if not filename:
                ext = os.path.splitext(file_obj.name)[1]
                filename = f"{uuid.uuid4().hex}{ext}"
            
            # Construct full path
            file_path = f"{folder}/{filename}"
            
            # Upload file
            self.s3_client.upload_fileobj(
                file_obj,
                self.bucket_name,
                file_path,
                ExtraArgs={
                    'ContentType': getattr(file_obj, 'content_type', 'application/octet-stream'),
                    'ACL': 'public-read'
                }
            )
            
            # Generate public URL
            public_url = f"{self.endpoint_url}/{self.bucket_name}/{file_path}"
            
            return {
                'success': True,
                'url': public_url,
                'filename': filename,
                'path': file_path
            }
            
        except ClientError as e:
            logger.error(f"Cloud storage upload error: {e}")
            return {
                'success': False,
                'error': str(e)
            }
    
    def delete_file(self, file_path: str) -> bool:
        """Delete a file from cloud storage"""
        try:
            self.s3_client.delete_object(
                Bucket=self.bucket_name,
                Key=file_path
            )
            return True
        except ClientError as e:
            logger.error(f"Cloud storage delete error: {e}")
            return False
    
    def get_file_url(self, file_path: str) -> str:
        """Get public URL for a file"""
        return f"{self.endpoint_url}/{self.bucket_name}/{file_path}"
    
    def upload_user_profile_picture(self, file_obj: Any, user_id: str) -> Dict[str, str]:
        """Upload user profile picture"""
        return self.upload_file(file_obj, f"profiles/{user_id}")
    
    def upload_post_thumbnail(self, file_obj: Any, post_id: str) -> Dict[str, str]:
        """Upload post thumbnail image"""
        return self.upload_file(file_obj, f"posts/{post_id}/thumbnails")
    
    def upload_category_image(self, file_obj: Any, category_id: str) -> Dict[str, str]:
        """Upload category image"""
        return self.upload_file(file_obj, f"categories/{category_id}")

# Global instance
cloud_storage = CloudStorageService()

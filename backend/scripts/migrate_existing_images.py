#!/usr/bin/env python
"""
Migration script to move existing local images to cloud storage
"""
import os
import sys
import django

# Add the project root to Python path
project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, project_root)

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from django.conf import settings
from api.models import User, Post, Category
from api.services.cloud_storage import cloud_storage
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def migrate_user_profile_pictures():
    """Migrate existing user profile pictures to cloud storage"""
    logger.info("Migrating user profile pictures...")
    
    users = User.objects.exclude(image__isnull=True).exclude(image='')
    
    for user in users:
        if user.image and not str(user.image).startswith('http'):
            try:
                # Get the actual file path
                file_path = user.image.path
                
                if os.path.exists(file_path):
                    # Upload to cloud storage
                    with open(file_path, 'rb') as f:
                        upload_result = cloud_storage.upload_user_profile_picture(
                            f, str(user.id)
                        )
                        
                        if upload_result['success']:
                            # Update the model with cloud URL
                            user.image = upload_result['url']
                            user.save()
                            logger.info(f"✓ Migrated profile picture for user {user.username}")
                        else:
                            logger.error(f"✗ Failed to migrate profile picture for user {user.username}: {upload_result['error']}")
                            
            except Exception as e:
                logger.error(f"✗ Error migrating profile picture for user {user.username}: {str(e)}")

def migrate_post_thumbnails():
    """Migrate existing post thumbnails to cloud storage"""
    logger.info("Migrating post thumbnails...")
    
    posts = Post.objects.exclude(image__isnull=True).exclude(image='')
    
    for post in posts:
        if post.image and not str(post.image).startswith('http'):
            try:
                # Get the actual file path
                file_path = post.image.path
                
                if os.path.exists(file_path):
                    # Upload to cloud storage
                    with open(file_path, 'rb') as f:
                        upload_result = cloud_storage.upload_post_thumbnail(
                            f, str(post.id)
                        )
                        
                        if upload_result['success']:
                            # Update the model with cloud URL
                            post.image = upload_result['url']
                            post.save()
                            logger.info(f"✓ Migrated thumbnail for post {post.title}")
                        else:
                            logger.error(f"✗ Failed to migrate thumbnail for post {post.title}: {upload_result['error']}")
                            
            except Exception as e:
                logger.error(f"✗ Error migrating thumbnail for post {post.title}: {str(e)}")

def migrate_category_images():
    """Migrate existing category images to cloud storage"""
    logger.info("Migrating category images...")
    
    categories = Category.objects.exclude(image__isnull=True).exclude(image='')
    
    for category in categories:
        if category.image and not str(category.image).startswith('http'):
            try:
                # Get the actual file path
                file_path = category.image.path
                
                if os.path.exists(file_path):
                    # Upload to cloud storage
                    with open(file_path, 'rb') as f:
                        upload_result = cloud_storage.upload_category_image(
                            f, str(category.id)
                        )
                        
                        if upload_result['success']:
                            # Update the model with cloud URL
                            category.image = upload_result['url']
                            category.save()
                            logger.info(f"✓ Migrated image for category {category.title}")
                        else:
                            logger.error(f"✗ Failed to migrate image for category {category.title}: {upload_result['error']}")
                            
            except Exception as e:
                logger.error(f"✗ Error migrating image for category {category.title}: {str(e)}")

def main():
    """Main migration function"""
    logger.info("Starting cloud storage migration...")
    
    # Check if cloud storage is configured
    if not settings.AWS_ACCESS_KEY_ID or not settings.AWS_SECRET_ACCESS_KEY:
        logger.error("Cloud storage not configured. Please check your environment variables.")
        return
    
    # Run migrations
    migrate_user_profile_pictures()
    migrate_post_thumbnails()
    migrate_category_images()
    
    logger.info("Cloud storage migration completed!")

if __name__ == "__main__":
    main()

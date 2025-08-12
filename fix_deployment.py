#!/usr/bin/env python3
"""
Comprehensive deployment fix script for Liara deployment
This script addresses the read-only filesystem issues and database problems
"""

import os
import sys
import subprocess
import shutil
from pathlib import Path

def fix_deployment():
    """Main function to fix deployment issues"""
    print("🔧 Fixing deployment issues for Liara...")
    
    # Get project root
    project_root = Path(__file__).parent
    backend_dir = project_root / "backend"
    
    # 1. Fix storage configuration for read-only filesystem
    fix_storage_config(backend_dir)
    
    # 2. Fix database configuration for Liara
    fix_database_config(backend_dir)
    
    # 3. Fix static files configuration
    fix_static_files(project_root)
    
    # 4. Update liara.json with proper disk configuration
    fix_liara_config(project_root)
    
    print("✅ Deployment fixes applied successfully!")

def fix_storage_config(backend_dir):
    """Update storage configuration for read-only filesystem"""
    storage_config_path = backend_dir / "backend" / "storage_config.py"
    
    new_storage_config = '''"""
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
'''

    with open(storage_config_path, 'w', encoding='utf-8') as f:
        f.write(new_storage_config)
    print("   ✅ Updated storage_config.py for Liara deployment")

def fix_database_config(backend_dir):
    """Update database configuration for Liara"""
    settings_path = backend_dir / "backend" / "settings.py"
    
    # Read current settings
    with open(settings_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Update database configuration
    new_db_config = '''
# Database
# https://docs.djangoproject.com/en/5.2/ref/settings/#databases

DATABASE_URL = os.environ.get('DATABASE_URL')

if DATABASE_URL:
    DATABASES = {
        'default': dj_database_url.parse(DATABASE_URL, conn_max_age=600, ssl_require=True)
    }
else:
    # Use Liara-compatible database location
    database_dir = '/usr/src/app/database'
    os.makedirs(database_dir, exist_ok=True)
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': os.path.join(database_dir, 'db.sqlite3'),
        }
    }
'''
    
    # Replace the database configuration
    import re
    db_pattern = r'# Database.*?else:.*?}\s*}'
    new_content = re.sub(db_pattern, new_db_config, content, flags=re.DOTALL)
    
    # Update media root for Liara
    media_root_update = "MEDIA_ROOT = os.environ.get('MEDIA_ROOT', '/usr/src/app/media')"
    new_content = re.sub(r'MEDIA_ROOT = os\.path\.join\(BASE_DIR, \'media\'\)', media_root_update, new_content)
    
    # Update static root for Liara
    static_root_update = "STATIC_ROOT = os.environ.get('STATIC_ROOT', '/usr/src/app/staticfiles')"
    new_content = re.sub(r'STATIC_ROOT = BASE_DIR / \'staticfiles\'', static_root_update, new_content)
    
    # Remove the ensure_media_directories call from settings.py
    new_content = re.sub(r'# Ensure media directories are created on startup.*?ensure_media_directories\(\)', 
                        '# Media directories handled by Liara disk mounts', new_content, flags=re.DOTALL)
    
    with open(settings_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("   ✅ Updated settings.py for Liara deployment")

def fix_static_files(project_root):
    """Fix static files configuration"""
    frontend_dist = project_root / "frontend" / "dist"
    
    # Create frontend dist directory if it doesn't exist
    frontend_dist.mkdir(parents=True, exist_ok=True)
    
    # Create a simple index.html if it doesn't exist
    index_html = frontend_dist / "index.html"
    if not index_html.exists():
        index_content = '''<!DOCTYPE html>
<html>
<head>
    <title>SZK Blog</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <div id="root">
        <h1>SZK Blog</h1>
        <p>Frontend build will be placed here</p>
    </div>
</body>
</html>'''
        with open(index_html, 'w', encoding='utf-8') as f:
            f.write(index_content)
    print("   ✅ Fixed static files configuration")

def fix_liara_config(project_root):
    """Update liara.json with proper configuration"""
    liara_config = {
        "app": "SZKblog",
        "port": 8000,
        "platform": "python",
        "build": {
            "location": "iran"
        },
        "disks": [
            {
                "name": "media-disk",
                "mountTo": "/usr/src/app/media"
            },
            {
                "name": "static-disk",
                "mountTo": "/usr/src/app/staticfiles"
            },
            {
                "name": "database-disk",
                "mountTo": "/usr/src/app/database"
            }
        ],
        "python": {
            "version": "3.12"
        },
        "env": {
            "DJANGO_SETTINGS_MODULE": "backend.settings",
            "MEDIA_ROOT": "/usr/src/app/media",
            "STATIC_ROOT": "/usr/src/app/staticfiles",
            "DATABASE_DIR": "/usr/src/app/database"
        }
    }
    
    liara_path = project_root / "liara.json"
    import json
    with open(liara_path, 'w', encoding='utf-8') as f:
        json.dump(liara_config, f, indent=2)
    print("   ✅ Updated liara.json with proper disk configuration")

if __name__ == "__main__":
    fix_deployment()

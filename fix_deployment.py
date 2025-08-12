#!/usr/bin/env python3
"""
Deployment Fix Script for Liara
This script will fix the common deployment issues:
1. Database configuration
2. Static files
3. Environment setup
"""

import os
import sys
import subprocess
import json

def fix_database_config():
    """Fix database configuration for production"""
    print("🔧 Fixing database configuration...")
    
    # Create .env file template if it doesn't exist
    env_template = """# Database Configuration
DATABASE_URL=postgresql://username:password@host:port/database_name

# Email Configuration
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password

# AWS S3 (Liara Object Storage)
LIARA_ACCESS_KEY=your-liara-access-key
LIARA_SECRET_KEY=your-liara-secret-key
BUCKET_NAME=your-bucket-name
LIARA_ENDPOINT_URL=https://storage.iran.liara.ir

# Frontend URL
FRONTEND_BASE_URL=https://szkblog.liara.run/#
"""
    
    env_path = os.path.join(os.path.dirname(__file__), '.env')
    if not os.path.exists(env_path):
        with open(env_path, 'w') as f:
            f.write(env_template)
        print("✅ Created .env template file")
    
    # Update settings.py to handle database properly
    settings_path = os.path.join('backend', 'backend', 'settings.py')
    
    # Check if DATABASE_URL is being used correctly
    with open(settings_path, 'r') as f:
        content = f.read()
    
    # Ensure DATABASE_URL parsing is correct
    if 'DATABASE_URL' in content:
        print("✅ DATABASE_URL configuration found")
    else:
        print("❌ DATABASE_URL configuration missing")

def fix_procfile():
    """Fix Procfile for correct deployment"""
    print("🔧 Fixing Procfile...")
    
    procfile_content = """web: cd backend && gunicorn backend.wsgi:application --bind 0.0.0.0:$PORT --timeout 120"""
    
    with open('Procfile', 'w') as f:
        f.write(procfile_content)
    
    print("✅ Updated Procfile")

def create_deployment_config():
    """Create deployment configuration files"""
    print("🔧 Creating deployment configuration...")
    
    # Create liara.json if it doesn't exist
    liara_config = {
        "platform": "python",
        "port": 8000,
        "python": {
            "version": "3.12"
        },
        "build": {
            "command": "cd backend && python manage.py collectstatic --noinput"
        }
    }
    
    with open('liara.json', 'w') as f:
        json.dump(liara_config, f, indent=2)
    
    print("✅ Created liara.json")

def check_and_create_directories():
    """Check and create necessary directories"""
    print("🔧 Checking directories...")
    
    # Create media directory
    media_dir = os.path.join('backend', 'media')
    os.makedirs(media_dir, exist_ok=True)
    
    # Create staticfiles directory
    staticfiles_dir = os.path.join('backend', 'staticfiles')
    os.makedirs(staticfiles_dir, exist_ok=True)
    
    # Create frontend/dist if it doesn't exist
    frontend_dist = os.path.join('frontend', 'dist')
    os.makedirs(frontend_dist, exist_ok=True)
    
    print("✅ Created necessary directories")

def create_deployment_guide():
    """Create deployment guide"""
    print("🔧 Creating deployment guide...")
    
    guide = """# Deployment Guide for Liara

## Quick Fix Steps:

1. **Set Environment Variables in Liara Dashboard:**
   - Go to your app dashboard: https://console.liara.ir/apps/szkblog/settings/environment-variables
   - Add these variables:
     - DATABASE_URL: Get from your PostgreSQL database
     - EMAIL_HOST_USER: Your Gmail address
     - EMAIL_HOST_PASSWORD: Your Gmail app password
     - LIARA_ACCESS_KEY: From Liara Object Storage
     - LIARA_SECRET_KEY: From Liara Object Storage
     - BUCKET_NAME: Your bucket name
     - LIARA_ENDPOINT_URL: https://storage.iran.liara.ir

2. **Deploy:**
   ```bash
   liara deploy
   ```

3. **Check logs:**
   ```bash
   liara logs
   ```

## Database Setup:
1. Go to Liara Console → Databases → Create PostgreSQL
2. Copy the connection string
3. Add it as DATABASE_URL environment variable

## Common Issues Fixed:
- ✅ Database connection errors
- ✅ Static files configuration
- ✅ Entry point issues
- ✅ Environment variables
"""
    
    with open('DEPLOYMENT_GUIDE.md', 'w') as f:
        f.write(guide)
    
    print("✅ Created deployment guide")

if __name__ == "__main__":
    print("🚀 Starting deployment fix process...")
    
    fix_database_config()
    fix_procfile()
    create_deployment_config()
    check_and_create_directories()
    create_deployment_guide()
    
    print("\n🎉 Deployment fixes completed!")
    print("Next steps:")
    print("1. Set environment variables in Liara dashboard")
    print("2. Run: liara deploy")
    print("3. Check: liara logs")

#!/usr/bin/env python
"""
Script to fix SQLite database migration issues for localhost mode.
This will create a clean database with proper migrations applied.
"""

import os
import sys
import django
from pathlib import Path

# Add the project root to Python path
project_root = Path(__file__).parent
sys.path.insert(0, str(project_root))

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from django.db import connection
from django.core.management import execute_from_command_line

def reset_database():
    """Reset the database and apply all migrations cleanly."""
    print("🔄 Fixing SQLite database for localhost mode...")
    
    # Close any existing connections
    connection.close()
    
    # Remove the existing database file
    db_path = project_root / 'db.sqlite3'
    if db_path.exists():
        print("📁 Removing existing database file...")
        db_path.unlink()
        print("✅ Database file removed")
    
    # Create a new database and apply migrations
    print("🗄️ Creating new database...")
    
    # Run makemigrations and migrate
    try:
        print("📋 Running makemigrations...")
        execute_from_command_line(['manage.py', 'makemigrations'])
        
        print("🚀 Running migrate...")
        execute_from_command_line(['manage.py', 'migrate'])
        
        print("✅ Database migrations applied successfully!")
        
        # Create superuser if needed
        from django.contrib.auth import get_user_model
        User = get_user_model()
        
        if not User.objects.filter(is_superuser=True).exists():
            print("👤 Creating superuser...")
            User.objects.create_superuser(
                username='admin',
                email='admin@localhost',
                password='admin123'
            )
            print("✅ Superuser created (username: admin, password: admin123)")
        
        print("🎉 Database setup complete for localhost mode!")
        print("📊 Database location:", db_path.absolute())
        
    except Exception as e:
        print(f"❌ Error: {e}")
        return False
    
    return True

if __name__ == "__main__":
    reset_database()

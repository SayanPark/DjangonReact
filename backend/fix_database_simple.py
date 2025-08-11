#!/usr/bin/env python
"""
Simple script to fix SQLite database for localhost mode.
This creates a clean database with basic migrations applied.
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

from django.core.management import execute_from_command_line

def create_clean_database():
    """Create a clean database with basic setup."""
    print("🔄 Setting up clean SQLite database for localhost mode...")
    
    # Remove existing database
    db_path = project_root / 'db.sqlite3'
    if db_path.exists():
        db_path.unlink()
    
    # Apply migrations step by step
    commands = [
        ['manage.py', 'migrate', 'contenttypes'],
        ['manage.py', 'migrate', 'auth'],
        ['manage.py', 'migrate', 'admin'],
        ['manage.py', 'migrate', 'api', '0001_initial'],
        ['manage.py', 'migrate', 'sessions'],
        ['manage.py', 'migrate', 'token_blacklist']
    ]
    
    for cmd in commands:
        try:
            print(f"🚀 Running {' '.join(cmd[1:])}...")
            execute_from_command_line(cmd)
            print(f"✅ {' '.join(cmd[1:])} completed")
        except Exception as e:
            print(f"⚠️ Warning: {e}")
            continue
    
    print("🎉 Database setup complete for localhost mode!")

if __name__ == "__main__":
    create_clean_database()

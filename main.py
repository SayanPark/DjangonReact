#!/usr/bin/env python3
import os
import sys

# Change to backend directory
os.chdir(os.path.join(os.path.dirname(__file__), 'backend'))

# Add backend to Python path
sys.path.insert(0, os.getcwd())

# Set Django settings module
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

# Import Django management
from django.core.management import execute_from_command_line

if __name__ == '__main__':
    execute_from_command_line(['manage.py', 'runserver', '0.0.0.0:8000'])

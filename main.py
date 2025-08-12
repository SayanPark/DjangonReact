#!/usr/bin/env python3
import os
import sys
import subprocess

# Get the absolute path to the project root
PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))
BACKEND_DIR = os.path.join(PROJECT_ROOT, 'backend')

# Change to backend directory
os.chdir(BACKEND_DIR)

# Set Django settings module
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

# Run Django using manage.py directly
subprocess.run([sys.executable, 'manage.py', 'runserver', '0.0.0.0:8000'])

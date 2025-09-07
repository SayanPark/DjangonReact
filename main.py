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

# Check if we're in Liara environment
is_liara = os.environ.get('LIARA_APP_NAME') is not None

if is_liara:
    # Production: Run migrations and collect static files first
    print("Running database migrations...")
    subprocess.run([sys.executable, 'manage.py', 'migrate', '--noinput'])

    print("Collecting static files...")
    subprocess.run([sys.executable, 'manage.py', 'collectstatic', '--noinput'])

    # Then start gunicorn
    port = os.environ.get('PORT', '8000')
    print(f"Starting gunicorn on port {port}...")
    subprocess.run(['gunicorn', 'backend.wsgi:application', '--bind', f'0.0.0.0:{port}'])
else:
    # Development: Use runserver
    subprocess.run([sys.executable, 'manage.py', 'runserver', '0.0.0.0:8000'])

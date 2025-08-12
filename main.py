#!/usr/bin/env python3
import os
import sys
import subprocess

# Get the absolute path to the project root
PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))
BACKEND_DIR = os.path.join(PROJECT_ROOT, 'backend')

# Change to backend directory
os.chdir(BACKEND_DIR)

# Run Django directly using subprocess to avoid autoreload issues
subprocess.run([sys.executable, '-m', 'django', 'runserver', '0.0.0.0:8000'])

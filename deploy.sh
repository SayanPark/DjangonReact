#!/bin/bash
# Deployment script for Liara that handles database migrations

set -e

echo "🚀 Starting SZK Blog deployment..."

# Change to backend directory
cd backend

# Set Django settings
export DJANGO_SETTINGS_MODULE=backend.settings

# Run migrations
echo "🔄 Running Django migrations..."
python manage.py migrate --noinput

# Collect static files
echo "📦 Collecting static files..."
python manage.py collectstatic --noinput

# Create superuser if it doesn't exist
echo "👤 Checking superuser..."
python manage.py createsuperuser --noinput --username admin --email admin@example.com || echo "Superuser already exists"

# Start the application
echo "🌐 Starting application..."
exec gunicorn backend.wsgi:application --bind 0.0.0.0:$PORT

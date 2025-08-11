#!/bin/bash
set -e

echo "Starting deployment..."

# Install dependencies
pip install -r requirements.txt

# Collect static files
python backend/manage.py collectstatic --noinput

# Run migrations
python backend/manage.py migrate --noinput

# Create superuser if it doesn't exist
python backend/manage.py shell -c "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.filter(is_superuser=True).exists() or User.objects.create_superuser('admin', 'admin@example.com', 'admin123')"

echo "Deployment complete!"

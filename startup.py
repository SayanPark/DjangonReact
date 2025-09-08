#!/usr/bin/env python3
"""
Liara deployment startup script
Handles database initialization and migrations in read-only filesystem environment
"""

import os
import sys
import subprocess
import time

def main():
    """Main startup function for Liara deployment"""
    print("🚀 Starting SZK Blog for Liara deployment...")
    
    # Get project root
    project_root = os.path.dirname(os.path.abspath(__file__))
    backend_dir = os.path.join(project_root, 'backend')
    
    # Change to backend directory
    os.chdir(backend_dir)
    
    # Set Django settings module
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
    
    # Check if we're in Liara environment
    is_liara = os.environ.get('LIARA_APP_NAME') is not None
    
    if is_liara:
        print("📦 Running in Liara environment")
        
        # Ensure database directory exists (Liara handles this via disk mounts)
        database_dir = os.environ.get('DATABASE_DIR', '/usr/src/app/database')
        db_path = os.path.join(database_dir, 'db.sqlite3')
        
        print(f"📁 Database path: {db_path}")
        
        # Run migrations
        print("🔄 Running Django migrations...")
        try:
            subprocess.run([sys.executable, 'manage.py', 'migrate', '--noinput'], check=True)
            print("✅ Migrations completed successfully")
        except subprocess.CalledProcessError as e:
            print(f"⚠️  Migration failed: {e}")
            # Continue anyway - might be first deployment
        
        # Collect static files
        print("📦 Collecting static files...")
        try:
            subprocess.run([sys.executable, 'manage.py', 'collectstatic', '--noinput'], check=True)
            print("✅ Static files collected successfully")
        except subprocess.CalledProcessError as e:
            print(f"⚠️  Static collection failed: {e}")

        # Ensure media directories exist
        print("📁 Ensuring media directories exist...")
        try:
            # Create media directories manually
            import os
            media_root = '/usr/src/app/staticfiles/media'
            directories = [
                media_root,
                os.path.join(media_root, 'image'),
                os.path.join(media_root, 'videos'),
                os.path.join(media_root, 'ckeditor_uploads'),
            ]

            for directory in directories:
                try:
                    if not os.path.exists(directory):
                        os.makedirs(directory, exist_ok=True)
                        os.chmod(directory, 0o777)
                        print(f"Created directory: {directory}")
                    else:
                        os.chmod(directory, 0o777)
                        print(f"Set permissions for directory: {directory}")
                except OSError as e:
                    print(f"Could not create or set permissions for directory {directory}: {e}")
            print("✅ Media directories ensured")
        except Exception as e:
            print(f"⚠️  Media directories setup failed: {e}")

        # Create superuser if it doesn't exist
        print("👤 Checking superuser...")
        try:
            subprocess.run([sys.executable, 'manage.py', 'createsuperuser', '--noinput', '--username', 'admin', '--email', 'admin@example.com'], check=True)
            print("✅ Superuser created")
        except subprocess.CalledProcessError:
            print("ℹ️  Superuser already exists or creation skipped")
    
    else:
        print("💻 Running in development environment")
    
    # Start the server
    print("🌐 Starting Django server...")
    
    # Use gunicorn in production, runserver in development
    if is_liara:
        # Use gunicorn for production
        port = os.environ.get('PORT', '8000')
        subprocess.run(['gunicorn', 'backend.wsgi:application', '--bind', f'0.0.0.0:{port}'])
    else:
        # Use runserver for development
        subprocess.run([sys.executable, 'manage.py', 'runserver', '0.0.0.0:8000'])

if __name__ == "__main__":
    main()

from django.core.management.base import BaseCommand
from django.db import connection
from api.models import Post

class Command(BaseCommand):
    help = 'Check if the video column exists in the api_post table'

    def handle(self, *args, **options):
        self.stdout.write('Checking database schema for api_post table...')

        # Get the table name for the Post model
        table_name = Post._meta.db_table
        self.stdout.write(f'Table name: {table_name}')

        # Get all columns in the table
        with connection.cursor() as cursor:
            # Get column information
            cursor.execute("""
                SELECT column_name, data_type, is_nullable
                FROM information_schema.columns
                WHERE table_name = %s
                ORDER BY ordinal_position;
            """, [table_name])

            columns = cursor.fetchall()

        if columns:
            self.stdout.write(f'\nColumns in {table_name} table:')
            video_column_exists = False
            for column in columns:
                column_name, data_type, is_nullable = column
                self.stdout.write(f'  - {column_name}: {data_type} (nullable: {is_nullable})')
                if column_name == 'video':
                    video_column_exists = True

            if video_column_exists:
                self.stdout.write(self.style.SUCCESS('\n✓ Video column exists in the database'))
            else:
                self.stdout.write(self.style.ERROR('\n✗ Video column does NOT exist in the database'))
        else:
            self.stdout.write(self.style.ERROR(f'No columns found for table {table_name}'))

        # Also check Django's migration status
        from django.core.management import call_command
        from io import StringIO

        self.stdout.write('\nChecking migration status...')
        output = StringIO()
        call_command('showmigrations', 'api', stdout=output, verbosity=0)
        migration_output = output.getvalue()

        if '[X] 0002_post_video' in migration_output:
            self.stdout.write(self.style.SUCCESS('✓ Migration 0002_post_video is applied'))
        else:
            self.stdout.write(self.style.ERROR('✗ Migration 0002_post_video is NOT applied'))

# Generated by Django 2.2.5 on 2019-09-09 19:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Application',
            fields=[
                ('id', models.AutoField(auto_created=True,
                                        primary_key=True, serialize=False, verbose_name='ID')),
                ('company_name', models.CharField(max_length=100)),
                ('position', models.CharField(max_length=100)),
                ('date_applied', models.DateField(blank=True)),
                ('application_id', models.CharField(blank=True, max_length=100)),
                ('application_url', models.URLField(blank=True, unique=True)),
                ('application_status', models.CharField(max_length=25)),
                ('priority_level', models.CharField(max_length=25)),
                ('company_contact_name', models.CharField(
                    blank=True, max_length=100)),
                ('company_contact_email', models.EmailField(
                    blank=True, max_length=254)),
                ('company_contact_phone', models.CharField(
                    blank=True, max_length=25)),
                ('notes', models.TextField(blank=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]

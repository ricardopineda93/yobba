# Generated by Django 2.2.5 on 2019-09-14 16:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('applications', '0012_auto_20190914_1505'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='application',
            name='application_id',
        ),
    ]

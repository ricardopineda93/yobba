# Generated by Django 2.2.5 on 2019-09-09 20:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('applications', '0002_auto_20190909_2026'),
    ]

    operations = [
        migrations.AlterField(
            model_name='application',
            name='date_applied',
            field=models.DateField(blank=True),
        ),
    ]
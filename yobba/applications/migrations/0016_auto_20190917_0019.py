# Generated by Django 2.2.5 on 2019-09-17 00:19

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('applications', '0015_auto_20190916_2248'),
    ]

    operations = [
        migrations.AddField(
            model_name='application',
            name='application_id',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='application',
            name='date_applied',
            field=models.DateField(blank=True, default=datetime.date(2019, 9, 17)),
        ),
    ]
# Generated by Django 2.2.5 on 2019-09-18 15:53

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('applications', '0017_application_owner'),
    ]

    operations = [
        migrations.AlterField(
            model_name='application',
            name='date_applied',
            field=models.DateField(blank=True, default=datetime.date(2019, 9, 18)),
        ),
    ]

# Generated by Django 2.2.5 on 2019-09-13 15:23

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('lists', '0001_initial'),
        ('applications', '0007_auto_20190912_0026'),
    ]

    operations = [
        migrations.AddField(
            model_name='application',
            name='status_list',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='lists', to='lists.List'),
        ),
        migrations.AlterField(
            model_name='application',
            name='date_applied',
            field=models.DateField(blank=True, default=datetime.date(2019, 9, 13)),
        ),
    ]
# Generated by Django 2.2.5 on 2019-09-14 14:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('applications', '0009_auto_20190914_1304'),
    ]

    operations = [
        migrations.AlterField(
            model_name='application',
            name='status_list',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='applications', to='lists.List'),
        ),
    ]

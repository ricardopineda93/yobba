# Generated by Django 2.2.5 on 2019-09-14 15:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('applications', '0011_application_string_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='application',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
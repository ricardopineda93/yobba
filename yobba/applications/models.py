from django.db import models
# from django.contrib.auth.models import User
from datetime import date

# Create your models here.


class Application(models.Model):
    company_name = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    date_applied = models.DateField(
        default=date.today(), blank=True)
    application_id = models.CharField(blank=True, max_length=100)
    application_url = models.URLField(blank=True, unique=True)
    application_status = models.CharField(max_length=25)
    priority_level = models.CharField(max_length=25)
    company_contact_name = models.CharField(blank=True, max_length=100)
    company_contact_email = models.EmailField(blank=True)
    company_contact_phone = models.CharField(blank=True, max_length=25)
    notes = models.TextField(blank=True)
    location = models.TextField(blank=True)
    # owner = models.ForeignKey(
    #     User, related_name='applications', on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

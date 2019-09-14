from django.db import models

# Create your models here.


class List(models.Model):
    title = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def list_id(self):
        return 'list-' + str(self.id)

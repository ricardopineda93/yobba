from rest_framework import serializers
from applications.models import Application

# Application serializer


class ApplicationSerializer(serializers.ModelSerializer):

    application_id = serializers.CharField(read_only=True)

    class Meta:
        model = Application
        fields = ('id', 'company_name', 'position', 'date_applied', 'application_id',
                  'application_url', 'priority_level', 'company_contact_email', 'notes', 'location',
                  'status_list', 'prefixed_app_id')

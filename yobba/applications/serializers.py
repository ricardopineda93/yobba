from rest_framework import serializers
from applications.models import Application

# Application serializer


class ApplicationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Application
        fields = ('__all__')

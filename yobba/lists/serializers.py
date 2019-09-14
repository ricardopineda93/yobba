from rest_framework import serializers
from lists.models import List
from applications.serializers import ApplicationSerializer

# Lists Serializer


class ListSerializer(serializers.ModelSerializer):

    applications = ApplicationSerializer(read_only=True, many=True)

    class Meta:
        model = List
        fields = ('title', 'applications',)

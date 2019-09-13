from rest_framework import serializers
from lists.models import List
from applications.serializers import ApplicationSerializer

# Lists Serializer


class ListSerializer(serializers.ModelSerializer):

    applications_set = ApplicationSerializer(read_only=True, many=True)

    class Meta:
        model = List
        fields = ('title', 'applications_set',)
        depth = 1

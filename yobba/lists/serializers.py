from rest_framework import serializers
from lists.models import List

# Lists Serializer


class ListSerializer(serializers.ModelSerializer):
    class Meta:
        model = List
        fields = '__all__'

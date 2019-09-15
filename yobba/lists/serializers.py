from rest_framework import serializers
from lists.models import List
from applications.serializers import ApplicationSerializer

# Lists Serializer

# Responsible for what is sent back serialized for backend-front communication.
# Shows what is returned back as JSON from requests.


class ListSerializer(serializers.ModelSerializer):
    # This retrieves all the fkey ID'd Application objects assosicated to this list.
    applications = ApplicationSerializer(read_only=True, many=True)
    # Assigning the method field assosicated to the model that brings back a custom string
    # version of the ID that we need for the front end.
    list_id = serializers.CharField(read_only=True)

    # Overwriting the Meta class to assign it to the current list and it's field.
    class Meta:
        model = List
        fields = ('id', 'title', 'applications', 'list_id')

from applications.models import Application
from rest_framework import viewsets, permissions
from .serializers import ApplicationSerializer

# Application Viewset

# This is responsible for what is returned from the URL specified.
# It is literally the API part of the app for this whole app.


class ApplicationViewSet(viewsets.ModelViewSet):

    queryset = Application.objects.all()

    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ApplicationSerializer

from applications.models import Application
from rest_framework import viewsets, permissions
from .serializers import ApplicationSerializer

# Application Viewset


class ApplicationViewSet(viewsets.ModelViewSet):

    queryset = Application.objects.all()

    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ApplicationSerializer

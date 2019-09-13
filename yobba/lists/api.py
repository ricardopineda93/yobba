from lists.models import List
from rest_framework import viewsets, permissions
from .serializers import ListSerializer
from applications.models import Application

# List Viewset


class AllListsViewSet(viewsets.ModelViewSet):
    queryset = List.objects.all()

    permission_classes = [permissions.AllowAny]

    serializer_class = ListSerializer

from lists.models import List
from rest_framework import viewsets, permissions
from .serializers import ListSerializer
from applications.models import Application

# List Viewset


class AllListsViewSet(viewsets.ModelViewSet):
    # queryset = List.objects.all()

    # permission_classes = [permissions.AlilowAny]

    serializer_class = ListSerializer

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        return self.request.user.lists.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

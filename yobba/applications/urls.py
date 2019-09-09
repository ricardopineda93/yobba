from rest_framework import routers
from .api import ApplicationViewSet

router = routers.DefaultRouter()
router.register('api/applications', ApplicationViewSet, 'applications')

urlpatterns = router.urls

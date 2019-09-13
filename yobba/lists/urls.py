from rest_framework import routers
from .api import AllListsViewSet

router = routers.DefaultRouter()
router.register('api/lists', AllListsViewSet, 'lists')


urlpatterns = router.urls

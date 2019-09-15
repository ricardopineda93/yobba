from rest_framework import routers
from .api import AllListsViewSet

# The router for our app's URL endpoint's and their associated API functionality.
router = routers.DefaultRouter()

# URL endpoints and associated API functionality.
router.register('api/lists', AllListsViewSet, 'lists')


urlpatterns = router.urls

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('applications.urls')),
    path('', include('accounts.urls')),
    path('', include('lists.urls'))
]

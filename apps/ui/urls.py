from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from apps.ui import views

urlpatterns = [
    path('', views.home, name='home'),
    path('under-construction/', views.under_construction, name='under-construction'),
]

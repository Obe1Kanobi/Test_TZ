from rest_framework import routers
from django.urls import path, include
from .views import MenuItemViewSet, AdvantageViewSet

router = routers.DefaultRouter()
router.register(r'menu', MenuItemViewSet, basename='menu')
router.register(r'advantages', AdvantageViewSet, basename='advantages')

urlpatterns = [
    path('', include(router.urls)),
]

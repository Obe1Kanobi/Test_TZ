from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import MenuItem, Advantage
from .serializers import MenuItemSerializer, AdvantageSerializer

class MenuItemViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = MenuItem.objects.filter(is_active=True).order_by('order')
    serializer_class = MenuItemSerializer
    permission_classes = [AllowAny]


class AdvantageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Advantage.objects.all().order_by('order')
    serializer_class = AdvantageSerializer
    permission_classes = [AllowAny]

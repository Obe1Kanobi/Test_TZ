from rest_framework import serializers
from django.conf import settings
from .models import MenuItem, Advantage

class MenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        fields = ['id', 'title', 'url', 'order', 'is_active']


class AdvantageSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Advantage
        fields = ['id', 'label', 'value', 'description', 'order', 'image_url']

    def get_image_url(self, obj):
        request = self.context.get('request')
        if not settings.ENABLE_IMAGES:
            return None
        if obj.image:
            # return absolute URL if request available
            if request:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url
        return None

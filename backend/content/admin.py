from django.contrib import admin
from .models import MenuItem, Advantage

@admin.register(MenuItem)
class MenuItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'url', 'order', 'is_active')
    list_editable = ('order', 'is_active')
    ordering = ('order',)

@admin.register(Advantage)
class AdvantageAdmin(admin.ModelAdmin):
    list_display = ('label', 'value', 'description', 'order')
    list_editable = ('order',)
    ordering = ('order',)

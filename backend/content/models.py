from django.db import models

class MenuItem(models.Model):
    label = models.CharField(max_length=120, default='Default Label')
    title = models.CharField(max_length=120)
    url = models.CharField(max_length=255, default="#")
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title


class Advantage(models.Model):
    label = models.CharField(max_length=120, default='Default Label')      # "мы", "гарантируем"
    value = models.CharField(max_length=50)        # "1", "50%"
    description = models.CharField(max_length=200) # "на рынке"
    order = models.PositiveIntegerField(default=0)
    image = models.ImageField(upload_to='advantages/', blank=True, null=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.label} — {self.value}"

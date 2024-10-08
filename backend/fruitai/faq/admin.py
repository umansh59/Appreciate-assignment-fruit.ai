from django.contrib import admin

# Register your models here.

from .models import FAQ

class FAQAdmin(admin.ModelAdmin):
    list_display = ('question', 'answer', 'image_name', 'image_custom_name', 'created_at')
    fields = ('question', 'answer', 'image', 'image_custom_name', 'created_at')
    readonly_fields = ('created_at',)

admin.site.register(FAQ, FAQAdmin)

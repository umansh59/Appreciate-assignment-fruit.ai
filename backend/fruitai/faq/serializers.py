# serializers.py
from rest_framework import serializers
from .models import FAQ

class FAQSerializer(serializers.ModelSerializer):
    image_name = serializers.ReadOnlyField()  # Remove the 'source' argument
    
    class Meta:
        model = FAQ
        fields = ['id', 'question', 'answer', 'image', 'image_name', 'image_custom_name', 'created_at']
    
    def validate_image(self, value):
        if value and value.size > 5 * 1024 * 1024:  # 5MB limit
            raise serializers.ValidationError("Image size must be less than 5MB.")
        return value

# models.py
from django.db import models

class FAQ(models.Model):
    question = models.CharField(max_length=255)
    answer = models.TextField()
    image = models.ImageField(upload_to='faq_images/', blank=True, null=True)
    image_custom_name = models.CharField(max_length=255, blank=True, null=True)  
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question

    @property
    def image_name(self):
        if self.image:
            return self.image.name.split('/')[-1]  
        return None

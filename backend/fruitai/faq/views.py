from django.contrib.auth.models import User
from rest_framework import generics
from .models import FAQ
from .serializers import FAQSerializer
from rest_framework.permissions import IsAdminUser
from rest_framework.permissions import AllowAny  
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound, ValidationError




class FAQListCreateView(generics.ListCreateAPIView):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer
    permission_classes = [IsAdminUser]

    def post(self, request, *args, **kwargs):
        try:
            return super().post(request, *args, **kwargs)
        except ValidationError as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


class FAQDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer
    permission_classes = [IsAdminUser]

    def get_object(self):
        try:
            return super().get_object()
        except FAQ.DoesNotExist:
            raise NotFound(detail="FAQ not found.")

    def put(self, request, *args, **kwargs):
        try:
            return super().put(request, *args, **kwargs)
        except ValidationError as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        try:
            return super().delete(request, *args, **kwargs)
        except FAQ.DoesNotExist:
            raise NotFound(detail="FAQ not found.")

class FAQPublicListView(generics.ListAPIView):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer
    permission_classes = [AllowAny]
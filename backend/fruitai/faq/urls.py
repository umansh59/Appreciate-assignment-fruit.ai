from django.urls import path
from .views import FAQListCreateView, FAQDetailView, FAQPublicListView

urlpatterns = [
    path('faqs/', FAQListCreateView.as_view(), name='faq-list-create'),  # Admin access
    path('faqs/<int:pk>/', FAQDetailView.as_view(), name='faq-detail'),  # Admin access
    path('public/faqs/', FAQPublicListView.as_view(), name='faq-public-list'),  # Public access
]

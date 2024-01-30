from django.urls import path
from .views import adminBlog

urlpatterns = [
    path("adminBlog/", adminBlog, name="adminBlog"),
]
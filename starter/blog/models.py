from django.db import models

# Create your models here.


class User(models.Model):
    userName = models.CharField(max_length=50, default="")
    userEmail = models.EmailField(max_length=50, default="")
    password = models.CharField(max_length=50, default="")


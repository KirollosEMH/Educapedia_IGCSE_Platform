from django.db import models
from django.contrib.auth.models import User
# create your models here.
class Student (models.Model):
    first_name = models.CharField(max_length=30,default='Test')
    last_name = models.CharField(max_length=30,default='Test')
    email = models.EmailField(default='Test')
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=20)
    parent_phone_number = models.CharField(max_length=20)
    school_name = models.CharField(max_length=50)
    
    def __str__(self):
        return self.user.username
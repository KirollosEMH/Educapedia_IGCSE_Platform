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

class Courses(models.Model):
    CATEGORY_CHOICES = (
        ('math', 'Math'),
        ('science', 'Science'),
        ('ict', 'ICT'),
    )

    name = models.CharField(max_length=100)
    description = models.TextField()
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES)
    instructor = models.CharField(max_length=100,default='Test')
    video1 = models.FileField(upload_to='media/static/videos/')
    video2 = models.FileField(upload_to='media/static/videos/')
    quiz = models.URLField()
    assignment = models.URLField()
    picture = models.ImageField(upload_to='media/static/pictures/')
    price = models.IntegerField(default=400)
    def __str__(self):
        return self.name

class Profile (models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(default='default.jpg', upload_to='profile_pics')
    def __str__(self):
        return f'{self.user.username} Profile'

class Enrollment(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    course = models.ForeignKey(Courses, on_delete=models.CASCADE)
    date_purchased = models.DateTimeField(auto_now_add=True)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.student} enrolled in {self.course} on {self.date_purchased.strftime('%d %B %Y %H:%M')}"
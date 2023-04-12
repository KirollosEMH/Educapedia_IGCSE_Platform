from django.contrib import admin
from .models import Student
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin
# Register your models here.

class StudentInline(admin.StackedInline):
    model = Student
    can_delete = False
    verbose_name_plural = 'Student'

class CustomizedUserAdmin(UserAdmin):
    inlines = (StudentInline,)

admin.site.unregister(User)
admin.site.register(User, CustomizedUserAdmin)
admin.site.register(Student)

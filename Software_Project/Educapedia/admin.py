from django.contrib import admin
from .models import Student
from .models import Courses
from .models import Enrollment
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin
from Educapedia.models import Profile
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
admin.site.register(Courses)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'description', 'picture', 'created_at')
    search_fields = ('name', 'category')

admin.site.register(Profile)


class EnrollmentAdmin(admin.ModelAdmin):
    list_display = ('student', 'course', 'date_purchased', 'completed')
    list_filter = ('course', 'completed')
    search_fields = ('student__first_name', 'student__last_name', 'course__name')

admin.site.register(Enrollment)
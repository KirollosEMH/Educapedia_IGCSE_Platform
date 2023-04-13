from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .forms import UserRegisterForm
from .models import Student
from .models import Courses
# Create your views here.


def Home(request):
    return render(request, 'Educapedia/Home.html')
def Login(request):
    return render(request, 'Educapedia/Login.html')

def Register (request):
    # if request is POST, create a form with data from request
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.clean_email()
            form.save()
            return redirect('Edu-Login')
    else:
        form = UserRegisterForm()
    return render (request, 'Educapedia/Registration.html', {'form':form})

def ForgetPassword(request):
    return render(request, 'Educapedia/Forget Password.html')
def Profile(request):
    return render(request, 'Educapedia/Profile.html')
def Dashboard(request):
    return render(request, 'Educapedia/Dashboard.html')
def OurSubjects(request):
    courses = Courses.objects.all()
    context = {'courses': courses}
    return render(request, 'Educapedia/OurSubjects.html', context)
def CourseInfo(request, course_name):
    course = Courses.objects.get(name=course_name)
    return render(request, 'Educapedia/CourseInfo.html', {'course': course})
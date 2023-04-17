from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .forms import UserRegisterForm,UserUpdateForm,ProfileUpdateForm
from django.contrib.auth.decorators import login_required
from .models import Courses
from .models import Enrollment


def Home(request):
    return render(request, 'Educapedia/Home.html')

def Register (request):
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

@ login_required
def Profile(request):
    if request.method == 'POST':
        u_form = UserUpdateForm(request.POST, instance=request.user)
        p_form = ProfileUpdateForm(request.POST,
                                   request.FILES,
                                   instance=request.user.profile)
        if u_form.is_valid() and p_form.is_valid() :
            u_form.save()
            p_form.save()
            return redirect('Edu-Profile')

    else:
        u_form = UserUpdateForm(instance=request.user)
        p_form = ProfileUpdateForm(instance=request.user.profile)
    context = {
        'u_form': u_form,
        'p_form': p_form,
    }

    return render(request, 'Educapedia/Profile.html',context)

@ login_required
def Dashboard(request):
    enrollments = Enrollment.objects.filter(student=request.user.student)
    return render(request, 'Educapedia/Dashboard.html', {'enrollments': enrollments})

@  login_required
def OurSubjects(request):
    courses = Courses.objects.all()
    context = {'courses': courses}
    return render(request, 'Educapedia/OurSubjects.html', context)

@ login_required
def CourseInfo(request, course_name):
    course = Courses.objects.get(name=course_name)
    return render(request, 'Educapedia/CourseInfo.html', {'course': course})

@ login_required
def Video(request, course_name):
    course = Courses.objects.get(name=course_name)
    return render(request, 'Educapedia/Video.html', {'course': course})
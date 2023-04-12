from django.shortcuts import render

# Create your views here.

def Home(request):
    return render(request, 'Educapedia/Home.html')
def Login(request):
    return render(request, 'Educapedia/Login.html')
def Register(request):
    return render(request, 'Educapedia/Registration.html')
def ForgetPassword(request):
    return render(request, 'Educapedia/Forget Password.html')
def Profile(request):
    return render(request, 'Educapedia/Profile.html')
def Dashboard(request):
    return render(request, 'Educapedia/Dashboard.html')
def OurSubjects(request):
    return render(request, 'Educapedia/OurSubjects.html')
def CourseInfo(request):
    return render(request, 'Educapedia/CourseInfo.html')
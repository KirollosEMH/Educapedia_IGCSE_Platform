"""Software_Project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from Educapedia import  views as Educapedia_views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', Educapedia_views.Home, name='Edu-Home'),
    path('Login/', Educapedia_views.Login, name='Edu-Login'),
    path('Register/', Educapedia_views.Register, name='Edu-Register'),
    path('ForgetPassword/', Educapedia_views.ForgetPassword, name='Edu-ForgetPassword'),
    path('Profile/', Educapedia_views.Profile, name='Edu-Profile'),
    path('Dashboard/', Educapedia_views.Dashboard, name='Edu-Dashboard'),
    path('OurSubjects/', Educapedia_views.OurSubjects, name='Edu-OurSubjects'),
    path('CourseInfo/', Educapedia_views.CourseInfo, name='Edu-CourseInfo'),
]

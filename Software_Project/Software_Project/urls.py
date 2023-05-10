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
from django.urls import path,include
from Educapedia import  views as Educapedia_views
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views
from Educapedia.views import MyPaymentView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', Educapedia_views.Home, name='Edu-Home'),
    path('login/', auth_views.LoginView.as_view(template_name='Educapedia/Login.html'), name='Edu-Login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='Educapedia/Logout.html'), name='Edu-Logout'),
    path('Register/', Educapedia_views.Register, name='Edu-Register'),
    path('password_reset/', Educapedia_views.PasswordResetView.as_view(template_name='Educapedia/password_reset.html'), name='Edu-password_reset'),
    path('password_reset/done/', Educapedia_views.PasswordResetDoneView.as_view(template_name='Educapedia/password_reset_done.html'), name='password_reset_done'),
    path('password_reset_confirm/<uidb64>/<token>/', Educapedia_views.PasswordResetConfirmView.as_view(template_name='Educapedia/password_reset_confirm.html'), name='password_reset_confirm'),
    path('password_reset_complete/', Educapedia_views.PasswordResetCompleteView.as_view(template_name='Educapedia/password_reset_complete.html'), name='password_reset_complete'),
    path('Profile/', Educapedia_views.Profile, name='Edu-Profile'),
    path('Dashboard/', Educapedia_views.Dashboard, name='Edu-Dashboard'),
    path('OurSubjects/', Educapedia_views.OurSubjects, name='Edu-OurSubjects'),
    path('CourseInfo/<str:course_name>/', Educapedia_views.CourseInfo, name='Edu-CourseInfo'),
    path('Video/<str:course_name>/', Educapedia_views.Video, name='Edu-Video'),
    path('Payment/', MyPaymentView.as_view(), name='Edu-Payment'),
    path('PaymentSuccess/', Educapedia_views.charge, name='Edu-Charge'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
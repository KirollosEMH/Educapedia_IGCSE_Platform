from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .forms import UserRegisterForm,UserUpdateForm,ProfileUpdateForm
from django.contrib.auth.decorators import login_required
from .models import Courses
from .models import Enrollment
from django.contrib.auth.views import PasswordResetView, PasswordResetDoneView, PasswordResetConfirmView, PasswordResetCompleteView
from django.contrib.auth.forms import PasswordResetForm
from django.conf import settings
from django.views.generic import TemplateView
import stripe


stripe.api_key = settings.STRIPE_SECRET_KEY

# This function is used to render the home page
def Home(request): 
    return render(request, 'Educapedia/Home.html')

# This function is used to render the about page
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

# This function is used to render the contact page
class MyPasswordResetView(PasswordResetView):
    template_name = 'Educapedia/password_reset.html'
    email_template_name = 'Educapedia/password_reset_email.html'
    success_url = 'Educapedia:password_reset_done'


@ login_required # This function is used to render the contact page
def Profile(request):     # This function is used to update the user profile
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
def Dashboard(request): # This function is used to render the dashboard page
    enrollments = Enrollment.objects.filter(student=request.user.student)
    return render(request, 'Educapedia/Dashboard.html', {'enrollments': enrollments})

@  login_required
def OurSubjects(request): # This function is used to render the our subjects page
    courses = Courses.objects.all()
    context = {'courses': courses}
    return render(request, 'Educapedia/OurSubjects.html', context)

@ login_required
def CourseInfo(request, course_name): # This function is used to render the course info page
    course = Courses.objects.get(name=course_name)
    return render(request, 'Educapedia/CourseInfo.html', {'course': course})

@ login_required
def Video(request, course_name): # This function is used to render the video page
    course = Courses.objects.get(name=course_name)
    return render(request, 'Educapedia/Video.html', {'course': course})

class MyPaymentView(TemplateView):  # This function is used to render the payment page
    template_name = 'Educapedia/Payment_Stripe.html'
    def get_context_data(self, **kwargs):   # This function is used to create the enrollment of the student
        enrollment =Enrollment.objects.create(student=self.request.user.student, course=Courses.objects.get(name=self.kwargs["course_name"]))
        enrollment.save()
        context = super().get_context_data(**kwargs)
        context["key"] = settings.STRIPE_PUBLISHABLE_KEY  
        corsues = Courses.objects.all()
        context["courses"] = corsues 
        return context
 
@login_required
def charge(request): # This function is used to charge the student
    if request.method == 'POST':
        charge = stripe.Charge.create(
            amount=40000,
            currency='egp',
            description='Subject Payment',
            source=request.POST['stripeToken']
        )
        return render(request, 'Educapedia/Payment_Charge.html')
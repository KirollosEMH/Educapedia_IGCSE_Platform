from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Student,Profile

class UserRegisterForm(UserCreationForm):
    email = forms.EmailField()
    first_name = forms.CharField(max_length=30)
    last_name = forms.CharField(max_length=30)
    phone_number = forms.CharField(max_length=20)
    parent_phone_number = forms.CharField(max_length=20)
    school_name = forms.CharField(max_length=50)
    
    class Meta:
        model = User
        fields = ['first_name','last_name','username', 'email', 'password1', 'password2','phone_number','parent_phone_number','school_name']
    def save(self, commit=True):
        user = super().save(commit=False)
        user.email = self.cleaned_data['email']
        user.first_name = self.cleaned_data['first_name']
        user.last_name = self.cleaned_data['last_name']
        if commit:
            user.save()
            student = Student.objects.create(
                user=user,
                first_name=self.cleaned_data['first_name'],
                last_name=self.cleaned_data['last_name'],
                email = self.cleaned_data['email'],
                phone_number=self.cleaned_data['phone_number'],
                parent_phone_number=self.cleaned_data['parent_phone_number'],
                school_name=self.cleaned_data['school_name']
            )
            student.save()
        return user
    def clean_email(self):
        email = self.cleaned_data.get('email')
        if User.objects.filter(email=email).exists():
            raise forms.ValidationError("This email address is already in use.")
        return email
    def clean_phone_number(self):
        phone_number = self.cleaned_data.get('phone_number')
        if Student.objects.filter(phone_number=phone_number).exists():
            raise forms.ValidationError("This phone number is already in use.")
        return phone_number
    def clean_parent_phone_number(self):
        parent_phone_number = self.cleaned_data.get('parent_phone_number')
        if Student.objects.filter(parent_phone_number=parent_phone_number).exists():
            raise forms.ValidationError("This parent phone number is already in use.")
        return parent_phone_number


class UserUpdateForm(forms.ModelForm):
    email = forms.EmailField(widget=forms.TextInput(attrs={'class': ' form-control formProfileMargin'}))
    username = forms.CharField(widget=forms.TextInput(attrs={'class': ' form-control formProfileMargin'}))
    first_name = forms.CharField(widget=forms.TextInput(attrs={'class': ' form-control formProfileMargin'}))
    last_name = forms.CharField(widget=forms.TextInput(attrs={'class': ' form-control formProfileMargin'}))
    class Meta:
        model = User
        fields = ['first_name','last_name','username', 'email']


class ProfileUpdateForm(forms.ModelForm):
    image = forms.ImageField(widget=forms.FileInput(attrs={'style': 'background-color: rgb(0, 141, 0); color: white;border-radius: 9px;','class': ' btn  mt-3 ml-5 formAnimation'}))
    class Meta:
        model = Profile
        fields = ['image']


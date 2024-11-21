from django import forms
from .models import *

class ContactsForm(forms.ModelForm):
    class Meta:
        model = Contacts
        fields = '__all__'
        
class ExercisesForm(forms.ModelForm):
    class Meta:
        model = Exercises
        fields = '__all__'
        
class CoachesForm(forms.ModelForm):
    class Meta:
        model = Coach
        fields = '__all__'

class StudentsForm(forms.ModelForm):
    class Meta:
        model = Student
        fields = '__all__'

from django import forms
from models import *

class ContactsForm(forms.ModelForm):
    contact_name = forms.CharField(label='Name', max_length=100)
    contact_email = forms.EmailField(label='Email')
    contact_phone = forms.CharField(label='Phone', max_length=20)
    contact_message = forms.CharField(label='Message', widget=forms.Textarea)
    
    class Meta:
        model = Contacts
        fields = '__all__'
        
class ExercisesForm(forms.ModelForm):
    exercise_name = forms.CharField(label='Name', max_length=100)
    exercise_image = forms.ImageField(label='Image')
    exercise_description = forms.CharField(label='Description', widget=forms.Textarea)
    exercise_repetitions = forms.IntegerField(label='Repetitions')
    exercise_sessions = forms.IntegerField(label='Sessions')
    
    class Meta:
        model = Exercises
        fields = '__all__'
        
class TrainersForm(forms.ModelForm):
    trainer_name = forms.CharField(label='Name', max_length=100)
    trainer_email = forms.EmailField(label='Email')
    trainer_phone = forms.CharField(label='Phone', max_length=20)
    trainer_image = forms.ImageField(label='Image')
    trainer_description = forms.CharField(label='Description', widget=forms.Textarea)
    trainer_exercises = forms.ModelMultipleChoiceField(queryset=Exercises.objects.all())
    trainer_students = forms.ModelMultipleChoiceField(queryset=Students.objects.all())
    
    class Meta:
        model = Trainers
        fields = '__all__'
        
class StudentsForm(forms.ModelForm):
    student_name = forms.CharField(label='Name', max_length=100)
    student_email = forms.EmailField(label='Email')
    student_age = forms.IntegerField(label='Age')
    student_phone = forms.CharField(label='Phone', max_length=20)
    student_address = forms.CharField(label='Address', widget=forms.Textarea)
    student_image = forms.ImageField(label='Image')
    student_exercises = forms.ModelMultipleChoiceField(queryset=Exercises.objects.all())
    student_trainer_name = forms.ModelMultipleChoiceField(queryset=Trainers.objects.all())
from rest_framework import serializers
from .models import *

class ContactsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contacts
        fields = '__all__'

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercises
        fields = '__all__'
        
class ClassesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classes
        fields = '__all__'

class CoachSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coach
        fields = '__all__'

class StudentSerializer(serializers.ModelSerializer):
    student_exercises = serializers.PrimaryKeyRelatedField(
        queryset=Exercises.objects.all(), many=True
    )
    student_coach_name = serializers.PrimaryKeyRelatedField(
        queryset=Coach.objects.all(), many=True
    )

    class Meta:
        model = Student
        fields = '__all__'
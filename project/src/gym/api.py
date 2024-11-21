from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import *

class ContactsApiViewSet(viewsets.ModelViewSet):
    queryset = Contacts.objects.all()
    serializer_class = ContactsSerializer

class ExerciseApiViewSet(viewsets.ModelViewSet):
    queryset = Exercises.objects.all()
    serializer_class = ExerciseSerializer

class CoachApiViewSet(viewsets.ModelViewSet):
    queryset = Coach.objects.all()
    serializer_class = CoachSerializer
    
    def get_queryset(self):
        queryset = super().get_queryset()
        class_id = self.request.query_params.get('class_id', None)
        if class_id is not None:
            queryset = queryset.filter(classes__id=class_id)
        return queryset

class StudentApiViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
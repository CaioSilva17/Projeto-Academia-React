from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

""" router = DefaultRouter()
router.register(r'contacts', ContactsApiViewSet)
router.register(r'exercises', ExerciseApiViewSet)
router.register(r'coaches', CoachApiViewSet)
router.register(r'students', StudentApiViewSet) """

urlpatterns = [
    path('', frontend_view, name='frontend-home'),
]
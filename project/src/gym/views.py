from django.shortcuts import render
from django.conf import settings
import os

def frontend_view(request):
    return render(request, os.path.join(settings.BASE_DIR, 'frontend', 'index.html'))
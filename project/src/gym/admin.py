from django.contrib import admin
from .models import *

class ContactsAdmin(admin.ModelAdmin):
    pass

class ExercisesAdmin(admin.ModelAdmin):
    pass

class TrainersAdmin(admin.ModelAdmin):
    pass
    
    
class StudentsAdmin(admin.ModelAdmin):
    pass


admin.site.register(Contacts, ContactsAdmin)
admin.site.register(Exercises, ExercisesAdmin)
admin.site.register(Trainers, TrainersAdmin)
admin.site.register(Students, StudentsAdmin)
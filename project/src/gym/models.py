from django.db import models

class Contacts(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    message = models.TextField()
    
    def __str__(self):
        return self.name
    
class Classes(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='service/')
    coach_name = models.ManyToManyField('Coach', related_name='classes_coachs')
    
    
class Exercises(models.Model):
    name = models.CharField(max_length=100)
    repetitions = models.PositiveIntegerField()
    sessions = models.PositiveIntegerField()
    coach_name = models.ManyToManyField('Coach', related_name='exercises_coachs')
    classes = models.ForeignKey(Classes, on_delete=models.CASCADE, related_name='exercises_classes')
    
    def __str__(self):
        return self.name

    
class Coach(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    image = models.ImageField(upload_to='coach/')
    specialization = models.CharField(max_length=100)
    classes = models.ManyToManyField(Classes, related_name='coachs_classes')
    student_name = models.ManyToManyField('Student', related_name='coach_student')
    
    def __str__(self):
        return self.name
    
    
class Student(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    age = models.PositiveIntegerField()
    phone = models.CharField(max_length=20)
    address = models.TextField()
    image = models.ImageField(upload_to='student/')
    exercises = models.ManyToManyField(Exercises, related_name='student_exercise')
    coach_name = models.ManyToManyField(Coach, related_name='student_coache')
    
    def __str__(self):
        return self.name
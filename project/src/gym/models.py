from django.db import models

class Contacts(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    message = models.TextField()
    
    def __str__(self):
        return self.name
    
class Exercises(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='service/')
    description = models.TextField()
    repetitions = models.PositiveIntegerField()
    sessions = models.PositiveIntegerField()
    
    def __str__(self):
        return self.name
    
class Trainers(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    image = models.ImageField(upload_to='trainer/')
    description = models.TextField()
    exercises = models.ForeignKey(Exercises, on_delete=models.CASCADE, related_name='trainers_exercises')
    students = models.ManyToManyField('Students', related_name='trainers_students')
    
    def __str__(self):
        return self.name
    
    
class Students(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    age = models.PositiveIntegerField()
    phone = models.CharField(max_length=20)
    address = models.TextField()
    image = models.ImageField(upload_to='student/')
    exercises = models.ManyToManyField(Exercises, related_name='students_exercises')
    trainer_name = models.ManyToManyField(Trainers, related_name='students_trainers')
    
    def __str__(self):
        return self.name
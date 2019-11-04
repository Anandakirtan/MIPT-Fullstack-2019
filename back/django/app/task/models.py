from django.db import models
from django.contrib.auth.models import User
from folder.models import Folder

class Task(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    deadline = models.DateField(auto_now=False, help_text="set a deadline")
    folder = models.ForeignKey(Folder, default = 2, on_delete=models.CASCADE)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


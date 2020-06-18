from django.db import models

# Create your models here.
class Note(models.Model):
    note_text = models.CharField(max_length=250)
    note_id = models.IntegerField()
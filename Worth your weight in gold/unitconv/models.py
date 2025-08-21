from django.db import models

# Create your models here.

class Conversion(models.Model):
    number = models.FloatField()
    unit = models.CharField(max_length=4)

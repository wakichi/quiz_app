from django.db import models

# Create your models here.

class Quiz(models.Model):
    problem = models.CharField(max_length=1000)
    answer = models.BooleanField(default=False)
    # tag = models.ForeignKey(models.ForeignKey, null=True)

    def __str__(self):
        return self.problem+":"+("O" if self.answer else "X")

# class tag(modle.Model):

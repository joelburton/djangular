from django.db import models


class Cat(models.Model):
    name = models.CharField(
        max_length=50,
        unique=True,
        help_text='Full name.'
    )

    iq = models.PositiveSmallIntegerField(
        help_text='Just pretend.'
    )

    def __str__(self):
        return self.name

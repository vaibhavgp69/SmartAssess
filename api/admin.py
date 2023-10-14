from django.contrib import admin
from . import models


# Register your models here.
admin.site.register(models.StudySession)
admin.site.register(models.Assessment)
admin.site.register(models.Mcq)
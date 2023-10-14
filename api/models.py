from django.db import models
import uuid


class StudySession(models.Model):
    session_name = models.CharField(max_length=500, default = "")
    session_id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    pdf_file = models.FileField(blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    finished_at = models.CharField( max_length=100 , null=True, default = "not stored")
    

    def __str__(self):
        return self.session_name + "   Created session at : " +str(self.created_at) + "      Ended session at  : " +str(self.finished_at) 
    
class Assessment(models.Model):
    session_id = models.CharField(max_length=1000, default = "")
    assesment_id = models.ForeignKey(StudySession, on_delete=models.CASCADE)
    easy_questions = models.CharField(max_length=1000, default = "")
    med_questions = models.CharField(max_length=1000, default = "")
    hard_questions = models.CharField(max_length=1000, default = "")
    score = models.IntegerField()
    
    def __str__(self):
        return self.assesment_id.session_name  + " assesment - "+ str(self.id)
    
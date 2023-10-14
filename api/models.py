from django.db import models
import uuid
import json
import ast
class StudySession(models.Model):
    session_name = models.CharField(max_length=500, default = "")
    session_id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    pdf_file = models.FileField(blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    finished_at = models.CharField( max_length=100 , null=True, default = "not stored")
    

    def __str__(self):
        return self.session_name + "   Created session at : " +str(self.created_at) + "      Ended session at  : " +str(self.finished_at) 
    
class Assessment(models.Model):
    session_id = models.CharField(max_length=100, default = "")
    assesment_id = models.ForeignKey(StudySession, on_delete=models.CASCADE)
    topic  = models.CharField(max_length=100, default = "")
    score = models.DecimalField(max_digits=4, decimal_places=2)
    
    def __str__(self):
        return self.assesment_id.session_name  + " assesment - "+ str(self.id)
    
class Mcq(models.Model):
    assessment_id =  models.CharField(max_length=100, default = "")
    assesment = models.ForeignKey(Assessment, on_delete=models.CASCADE)
    gen_question = models.CharField(max_length=2000, default = "")
    is_correct = models.BooleanField(null = True , default = "")
    time_taken  = models.IntegerField(null = True , default = "")
    difficulty_score =  models.DecimalField(max_digits=4, decimal_places=2,null = True , default = "")

    def __str__(self):
        return str(self.difficulty_score) + " : Topic : " + self.assesment.topic  + " question - " + ast.literal_eval(self.gen_question)["question"] 
    

    
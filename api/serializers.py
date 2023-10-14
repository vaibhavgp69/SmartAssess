from rest_framework import serializers
from .models import StudySession, Assessment
import uuid

class StudySessionSerializer(serializers.ModelSerializer):
    created_at = serializers.CharField(required=False, read_only=True)
    pdf_url = serializers.CharField(required=False, read_only=True)
    finished_at = serializers.CharField(required=False, read_only=True)
    session_id = serializers.CharField(required=False, read_only=True)
    status = serializers.CharField(required=False, read_only=True)
    session_name = serializers.CharField(required=False, read_only=True)
    class Meta:
        model = StudySession
        fields = ['session_name','session_id', 'pdf_file', 'pdf_url', 'created_at','finished_at','status']

    def create(self, data):        
        data['session_name'] = 'some thing'  
        studysession= StudySession.objects.create(
            session_name = data['session_name'],
            pdf_file = data.get("pdf_file")
        )


        studysession.save()
        data['created_at'] = studysession.created_at
        data['session_id'] = studysession.session_id
        data['pdf_url'] = studysession.pdf_file.url
        data['status'] = 'Session Created Sucessfully '
        data['finished_at'] = 'Session not closed'
        data['session_name'] = "Topic : " + studysession.pdf_file.url[7:-4] 
        studysession.session_name = data['session_name']
        studysession.save()
        return data
    
class AssessmentSerializer(serializers.ModelSerializer):
    status = serializers.CharField(required=False, read_only=True)
    easy_questions = serializers.CharField(required=False, read_only=True)
    med_questions = serializers.CharField(required=False, read_only=True)
    hard_questions = serializers.CharField(required=False, read_only=True)
    score = serializers.IntegerField(required=False, read_only=True)
    pdf_url = serializers.CharField(required=False, read_only=True)

    class Meta:
        model = Assessment
        fields = ['id','session_id','easy_questions','med_questions','hard_questions','score','pdf_url','status']
    
    def create(self, data):    
        session_uuid = uuid.UUID(data['session_id']) 
        data['easy_questions'] = 'insert easy questions'
        data['med_questions'] = 'insert med questions'
        data['hard_questions'] = 'insert hard questions'
        data['score'] = 4
        current_session = StudySession.objects.get(session_id = session_uuid)
        data['pdf_url'] = current_session.pdf_file.url
        new_assessment = Assessment.objects.create(
            session_id = data['session_id'],
            assesment_id = current_session,
            easy_questions = data['easy_questions'],
            med_questions = data['med_questions'],
            hard_questions = data['hard_questions'],
            score = data['score'],
        )
        new_assessment.save()
        data['status'] = 'Assesment created Sucessfully'
        return data
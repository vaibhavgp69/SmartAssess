from rest_framework import serializers
from .models import StudySession

class StudySessionSerializer(serializers.ModelSerializer):
    created_at = serializers.CharField(required=False, read_only=True)
    pdf_url = serializers.CharField(required=False, read_only=True)
    finished_at = serializers.CharField(required=False, read_only=True)
    session_id = serializers.CharField(required=False, read_only=True)
    status = serializers.CharField(required=False, read_only=True)
    class Meta:
        model = StudySession
        fields = ['session_name','session_id', 'pdf_file', 'pdf_url', 'created_at','finished_at','status']

    def create(self, data):          
        eval = "some stuff"
        question = "some stuff"


        studysession= StudySession.objects.create(
            session_name = data.get("session_name"),
            pdf_file = data.get("pdf_file")
        )


        studysession.save()
        data['created_at'] = studysession.created_at
        data['session_id'] = studysession.session_id
        data['pdf_url'] = studysession.pdf_file.url
        data['status'] = 'Session Created Sucessfully '
        data['finished_at'] = 'Session not closed'
        return data
    
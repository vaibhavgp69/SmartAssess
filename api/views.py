from django.shortcuts import render
from django.http import Http404
from rest_framework import generics

from rest_framework.views import APIView

from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes
from rest_framework import status, permissions

from rest_framework.decorators import api_view, renderer_classes
from rest_framework.response import Response
from rest_framework.parsers import FileUploadParser
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser

from .models import *
from .serializers import *


# Create your views here.



@api_view()
@permission_classes([IsAuthenticated])
def secret(request):
    return Response({"message":"some message"})

@api_view()
@permission_classes([IsAuthenticated])
def manager_view(request):
    if request.user.groups.filter(name='manager').exists():
        return Response({"message":"some manager message"})
    else:
        return Response({"message": " You are not authorised"}, 403)
    
class StudySessionView(generics.ListCreateAPIView):
    queryset = StudySession.objects.all()
    serializer_class = StudySessionSerializer

class AssesmentView(generics.ListCreateAPIView):
    queryset = Assessment.objects.all()
    serializer_class = AssessmentSerializer


class McqView(generics.ListCreateAPIView):
    queryset = Mcq.objects.all()
    serializer_class = McqSerializer





from django.shortcuts import render
from rest_framework import generics


from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes

from rest_framework.decorators import api_view, renderer_classes
from rest_framework.response import Response

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
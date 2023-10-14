from django.urls import path
from .views import *
from . import views
from django.urls import include, re_path


from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('secret', views.secret, name='secret' ),
    path('managerview', views.manager_view, name='managerview' ),
    path('api-token-auth/', obtain_auth_token),
    # path('v1/file', Files_APIView.as_view()), 
    # path('v1/file/<int:pk>', Files_APIView_Detail.as_view()),
    path('newsession', views.StudySessionView.as_view(), name = 'newsession'),
    path('newassessment', views.AssesmentView.as_view(), name = 'newassessment'),
    path('newmcq', views.McqView.as_view(), name = 'newmcq'),

]
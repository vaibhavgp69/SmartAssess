from django.urls import path
from .views import *
from . import views

from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('secret', views.secret, name='secret' ),
    path('managerview', views.manager_view, name='managerview' ),
    path('api-token-auth/', obtain_auth_token),
    

]
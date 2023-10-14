"""
URL configuration for DjangoReact project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework_simplejwt.views import TokenBlacklistView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include('api.urls')),

    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),  #to setup djoser

    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'), #generate acess and refresh token during login
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'), #send refresh key as post data to get new acess token

    path('api/token/blacklist/', TokenBlacklistView.as_view(), name = 'token_blacklist'), #post request with refresh variable


]

# DJOSER ENDPOINTS

# /users/                                  create user: username , email , passowrd in POST request
# /users/me/
# /users/confirm/
# /users/resend_activation/
# /users/set_password/
# /users/reset_password/
# /users/reset_password_confirm/
# /users/set_username/
# /users/reset_username/
# /users/rest_username_confirm/
# /users/login/                          recieve token during login
# /users/logout/

#flow:

# /auth/users/ --> Register user with email,username , password - DJOSER


#/api/token/ --> GENERATE ACESS AND REFRESH TOKEN during user login with username/(optional email) and passwoerd POST request
#/api/token/refresh --> Generate new acess token every 5 minutes , POST request with 'refresh' variable
#/api/token/blacklist
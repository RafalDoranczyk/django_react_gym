from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .api import LoginUser, SignupUser

urlpatterns = [
    path('signup/', SignupUser.as_view(), name="signup"),
    path('login/', LoginUser.as_view(), name='login'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]
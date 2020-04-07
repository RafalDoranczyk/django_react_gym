from .models import CustomUser
from rest_framework_simplejwt.serializers import TokenObtainSerializer, RefreshToken
from rest_framework import serializers, exceptions
from django.conf import settings


class LoginSerializer(TokenObtainSerializer):

    @classmethod
    def get_token(cls, user):
        return RefreshToken.for_user(user)

    def validate(self, attrs):
        data = super().validate(attrs)

        refresh = self.get_token(self.user)

        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)
        data['access_time'] = settings.SIMPLE_JWT['ACCESS_TOKEN_LIFETIME']
        data['refresh_time'] = settings.SIMPLE_JWT['REFRESH_TOKEN_LIFETIME']
        return data


class SignupUserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True
    )
    username = serializers.CharField()
    password = serializers.CharField(min_length=6, write_only=True)

    class Meta:
        model = CustomUser
        fields = ('email', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

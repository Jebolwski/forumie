from dataclasses import fields
from rest_framework import serializers
from .models import *
from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User
class ForumSerializer(ModelSerializer):
    class Meta:
        model       = Forum
        fields      = "__all__"

class ForumYanitSerializer(ModelSerializer):
    class Meta:
        model       = ForumYanit
        fields      = "__all__"


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','email','password','is_superuser','date_joined','last_login','is_authenticated']

        extra_kwargs = {'password':{
            'write_only':True,
            'required' :True
        }}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class ProfilSerializer(ModelSerializer):
    class Meta:
        model       = Profil
        fields      = "__all__"
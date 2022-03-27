from dataclasses import fields
from rest_framework import serializers
from .models import *
from rest_framework.serializers import ModelSerializer

class ForumSerializer(ModelSerializer):
    class Meta:
        model       = Forum
        fields      = "__all__"

class ForumYanitSerializer(ModelSerializer):
    class Meta:
        model       = ForumYanit
        fields      = "__all__"
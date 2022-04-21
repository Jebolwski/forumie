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
    
    url = serializers.SerializerMethodField('get_profil_url')
    class Meta:
        model       = ForumYanit
        fields      = ['id','username','profil','cevaba_cevap','cevaba_cevap_profil_username','forum','cevap','url','olusturma','guncelle']

    def get_profil_url(self,yanit):
        url = yanit.profil.profil_foto.url
        return url
    
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

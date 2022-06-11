from rest_framework import serializers
from .models import *
from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password


class ForumSerializer(ModelSerializer):
    url = serializers.SerializerMethodField('get_profil_url')
    yanit_sayisi = serializers.SerializerMethodField('get_yanit_sayisi')
    
    class Meta:
        model       = Forum
        fields      = "__all__"

    def get_profil_url(self,forum):
        if forum.profil.profil_foto:
            url = forum.profil.profil_foto.url
            return url
        else:
            return None
    
    def get_yanit_sayisi(self,forum):
        num = len(ForumYanit.objects.filter(forum_id=forum.id))
        return num


class ForumYanitSerializer(ModelSerializer):
    
    url = serializers.SerializerMethodField('get_profil_url')
    class Meta:
        model       = ForumYanit
        fields      = ['id','username','profil','cevaba_cevap','cevaba_cevap_profil_username','forum','cevap','url','olusturma','guncelle']

    def get_profil_url(self,forum):
        if forum.profil.profil_foto:
            url = forum.profil.profil_foto.url
            return url
        else:
            return None
    
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



class ChangePasswordSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)
    old_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('old_password', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})

        return attrs

    def validate_old_password(self, value):
        user = self.context['request'].user
        if not user.check_password(value):
            raise serializers.ValidationError({"old_password": "Old password is not correct"})
        return value

    def update(self, instance, validated_data):

        instance.set_password(validated_data['password'])
        instance.save()

        return instance



class AnketSoruSerializer(serializers.ModelSerializer):

    url = serializers.SerializerMethodField('get_profil_url')
    username = serializers.SerializerMethodField('get_profil_username')
    class Meta:
        model = AnketSoru
        fields = "__all__"

    def get_profil_url(self,anket):
        if anket.profil.profil_foto:
            url = anket.profil.profil_foto.url
            return url
        else:
            return None

    def get_profil_username(self,anket):
        if anket.profil.profil_foto:
            url = anket.profil.user.username
            return url
        else:
            return None
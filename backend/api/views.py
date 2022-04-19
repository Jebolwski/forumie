from multiprocessing import managers
import profile
from pydoc import doc
import re
from urllib import response
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from django.contrib.auth import login,logout,authenticate
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import *
from .serializers import *
from django.utils.text import slugify



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['email'] = user.email
        token['is_authenticated'] = user.is_authenticated
        token['is_superuser'] = user.is_superuser


        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def Routes(request):
    routes = [
        '/api/token/',
        '/api/token/refresh/',
        '/register/',
        '/forum/<int:pk>/',
        '/forum-kabul/',
        '/forumlar/',
    ]

    return Response(routes)

@permission_classes([IsAuthenticated])
@api_view(['GET','PUT','DELETE'])
def ForumView(request,pk):
    if request.method=="GET":
        forum = Forum.objects.get(id=pk)
        serializer = ForumSerializer(forum,many=False)
        return Response(serializer.data)
    
    if request.method=="DELETE":
        forum = Forum.objects.get(id=pk)
        forum.delete()
        return Response("Başarıyla silindi.")    
        

    if request.method=='PUT':
        fake_data = request.data.copy()
        fake_data['profil'] = Profil.objects.get(username=request.data['username'])
        fake_data['username'] = request.data['username']
        fake_data['baslik_slug'] = request.data['baslik_slug']
        fake_data['baslik'] = request.data['baslik']
        inst = Forum.objects.get(id=pk)
        serializer = ForumSerializer(instance = inst,data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response("Error!")

@api_view(['GET','POST'])
def KayitOl(request):
    if request.method=='POST':
        serializer = UserSerializer(data=request.data,many=False)
        if serializer.is_valid():
            serializer.save()
            Profil.objects.create(
                profil_foto=None,
                arkaplan_foto=None,
                biyografi=None,
                user=User.objects.get(username=request.data['username']),
                username=User.objects.get(username=request.data['username']).username,
                username_slug=(request.data['username_slug']).lower()
            )
            return Response(serializer.data)
    return Response("Kayıt Ol")

@api_view(['POST','GET'])
@permission_classes([IsAuthenticated])
def ForumEkleView(request):
    user = request.user
    Forum.objects.create(
        profil = Profil.objects.get(user_id = request.user.id),
        baslik_slug = request.data['baslik_slug'].lower(),
        username = request.data['username'],
        baslik = request.data['baslik'],
        soru = request.data['soru'],
        category = request.data['category'],
    )
    return Response("Yes")

@api_view(['POST','GET'])
def EmailDegistir(request):
    user = User.objects.get(id=request.data['userId'])
    user.email=request.data['newEmail']
    user.save()
    serializer = UserSerializer(user,many=False)
    return Response(serializer.data)

@api_view(['GET'])
def ForumlarView(request):
    forumlar = Forum.objects.all()
    serializer = ForumSerializer(forumlar,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def ForumlarMMAView(request):
    forumlar = Forum.objects.all().filter(category="MMA")
    serializer = ForumSerializer(forumlar,many=True)
    return Response(serializer.data)

@api_view(['GET','POST'])
def ForumCevapla(request):
    fake_data = request.data.copy()
    fake_data['profil'] = Profil.objects.get(username = request.data['username']).id
    fake_data['username'] = request.data['username']
    sorted_data = sorted(list(request.data))
    if sorted_data[0]!='cevaba_cevap':
        fake_data['cevaba_cevap_profil_username'] = request.data['cevaba_cevap_profil_username']
        fake_data['cevaba_cevap'] = ForumYanit.objects.get(id=request.data['cevaba_cevap'])
    serializer = ForumYanitSerializer(data = fake_data)
    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['DELETE'])
def ForumCevapSil(request,pk):
    forumyanit = ForumYanit.objects.get(id = pk)
    forumyanit.delete()
    return Response("Silindi!")

@api_view(['GET'])
def ForumCevaplari(request,pk):
    cevaplar = ForumYanit.objects.filter(forum_id=pk)
    serializer = ForumYanitSerializer(cevaplar,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def ForumlarSporView(request):
    forumlar = Forum.objects.all().filter(category="Spor")
    serializer = ForumSerializer(forumlar,many=True)
    return Response(serializer.data)


@api_view(['GET'])
def SporForumlarView(request):
    forumlar = Forum.objects.filter(category="Spor")
    serializer = ForumSerializer(forumlar,many=True)

    return Response(serializer.data)


@api_view(['GET'])
def CombatForumlarView(request):
    forumlar = Forum.objects.filter(category="MMA")
    serializer = ForumSerializer(forumlar,many=True)
    return Response(serializer.data)


@api_view(['GET'])
def ForumDetayView(request,pk):
    forum = Forum.objects.get(id=pk)
    serializer = ForumSerializer(forum,many=False) 
    return Response(serializer.data)


@api_view(['GET'])
def KisininForumlariView(request,my_slug):
    profil = Profil.objects.get(username_slug=my_slug)
    forumlari = Forum.objects.all().filter(username = profil.username)
    serializer = ForumSerializer(forumlari,many=True)
    return Response(serializer.data)

@permission_classes([IsAuthenticated])
@api_view(['GET'])
def ProfilView(request,my_slug):
    profil = Profil.objects.get(username_slug=my_slug)
    serializer = ProfilSerializer(profil,many=False)
    return Response(serializer.data)

@api_view(['GET','PUT','POST'])
def ProfilDuzenleView(request,my_slug):
    profil = Profil.objects.get(username_slug=my_slug)
    fake_data = request.data.copy()
    serializer = ProfilSerializer(profil,data = fake_data)
    
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)
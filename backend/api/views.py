from cmath import log
import json
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
from rest_framework.pagination import PageNumberPagination
from rest_framework import generics
import json




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


@api_view(['GET','POST'])
def KayitOl(request):
    if request.method=='POST':
        usernames=[]
        emails=[]
        for i in User.objects.all():
            usernames.append(i.username)
            emails.append(i.email)
        if request.data['username'] in usernames:
            return Response("Bu kullanıcı adı mevcut.")

        elif request.data['password1']!=request.data['password']:
            return Response("Şifreler uyuşmuyor.")

        elif len(request.data['password1']) or len(request.data['password']):
            return Response("Şifre en az 8 karakter olmalıdır.")

        elif request.data['email'] in emails:
            return Response("Bu email mevcut.")
        else:
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
    )
    return Response("Yes")

@api_view(['POST','GET'])
def EmailDegistir(request):
    user = User.objects.get(id=request.data['userId'])
    user.email=request.data['newEmail']
    user.save()
    serializer = UserSerializer(user,many=False)
    return Response(serializer.data)


#!FORUMLAR VIEW

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

@api_view(['GET'])
def ForumlarView(request):
    paginator = PageNumberPagination()
    paginator.page_size = 5
    forumlar = Forum.objects.all().order_by('-guncelle')
    forumar_paginated = paginator.paginate_queryset(forumlar, request)
    serializer = ForumSerializer(forumar_paginated,many=True)
    return Response(serializer.data)

@api_view(['GET','POST'])
def ForumCevapla(request):
    fake_data = request.data.copy()
    fake_data['profil'] = Profil.objects.get(user_id = User.objects.get(username=request.data['username']).id).id
    fake_data['username'] = request.data['username']
    sorted_data = sorted(list(request.data))
    if sorted_data[0]!='cevaba_cevap':
        fake_data['cevaba_cevap_profil_username'] = request.data['cevaba_cevap_profil_username']
        fake_data['cevaba_cevap'] = ForumYanit.objects.get(id=request.data['cevaba_cevap'])
    serializer = ForumYanitSerializer(data = fake_data)
    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['GET','POST'])
def KisiForumReforumieleri(request,pk):
    pass

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
def AllForumlarView(request):
    forumlar = Forum.objects.all().count()
    return Response(forumlar)

@api_view(['GET'])
def ForumDetayView(request,pk):
    forum = Forum.objects.get(id=pk)
    serializer = ForumSerializer(forum,many=False) 
    return Response(serializer.data)

@api_view(['GET','POST'])
def KisininForumlariView(request):
    profil = Profil.objects.get(user_id=request.data['user_id'])
    user = User.objects.get(id=request.data['user_id'])
    forumlar = []
    for i in Forum.objects.all():
        if user in i.reforumie.all():
            forumlar.append(i)

    forumlari = Forum.objects.filter(profil_id = profil.id).order_by('-guncelle')
    for i in forumlari:
        forumlar.append(i)

    serializer = ForumSerializer(forumlar,many=True)

    return Response(serializer.data)

@api_view(['GET','PUT','POST'])
def ForumBegen(request,pk):
    user = User.objects.get(username = request.data['username'])
    forum = Forum.objects.get(id=pk)
    if user in forum.likes.all():
        forum.likes.remove(user.id)
    else:
        forum.likes.add(user.id)
        forum.dislikes.remove(user.id)

    sayi = forum.likes.all().count()

    return Response(sayi)

@api_view(['GET','PUT','POST'])
def ForumBegenRenk(request,pk):
    user = User.objects.get(username = request.data['username'])
    forum = Forum.objects.get(id=pk)

    var = 0
    if user in forum.likes.all():
        var=1
    else:
        var=0
    
    return Response(var)

@api_view(['GET','POST'])
def ForumGoruldu(request,pk):
    forum = Forum.objects.get(id=pk)
    user = User.objects.get(username = request.data['username'])
    forum.goruldu.add(user.id)
    serializer = ForumSerializer(forum,many=False)
    return Response(serializer.data)

@api_view(['GET','POST'])
def ForumReforumie(request,pk):
    user = User.objects.get(username = request.data['username'])
    forum = Forum.objects.get(id=pk)
    if user in forum.reforumie.all():
        forum.reforumie.remove(user.id) 
    else:
        forum.reforumie.add(user.id) 

    sayi = forum.reforumie.all().count()
    return Response(sayi)

@api_view(['GET','POST'])
def ForumReforumieRenk(request,pk):
    user = User.objects.get(username = request.data['username'])
    forum = Forum.objects.get(id=pk)
    var=0
    if user in forum.reforumie.all():
        var=1
    else:
        var=0
    return Response(var)

@api_view(['GET','POST'])
def ForumCevapReforumie(request,pk):
    user = User.objects.get(username = request.data['username'])
    forum = ForumYanit.objects.get(id=pk)

    if user in forum.reforumie.all():
        forum.reforumie.remove(user.id) 
    else:
        forum.reforumie.add(user.id) 
    sayi = forum.reforumie.all().count()
    return Response(sayi)


#!PROFİL    
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
    if (request.data['profil_foto_tem']=="true"):
        fake_data['profil_foto']=None
    if (request.data['arkaplan_foto_tem']=="true"):
        fake_data['arkaplan_foto']=None
    serializer = ProfilSerializer(profil,data = fake_data)
    
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


class ChangePasswordView(generics.UpdateAPIView):

    queryset = User.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = ChangePasswordSerializer
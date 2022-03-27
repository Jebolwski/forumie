from pydoc import doc
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
        '/forum/<slug:my_slug>/',
        '/forum-kabul/',
        '/forumlar/',
    ]

    return Response(routes)

@permission_classes([IsAdminUser])
@api_view(['GET','PUT','DELETE'])
def ForumView(request,my_slug):
    if request.method=="GET":
        forum = Forum.objects.get(baslik_slug=my_slug)
        serializer = ForumSerializer(forum,many=False)
        return Response(serializer.data)

    if request.method=="DELETE":
        forum = Forum.objects.get(baslik_slug=my_slug)
        forum.delete()
        
        return Response("Başarıyla silindi.")

    if request.method=='PUT':
        inst = Forum.objects.get(baslik_slug=my_slug)
        serializer = ForumSerializer(instance = inst,data = fake_data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data)
        return Response("Error!")


@permission_classes([IsAdminUser])
@api_view(['POST','GET'])
def ForumEkleView(request):
    if request.method=="POST":
            fake_data = request.data.copy()
            fake_data['user'] = request.user.id
            fake_data['baslik_slug'] = slugify(request.data['baslik'])
            fake_data['username'] = request.user.username
            serializer = ForumSerializer(data = fake_data)
            if serializer.is_valid():
                serializer.save()

                return Response(serializer.data)
            return Response("Error!")
    return Response("Enter data!")


@api_view(['GET'])
def ForumlarView(request):
    forumlar = Forum.objects.all()
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
def ForumDetayView(request,my_slug):
    forum = Forum.objects.get(baslik_slug=my_slug)
    serializer = ForumSerializer(forum,many=False) 

    return Response(serializer.data)
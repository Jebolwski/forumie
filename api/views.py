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
import datetime





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
    profil = Profil.objects.get(username_slug=request.data['user_slug'])
    user = User.objects.get(id=profil.user.id)
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


@api_view(['GET'])
def Anketler(request):
    
    anketler = AnketSoru.objects.all()
    serializer = AnketSoruSerializer(anketler,many=True)
    return Response(serializer.data)


@api_view(['GET'])
def AnketDetay(request,pk):
    anket = AnketSoru.objects.get(id=pk)
    
    
    serializer = AnketSoruSerializer(anket,many=False)
    return Response(serializer.data)


@api_view(['GET'])
def AnketDuzenlenebilirmi(request,pk):
    anket = AnketSoru.objects.get(id=pk)
    if (
        anket.guncelle.strftime("%d")==datetime.datetime.now().strftime("%d")
        and 
        anket.guncelle.strftime("%B")==datetime.datetime.now().strftime("%B")
        and 
        anket.guncelle.strftime("%Y")==datetime.datetime.now().strftime("%Y")
        and 
        (
        (int(datetime.datetime.now().strftime("%H"))  == int(anket.guncelle.strftime("%H"))+ 3 and (int(datetime.datetime.now().strftime("%M"))-int(anket.guncelle.strftime("%M"))) < 6 )
            or 
        (int(datetime.datetime.now().strftime("%H")) - int(anket.guncelle.strftime("%H")) + 3 == 1 and (int(datetime.datetime.now().strftime("%M")) + 60 - int(anket.guncelle.strftime("%M")) < 6))
        )):
        return Response("Y")
    else:
        return Response("N")
    

@api_view(['GET','POST'])
def AnketCevapla(request,pk):
    anket = AnketSoru.objects.get(id=pk)
    fake_data = request.data.copy()
    fake_data['anketsoru']=AnketSoru.objects.get(id=pk).id
    fake_data['profil']=Profil.objects.get(user_id=request.data["user_id"]).id
    if request.method=="POST":
        serializer = AnketCevapSerializer(data = fake_data)
        if serializer.is_valid():
            serializer.save()
        else:
            print("valid degil.")
    return Response(serializer.data)


@api_view(['GET'])
def AnketAnaliz(request,pk):
    anket_cevaplari = AnketCevap.objects.filter(anketsoru=AnketSoru.objects.get(id=pk))
    paginator = PageNumberPagination()
    paginator.page_size = 1
    anketler_paginated = paginator.paginate_queryset(anket_cevaplari, request)
    serializer = AnketCevapSerializer(anketler_paginated,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def AnketCevapSayisi(request,pk):
    anket_cevaplari = len(AnketCevap.objects.filter(anketsoru=AnketSoru.objects.get(id=pk)))
    return Response(anket_cevaplari)


@api_view(['GET','PUT','POST'])
def AnketEkle(request):
    if request.method=="POST":
        serializer = AnketSoruSerializer(data = request.data)
        AnketSoru.objects.create(
            baslik=request.data.get('baslik'),

            profil = Profil.objects.get(user_id = request.data.get("user_id")),

            aciklama=request.data.get("aciklama"),

            soru1=request.data.get("soru1"),
            soru2=request.data.get("soru2"),
            soru3=request.data.get("soru3"),
            soru4=request.data.get("soru4"),
            soru5=request.data.get("soru5"),
            soru6=request.data.get("soru6"),
            soru7=request.data.get("soru7"),
            soru8=request.data.get("soru8"),
            soru9=request.data.get("soru9"),
            soru10=request.data.get("soru10"),
            soru11=request.data.get("soru11"),
            soru12=request.data.get("soru12"),
            soru13=request.data.get("soru13"),
            soru14=request.data.get("soru14"),
            soru15=request.data.get("soru15"),
            soru16=request.data.get("soru16"),
            soru17=request.data.get("soru17"),
            soru18=request.data.get("soru18"),
            soru19=request.data.get("soru19"),
            soru20=request.data.get("soru20"),

            soru1cevap1=request.data.get('soru1cevap1'),
            soru1cevap2=request.data.get('soru1cevap2'),
            soru1cevap3=request.data.get('soru1cevap3'),
            soru1cevap4=request.data.get('soru1cevap4'),
            soru1cevap5=request.data.get('soru1cevap5'),

            soru2cevap1=request.data.get('soru2cevap1'),
            soru2cevap2=request.data.get('soru2cevap2'),
            soru2cevap3=request.data.get('soru2cevap3'),
            soru2cevap4=request.data.get('soru2cevap4'),
            soru2cevap5=request.data.get('soru2cevap5'),

            soru3cevap1=request.data.get('soru3cevap1'),
            soru3cevap2=request.data.get('soru3cevap2'),
            soru3cevap3=request.data.get('soru3cevap3'),
            soru3cevap4=request.data.get('soru3cevap4'),
            soru3cevap5=request.data.get('soru3cevap5'),

            soru4cevap1=request.data.get('soru4cevap1'),
            soru4cevap2=request.data.get('soru4cevap2'),
            soru4cevap3=request.data.get('soru4cevap3'),
            soru4cevap4=request.data.get('soru4cevap4'),
            soru4cevap5=request.data.get('soru4cevap5'),

            soru5cevap1=request.data.get('soru5cevap1'),
            soru5cevap2=request.data.get('soru5cevap2'),
            soru5cevap3=request.data.get('soru5cevap3'),
            soru5cevap4=request.data.get('soru5cevap4'),
            soru5cevap5=request.data.get('soru5cevap5'),

            soru6cevap1=request.data.get('soru6cevap1'),
            soru6cevap2=request.data.get('soru6cevap2'),
            soru6cevap3=request.data.get('soru6cevap3'),
            soru6cevap4=request.data.get('soru6cevap4'),
            soru6cevap5=request.data.get('soru6cevap5'),

            soru7cevap1=request.data.get('soru7cevap1'),
            soru7cevap2=request.data.get('soru7cevap2'),
            soru7cevap3=request.data.get('soru7cevap3'),
            soru7cevap4=request.data.get('soru7cevap4'),
            soru7cevap5=request.data.get('soru7cevap5'),

            soru8cevap1=request.data.get('soru8cevap1'),
            soru8cevap2=request.data.get('soru8cevap2'),
            soru8cevap3=request.data.get('soru8cevap3'),
            soru8cevap4=request.data.get('soru8cevap4'),
            soru8cevap5=request.data.get('soru8cevap5'),

            soru9cevap1=request.data.get('soru9cevap1'),
            soru9cevap2=request.data.get('soru9cevap2'),
            soru9cevap3=request.data.get('soru9cevap3'),
            soru9cevap4=request.data.get('soru9cevap4'),
            soru9cevap5=request.data.get('soru9cevap5'),

            soru10cevap1=request.data.get('soru10cevap1'),
            soru10cevap2=request.data.get('soru10cevap2'),
            soru10cevap3=request.data.get('soru10cevap3'),
            soru10cevap4=request.data.get('soru10cevap4'),
            soru10cevap5=request.data.get('soru10cevap5'),

            soru11cevap1=request.data.get('soru11cevap1'),
            soru11cevap2=request.data.get('soru11cevap2'),
            soru11cevap3=request.data.get('soru11cevap3'),
            soru11cevap4=request.data.get('soru11cevap4'),
            soru11cevap5=request.data.get('soru11cevap5'),

            soru12cevap1=request.data.get('soru12cevap1'),
            soru12cevap2=request.data.get('soru12cevap2'),
            soru12cevap3=request.data.get('soru12cevap3'),
            soru12cevap4=request.data.get('soru12cevap4'),
            soru12cevap5=request.data.get('soru12cevap5'),

            soru13cevap1=request.data.get('soru13cevap1'),
            soru13cevap2=request.data.get('soru13cevap2'),
            soru13cevap3=request.data.get('soru13cevap3'),
            soru13cevap4=request.data.get('soru13cevap4'),
            soru13cevap5=request.data.get('soru13cevap5'),

            soru14cevap1=request.data.get('soru14cevap1'),
            soru14cevap2=request.data.get('soru14cevap2'),
            soru14cevap3=request.data.get('soru14cevap3'),
            soru14cevap4=request.data.get('soru14cevap4'),
            soru14cevap5=request.data.get('soru14cevap5'),

            soru15cevap1=request.data.get('soru15cevap1'),
            soru15cevap2=request.data.get('soru15cevap2'),
            soru15cevap3=request.data.get('soru15cevap3'),
            soru15cevap4=request.data.get('soru15cevap4'),
            soru15cevap5=request.data.get('soru15cevap5'),

            soru16cevap1=request.data.get('soru16cevap1'),
            soru16cevap2=request.data.get('soru16cevap2'),
            soru16cevap3=request.data.get('soru16cevap3'),
            soru16cevap4=request.data.get('soru16cevap4'),
            soru16cevap5=request.data.get('soru16cevap5'),

            soru17cevap1=request.data.get('soru17cevap1'),
            soru17cevap2=request.data.get('soru17cevap2'),
            soru17cevap3=request.data.get('soru17cevap3'),
            soru17cevap4=request.data.get('soru17cevap4'),
            soru17cevap5=request.data.get('soru17cevap5'),

            soru18cevap1=request.data.get('soru18cevap1'),
            soru18cevap2=request.data.get('soru18cevap2'),
            soru18cevap3=request.data.get('soru18cevap3'),
            soru18cevap4=request.data.get('soru18cevap4'),
            soru18cevap5=request.data.get('soru18cevap5'),

            soru19cevap1=request.data.get('soru19cevap1'),
            soru19cevap2=request.data.get('soru19cevap2'),
            soru19cevap3=request.data.get('soru19cevap3'),
            soru19cevap4=request.data.get('soru19cevap4'),
            soru19cevap5=request.data.get('soru19cevap5'),


            soru20cevap1=request.data.get('soru20cevap1'),
            soru20cevap2=request.data.get('soru20cevap2'),
            soru20cevap3=request.data.get('soru20cevap3'),
            soru20cevap4=request.data.get('soru20cevap4'),
            soru20cevap5=request.data.get('soru20cevap5'),

        )
        

    return Response("Enter data!")


@api_view(['PUT'])
def AnketDuzenle(request,pk):
    anket = AnketSoru.objects.get(id=pk)

    serializer = AnketSoruSerializer(data = request.data)
    if(request.data.get('baslik')):
        anket.baslik=request.data.get('baslik')
    if(request.data.get('profil')):
        anket.profil = Profil.objects.get(user_id = request.data.get("user_id"))
    if(request.data.get('aciklama')):
        anket.aciklama=request.data.get("aciklama")
    if(request.data.get('soru1')):
        anket.soru1=request.data.get("soru1")
    if(request.data.get('soru2')):
        anket.soru2=request.data.get("soru2")
    if(request.data.get('soru3')):
        anket.soru3=request.data.get("soru3")
    if(request.data.get('soru4')):
        anket.soru4=request.data.get("soru4")
    if(request.data.get('soru5')):
        anket.soru5=request.data.get("soru5")
    if(request.data.get('soru6')):
        anket.soru6=request.data.get("soru6")
    if(request.data.get('soru7')):
        anket.soru7=request.data.get("soru7")
    if(request.data.get('soru8')):
        anket.soru8=request.data.get("soru8")
    if(request.data.get('soru9')):
        anket.soru9=request.data.get("soru9")
    if(request.data.get('soru10')):
        anket.soru10=request.data.get("soru10")
    if(request.data.get('soru11')):
        anket.soru11=request.data.get("soru11")
    if(request.data.get('soru12')):
        anket.soru12=request.data.get("soru12")
    if(request.data.get('soru13')):
        anket.soru13=request.data.get("soru13")
    if(request.data.get('soru14')):
        anket.soru14=request.data.get("soru14")
    if(request.data.get('soru15')):
        anket.soru15=request.data.get("soru15")
    if(request.data.get('soru16')):
        anket.soru16=request.data.get("soru16")
    if(request.data.get('soru17')):
        anket.soru17=request.data.get("soru17")
    if(request.data.get('soru18')):
        anket.soru18=request.data.get("soru18")
    if(request.data.get('soru19')):
        anket.soru19=request.data.get("soru19")
    if(request.data.get('soru20')):
        anket.soru20=request.data.get("soru20")
    if(request.data.get('soru1cevap1')):
        anket.soru1cevap1=request.data.get('soru1cevap1')
    if(request.data.get('soru1cevap2')):
        anket.soru1cevap2=request.data.get('soru1cevap2')
    if(request.data.get('soru1cevap3')):
        anket.soru1cevap3=request.data.get('soru1cevap3')
    if(request.data.get('soru1cevap4')):
        anket.soru1cevap4=request.data.get('soru1cevap4')
    if(request.data.get('soru1cevap5')):
        anket.soru1cevap5=request.data.get('soru1cevap5')
    if(request.data.get('soru2cevap1')):
        anket.soru2cevap1=request.data.get('soru2cevap1')
    if(request.data.get('soru2cevap2')):
        anket.soru2cevap2=request.data.get('soru2cevap2')
    if(request.data.get('soru2cevap3')):
        anket.soru2cevap3=request.data.get('soru2cevap3')
    if(request.data.get('soru2cevap4')):
        anket.soru2cevap4=request.data.get('soru2cevap4')
    if(request.data.get('soru2cevap5')):
        anket.soru2cevap5=request.data.get('soru2cevap5')
    if(request.data.get('soru3cevap1')):
        anket.soru3cevap1=request.data.get('soru3cevap1')
    if(request.data.get('soru3cevap2')):
        anket.soru3cevap2=request.data.get('soru3cevap2')
    if(request.data.get('soru3cevap3')):
        anket.soru3cevap3=request.data.get('soru3cevap3')
    if(request.data.get('soru3cevap4')):
        anket.soru3cevap4=request.data.get('soru3cevap4')
    if(request.data.get('soru3cevap5')):
        anket.soru3cevap5=request.data.get('soru3cevap5')
    if(request.data.get('soru4cevap1')):
        anket.soru4cevap1=request.data.get('soru4cevap1')
    if(request.data.get('soru4cevap2')):
        anket.soru4cevap2=request.data.get('soru4cevap2')
    if(request.data.get('soru4cevap3')):
        anket.soru4cevap3=request.data.get('soru4cevap3')
    if(request.data.get('soru4cevap4')):
        anket.soru4cevap4=request.data.get('soru4cevap4')
    if(request.data.get('soru4cevap5')):
        anket.soru4cevap5=request.data.get('soru4cevap5')
    if(request.data.get('soru5cevap1')):
        anket.soru5cevap1=request.data.get('soru5cevap1')
    if(request.data.get('soru5cevap2')):
        anket.soru5cevap2=request.data.get('soru5cevap2')
    if(request.data.get('soru5cevap3')):
        anket.soru5cevap3=request.data.get('soru5cevap3')
    if(request.data.get('soru5cevap4')):
        anket.soru5cevap4=request.data.get('soru5cevap4')
    if(request.data.get('soru5cevap5')):
        anket.soru5cevap5=request.data.get('soru5cevap5')
    if(request.data.get('soru6cevap1')):
        anket.soru6cevap1=request.data.get('soru6cevap1')
    if(request.data.get('soru6cevap2')):
        anket.soru6cevap2=request.data.get('soru6cevap2')
    if(request.data.get('soru6cevap3')):
        anket.soru6cevap3=request.data.get('soru6cevap3')
    if(request.data.get('soru6cevap4')):
        anket.soru6cevap4=request.data.get('soru6cevap4')
    if(request.data.get('soru6cevap5')):
        anket.soru6cevap5=request.data.get('soru6cevap5')
    if(request.data.get('soru7cevap1')):
        anket.soru7cevap1=request.data.get('soru7cevap1')
    if(request.data.get('soru7cevap2')):
        anket.soru7cevap2=request.data.get('soru7cevap2')
    if(request.data.get('soru7cevap3')):
        anket.soru7cevap3=request.data.get('soru7cevap3')
    if(request.data.get('soru7cevap4')):
        anket.soru7cevap4=request.data.get('soru7cevap4')
    if(request.data.get('soru7cevap5')):
        anket.soru7cevap5=request.data.get('soru7cevap5')
    if(request.data.get('soru8cevap1')):
        anket.soru8cevap1=request.data.get('soru8cevap1')
    if(request.data.get('soru8cevap2')):
        anket.soru8cevap2=request.data.get('soru8cevap2')
    if(request.data.get('soru8cevap3')):
        anket.soru8cevap3=request.data.get('soru8cevap3')
    if(request.data.get('soru8cevap4')):
        anket.soru8cevap4=request.data.get('soru8cevap4')
    if(request.data.get('soru8cevap5')):
        anket.soru8cevap5=request.data.get('soru8cevap5')
    if(request.data.get('soru9cevap1')):
        anket.soru9cevap1=request.data.get('soru9cevap1')
    if(request.data.get('soru9cevap2')):
        anket.soru9cevap2=request.data.get('soru9cevap2')
    if(request.data.get('soru9cevap3')):
        anket.soru9cevap3=request.data.get('soru9cevap3')
    if(request.data.get('soru9cevap4')):
        anket.soru9cevap4=request.data.get('soru9cevap4')
    if(request.data.get('soru9cevap5')):
        anket.soru9cevap5=request.data.get('soru9cevap5')
    if(request.data.get('soru10cevap1')):
        anket.soru10cevap1=request.data.get('soru10cevap1')
    if(request.data.get('soru10cevap2')):
        anket.soru10cevap2=request.data.get('soru10cevap2')
    if(request.data.get('soru10cevap3')):
        anket.soru10cevap3=request.data.get('soru10cevap3')
    if(request.data.get('soru10cevap4')):
        anket.soru10cevap4=request.data.get('soru10cevap4')
    if(request.data.get('soru10cevap5')):
        anket.soru10cevap5=request.data.get('soru10cevap5')
    if(request.data.get('soru11cevap1')):
        anket.soru11cevap1=request.data.get('soru11cevap1')
    if(request.data.get('soru11cevap2')):
        anket.soru11cevap2=request.data.get('soru11cevap2')
    if(request.data.get('soru11cevap3')):
        anket.soru11cevap3=request.data.get('soru11cevap3')
    if(request.data.get('soru11cevap4')):
        anket.soru11cevap4=request.data.get('soru11cevap4')
    if(request.data.get('soru11cevap5')):
        anket.soru11cevap5=request.data.get('soru11cevap5')
    if(request.data.get('soru12cevap1')):
        anket.soru12cevap1=request.data.get('soru12cevap1')
    if(request.data.get('soru12cevap2')):
        anket.soru12cevap2=request.data.get('soru12cevap2')
    if(request.data.get('soru12cevap3')):
        anket.soru12cevap3=request.data.get('soru12cevap3')
    if(request.data.get('soru12cevap4')):
        anket.soru12cevap4=request.data.get('soru12cevap4')
    if(request.data.get('soru12cevap5')):
        anket.soru12cevap5=request.data.get('soru12cevap5')
    if(request.data.get('soru13cevap1')):
        anket.soru13cevap1=request.data.get('soru13cevap1')
    if(request.data.get('soru13cevap2')):
        anket.soru13cevap2=request.data.get('soru13cevap2')
    if(request.data.get('soru13cevap3')):
        anket.soru13cevap3=request.data.get('soru13cevap3')
    if(request.data.get('soru13cevap4')):
        anket.soru13cevap4=request.data.get('soru13cevap4')
    if(request.data.get('soru13cevap5')):
        anket.soru13cevap5=request.data.get('soru13cevap5')
    if(request.data.get('soru14cevap1')):
        anket.soru14cevap1=request.data.get('soru14cevap1')
    if(request.data.get('soru14cevap2')):
        anket.soru14cevap2=request.data.get('soru14cevap2')
    if(request.data.get('soru14cevap3')):
        anket.soru14cevap3=request.data.get('soru14cevap3')
    if(request.data.get('soru14cevap4')):
        anket.soru14cevap4=request.data.get('soru14cevap4')
    if(request.data.get('soru14cevap5')):
        anket.soru14cevap5=request.data.get('soru14cevap5')
    if(request.data.get('soru15cevap1')):
        anket.soru15cevap1=request.data.get('soru15cevap1')
    if(request.data.get('soru15cevap2')):
        anket.soru15cevap2=request.data.get('soru15cevap2')
    if(request.data.get('soru15cevap3')):
        anket.soru15cevap3=request.data.get('soru15cevap3')
    if(request.data.get('soru15cevap4')):
        anket.soru15cevap4=request.data.get('soru15cevap4')
    if(request.data.get('soru15cevap5')):
        anket.soru15cevap5=request.data.get('soru15cevap5')
    if(request.data.get('soru16cevap1')):
        anket.soru16cevap1=request.data.get('soru16cevap1')
    if(request.data.get('soru16cevap2')):
        anket.soru16cevap2=request.data.get('soru16cevap2')
    if(request.data.get('soru16cevap3')):
        anket.soru16cevap3=request.data.get('soru16cevap3')
    if(request.data.get('soru16cevap4')):
        anket.soru16cevap4=request.data.get('soru16cevap4')
    if(request.data.get('soru16cevap5')):
        anket.soru16cevap5=request.data.get('soru16cevap5')
    if(request.data.get('soru17cevap1')):
        anket.soru17cevap1=request.data.get('soru17cevap1')
    if(request.data.get('soru17cevap2')):
        anket.soru17cevap2=request.data.get('soru17cevap2')
    if(request.data.get('soru17cevap3')):
        anket.soru17cevap3=request.data.get('soru17cevap3')
    if(request.data.get('soru17cevap4')):
        anket.soru17cevap4=request.data.get('soru17cevap4')
    if(request.data.get('soru17cevap5')):
        anket.soru17cevap5=request.data.get('soru17cevap5')
    if(request.data.get('soru18cevap1')):
        anket.soru18cevap1=request.data.get('soru18cevap1')
    if(request.data.get('soru18cevap2')):
        anket.soru18cevap2=request.data.get('soru18cevap2')
    if(request.data.get('soru18cevap3')):
        anket.soru18cevap3=request.data.get('soru18cevap3')
    if(request.data.get('soru18cevap4')):
        anket.soru18cevap4=request.data.get('soru18cevap4')
    if(request.data.get('soru18cevap5')):
        anket.soru18cevap5=request.data.get('soru18cevap5')
    if(request.data.get('soru19cevap1')):
        anket.soru19cevap1=request.data.get('soru19cevap1')
    if(request.data.get('soru19cevap2')):
        anket.soru19cevap2=request.data.get('soru19cevap2')
    if(request.data.get('soru19cevap3')):
        anket.soru19cevap3=request.data.get('soru19cevap3')
    if(request.data.get('soru19cevap4')):
        anket.soru19cevap4=request.data.get('soru19cevap4')
    if(request.data.get('soru19cevap5')):
        anket.soru19cevap5=request.data.get('soru19cevap5')
    if(request.data.get('soru20cevap1')):
        anket.soru20cevap1=request.data.get('soru20cevap1')
    if(request.data.get('soru20cevap2')):
        anket.soru20cevap2=request.data.get('soru20cevap2')
    if(request.data.get('soru20cevap3')):
        anket.soru20cevap3=request.data.get('soru20cevap3')
    if(request.data.get('soru20cevap4')):
        anket.soru20cevap4=request.data.get('soru20cevap4')
    if(request.data.get('soru20cevap5')):
        anket.soru20cevap5=request.data.get('soru20cevap5')

    anket.save()

    return Response("update")
    
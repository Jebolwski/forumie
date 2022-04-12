from distutils.command.upload import upload
from sre_constants import CATEGORY
from unicodedata import category
from django.db import models
from django.contrib.auth.models import User

CATEGORY_CHOICES = (
    ("Spor","Spor"),
    ("MMA","MMA"),
    ("Diğer","Diğer"),
)







class Profil(models.Model):
    profil_foto = models.ImageField(upload_to="profil_foto",null=True,blank=True)
    arkaplan_foto = models.ImageField(upload_to="arkaplan_foto",null=True,blank=True)
    biyografi = models.CharField(max_length=160,null=True,blank=True)
    user = models.ForeignKey(User,on_delete=models.CASCADE,null=True,blank=True)
    username_slug = models.SlugField(max_length=200,null=True,blank=True)
    username = models.CharField(max_length=160,null=True,blank=True)
    olusturma     = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    guncelle      = models.DateTimeField(auto_now=True,blank=True, null=True)

    def __str__(self):
        return self.username_slug

class Forum(models.Model):
    profil        = models.ForeignKey(Profil,on_delete=models.CASCADE,null=True,blank=True)
    username      = models.CharField(max_length=160,null=False,blank=False)
    baslik        = models.CharField(max_length=160,null=False,blank=False)
    category      = models.CharField(max_length=10,choices=CATEGORY_CHOICES,null=False,blank=False)
    baslik_slug   = models.SlugField(unique=False,null=False,blank=False)
    soru          = models.CharField(max_length=700,null=False,blank=False)
    olusturma     = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    guncelle      = models.DateTimeField(auto_now=True,blank=True, null=True)

    def __str__(self):
        return str(self.baslik)

class ForumYanit(models.Model):
    username      = models.CharField(max_length=160,null=False,blank=False)
    profil        = models.ForeignKey(Profil,on_delete=models.CASCADE,null=False,blank=False)
    cevaba_cevap  = models.ForeignKey('self',on_delete=models.CASCADE,null=True,blank=True)
    forum         = models.ForeignKey(Forum,on_delete=models.CASCADE,null=True,blank=True)
    cevap         = models.CharField(max_length=700,null=False,blank=False)
    olusturma     = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    guncelle      = models.DateTimeField(auto_now=True,blank=True, null=True)

    def __str__(self):
        return str(self.cevap)
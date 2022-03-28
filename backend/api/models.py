from sre_constants import CATEGORY
from unicodedata import category
from django.db import models
from django.contrib.auth.models import User

CATEGORY_CHOICES = (
    ("Spor","Spor"),
    ("MMA","MMA"),
    ("Diğer","Diğer"),
)


class Forum(models.Model):
    user          = models.ForeignKey(User,on_delete=models.CASCADE,null=True,blank=True)
    username      = models.CharField(max_length=160,null=False,blank=False)
    baslik        = models.CharField(max_length=160,null=False,blank=False)
    category      = models.CharField(max_length=10,choices=CATEGORY_CHOICES,null=False,blank=False)
    baslik_slug   = models.SlugField(unique=True,null=False,blank=False)
    soru          = models.CharField(max_length=700,null=False,blank=False)
    olusturma     = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    guncelle      = models.DateTimeField(auto_now=True,blank=True, null=True)

    def __str__(self):
        return str(self.baslik)


class ForumYanit(models.Model):
    user          = models.ForeignKey(User,on_delete=models.CASCADE,null=False,blank=False)
    cevap         = models.CharField(max_length=700,null=False,blank=False)
    olusturma     = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    guncelle      = models.DateTimeField(auto_now=True,blank=True, null=True)

    def __str__(self):
        return str(self.cevap)
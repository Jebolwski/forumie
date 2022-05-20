from distutils.command.upload import upload
from sre_constants import CATEGORY
from unicodedata import category
from django.conf import settings
from django.db import models
from django.contrib.auth.models import User

#!Email password reset
from django.dispatch import receiver
from django.urls import reverse
from django_rest_passwordreset.signals import reset_password_token_created
from django.core.mail import send_mail  
CATEGORY_CHOICES = (
    ("Spor","Spor"),
    ("MMA","MMA"),
    ("Diğer","Diğer"),
)







class Profil(models.Model):
    profil_foto = models.FileField(default="",null=True,blank=True)
    arkaplan_foto = models.FileField(default="",null=True,blank=True)
    biyografi = models.CharField(max_length=160,default="",null=True,blank=True)
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
    baslik        = models.CharField(max_length=60,null=False,blank=False)
    baslik_slug   = models.SlugField(unique=False,null=False,blank=False)
    soru          = models.CharField(max_length=300,null=False,blank=False)
    olusturma     = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    guncelle      = models.DateTimeField(auto_now=True,blank=True, null=True)
    likes         = models.ManyToManyField(User,related_name='likes1',default=None,blank=True)
    dislikes      = models.ManyToManyField(User,related_name='dislikes1',default=None,blank=True)
    reforumie     = models.ManyToManyField(User,related_name='reforumie',default=None,blank=True)

    def __str__(self):
        return str(self.baslik)

class ForumYanit(models.Model):
    username      = models.CharField(max_length=160,null=False,blank=False)
    profil        = models.ForeignKey(Profil,on_delete=models.CASCADE,null=False,blank=False)
    cevaba_cevap  = models.ForeignKey('self',on_delete=models.CASCADE,null=True,blank=True)
    cevaba_cevap_profil_username  = models.CharField(max_length=160,null=True,blank=True)
    forum         = models.ForeignKey(Forum,on_delete=models.CASCADE,null=True,blank=True)
    cevap         = models.CharField(max_length=400,null=False,blank=False)
    olusturma     = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    guncelle      = models.DateTimeField(auto_now=True,blank=True, null=True)
    likes         = models.ManyToManyField(User,related_name='likes',default=None,blank=True)
    dislikes      = models.ManyToManyField(User,related_name='dislikes',default=None,blank=True)
    reforumie     = models.ManyToManyField(User,related_name='reforumie1',default=None,blank=True)

    def __str__(self):
        return str(self.cevap)

@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):

    email_plaintext_message = "Şifrenizi sıfırlamak için bu linke tıklayabilirsiniz http://localhost:3000/sifre-sifirla/{}/".format(reset_password_token.key)

    send_mail(
        # title:
        "Şifre değiştirme isteği",
        # message:
        email_plaintext_message,
        # from:
        settings.EMAIL_HOST_USER,
        # to:
        [reset_password_token.user.email]
    )
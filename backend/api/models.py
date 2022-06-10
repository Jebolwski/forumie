from distutils.command.upload import upload
from sre_constants import CATEGORY
from tkinter.tix import Tree
from unicodedata import category
from django.conf import settings
from django.db import models
from django.contrib.auth.models import User

#!Email password reset
from django.dispatch import receiver
from django.urls import reverse
from django_rest_passwordreset.signals import reset_password_token_created
from django.core.mail import send_mail  

CEVAP_CHOICES=(
    (1,1),
    (2,2),
    (3,3),
    (4,4),
    (5,5),
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


class AnketSoru(models.Model):
    baslik=models.CharField(null=False,blank=False,max_length=200)
    
    soru1=models.CharField(null=False,blank=False,max_length=200)
    soru1cevap1=models.CharField(null=False,blank=False,max_length=100)
    soru1cevap2=models.CharField(null=False,blank=False,max_length=100)
    soru1cevap3=models.CharField(null=True,blank=True,max_length=100)
    soru1cevap4=models.CharField(null=True,blank=True,max_length=100)
    soru1cevap5=models.CharField(null=True,blank=True,max_length=100)
    

    soru2=models.CharField(null=True,blank=True,max_length=200)
    soru2cevap1=models.CharField(null=True,blank=True,max_length=100)
    soru2cevap2=models.CharField(null=True,blank=True,max_length=100)
    soru2cevap3=models.CharField(null=True,blank=True,max_length=100)
    soru2cevap4=models.CharField(null=True,blank=True,max_length=100)
    soru2cevap5=models.CharField(null=True,blank=True,max_length=100)


    soru3=models.CharField(null=True,blank=True,max_length=200)
    soru3cevap1=models.CharField(null=True,blank=True,max_length=100)
    soru3cevap2=models.CharField(null=True,blank=True,max_length=100)
    soru3cevap3=models.CharField(null=True,blank=True,max_length=100)
    soru3cevap4=models.CharField(null=True,blank=True,max_length=100)
    soru3cevap5=models.CharField(null=True,blank=True,max_length=100)


    soru4=models.CharField(null=True,blank=True,max_length=200)
    soru4cevap1=models.CharField(null=True,blank=True,max_length=100)
    soru4cevap2=models.CharField(null=True,blank=True,max_length=100)
    soru4cevap3=models.CharField(null=True,blank=True,max_length=100)
    soru4cevap4=models.CharField(null=True,blank=True,max_length=100)
    soru4cevap5=models.CharField(null=True,blank=True,max_length=100)


    soru5=models.CharField(null=True,blank=True,max_length=200)
    soru5cevap1=models.CharField(null=True,blank=True,max_length=100)
    soru5cevap2=models.CharField(null=True,blank=True,max_length=100)
    soru5cevap3=models.CharField(null=True,blank=True,max_length=100)
    soru5cevap4=models.CharField(null=True,blank=True,max_length=100)
    soru5cevap5=models.CharField(null=True,blank=True,max_length=100)

    soru6=models.CharField(null=True,blank=True,max_length=200)
    soru6cevap1=models.CharField(null=True,blank=True,max_length=100)
    soru6cevap2=models.CharField(null=True,blank=True,max_length=100)
    soru6cevap3=models.CharField(null=True,blank=True,max_length=100)
    soru6cevap4=models.CharField(null=True,blank=True,max_length=100)
    soru6cevap5=models.CharField(null=True,blank=True,max_length=100)

    soru7=models.CharField(null=True,blank=True,max_length=200)
    soru7cevap1=models.CharField(null=True,blank=True,max_length=100)
    soru7cevap2=models.CharField(null=True,blank=True,max_length=100)
    soru7cevap3=models.CharField(null=True,blank=True,max_length=100)
    soru7cevap4=models.CharField(null=True,blank=True,max_length=100)
    soru7cevap5=models.CharField(null=True,blank=True,max_length=100)

    soru8=models.CharField(null=True,blank=True,max_length=200)
    soru8cevap1=models.CharField(null=True,blank=True,max_length=100)
    soru8cevap2=models.CharField(null=True,blank=True,max_length=100)
    soru8cevap3=models.CharField(null=True,blank=True,max_length=100)
    soru8cevap4=models.CharField(null=True,blank=True,max_length=100)
    soru8cevap5=models.CharField(null=True,blank=True,max_length=100)

    soru9=models.CharField(null=True,blank=True,max_length=200)
    soru9cevap1=models.CharField(null=True,blank=True,max_length=100)
    soru9cevap2=models.CharField(null=True,blank=True,max_length=100)
    soru9cevap3=models.CharField(null=True,blank=True,max_length=100)
    soru9cevap4=models.CharField(null=True,blank=True,max_length=100)
    soru9cevap5=models.CharField(null=True,blank=True,max_length=100)

    soru10=models.CharField(null=True,blank=True,max_length=200)
    soru10cevap1=models.CharField(null=True,blank=True,max_length=100)
    soru10cevap2=models.CharField(null=True,blank=True,max_length=100)
    soru10cevap3=models.CharField(null=True,blank=True,max_length=100)
    soru10cevap4=models.CharField(null=True,blank=True,max_length=100)
    soru10cevap5=models.CharField(null=True,blank=True,max_length=100)

    soru11=models.CharField(null=True,blank=True,max_length=200)
    soru11cevap1=models.CharField(null=True,blank=True,max_length=100)
    soru11cevap2=models.CharField(null=True,blank=True,max_length=100)
    soru11cevap3=models.CharField(null=True,blank=True,max_length=100)
    soru11cevap4=models.CharField(null=True,blank=True,max_length=100)
    soru11cevap5=models.CharField(null=True,blank=True,max_length=100)

    soru12=models.CharField(null=True,blank=True,max_length=200)
    soru12cevap1=models.CharField(null=True,blank=True,max_length=100)
    soru12cevap2=models.CharField(null=True,blank=True,max_length=100)
    soru12cevap3=models.CharField(null=True,blank=True,max_length=100)
    soru12cevap4=models.CharField(null=True,blank=True,max_length=100)
    soru12cevap5=models.CharField(null=True,blank=True,max_length=100)

    soru13=models.CharField(null=True,blank=True,max_length=200)
    soru13cevap1=models.CharField(null=True,blank=True,max_length=100)
    soru13cevap2=models.CharField(null=True,blank=True,max_length=100)
    soru13cevap3=models.CharField(null=True,blank=True,max_length=100)
    soru13cevap4=models.CharField(null=True,blank=True,max_length=100)
    soru13cevap5=models.CharField(null=True,blank=True,max_length=100)

    soru14=models.CharField(null=True,blank=True,max_length=200)
    soru14cevap1=models.CharField(null=True,blank=True,max_length=100)
    soru14cevap2=models.CharField(null=True,blank=True,max_length=100)
    soru14cevap3=models.CharField(null=True,blank=True,max_length=100)
    soru14cevap4=models.CharField(null=True,blank=True,max_length=100)
    soru14cevap5=models.CharField(null=True,blank=True,max_length=100)

    soru15=models.CharField(null=True,blank=True,max_length=200)
    soru15cevap1=models.CharField(null=True,blank=True,max_length=100)
    soru15cevap2=models.CharField(null=True,blank=True,max_length=100)
    soru15cevap3=models.CharField(null=True,blank=True,max_length=100)
    soru15cevap4=models.CharField(null=True,blank=True,max_length=100)
    soru15cevap5=models.CharField(null=True,blank=True,max_length=100)

    soru16=models.CharField(null=True,blank=True,max_length=200)
    soru16cevap1=models.CharField(null=True,blank=True,max_length=100)
    soru16cevap2=models.CharField(null=True,blank=True,max_length=100)
    soru16cevap3=models.CharField(null=True,blank=True,max_length=100)
    soru16cevap4=models.CharField(null=True,blank=True,max_length=100)
    soru16cevap5=models.CharField(null=True,blank=True,max_length=100)

    soru17=models.CharField(null=True,blank=True,max_length=200)
    soru17cevap1=models.CharField(null=True,blank=True,max_length=100)
    soru17cevap2=models.CharField(null=True,blank=True,max_length=100)
    soru17cevap3=models.CharField(null=True,blank=True,max_length=100)
    soru17cevap4=models.CharField(null=True,blank=True,max_length=100)
    soru17cevap5=models.CharField(null=True,blank=True,max_length=100)

    soru18=models.CharField(null=True,blank=True,max_length=200)
    soru18cevap1=models.CharField(null=True,blank=True,max_length=100)
    soru18cevap2=models.CharField(null=True,blank=True,max_length=100)
    soru18cevap3=models.CharField(null=True,blank=True,max_length=100)
    soru18cevap4=models.CharField(null=True,blank=True,max_length=100)
    soru18cevap5=models.CharField(null=True,blank=True,max_length=100)

    soru19=models.CharField(null=True,blank=True,max_length=200)
    soru19cevap1=models.CharField(null=True,blank=True,max_length=100)
    soru19cevap2=models.CharField(null=True,blank=True,max_length=100)
    soru19cevap3=models.CharField(null=True,blank=True,max_length=100)
    soru19cevap4=models.CharField(null=True,blank=True,max_length=100)
    soru19cevap5=models.CharField(null=True,blank=True,max_length=100)
    
    soru20=models.CharField(null=True,blank=True,max_length=200)
    soru20cevap1=models.CharField(null=True,blank=True,max_length=100)
    soru20cevap2=models.CharField(null=True,blank=True,max_length=100)
    soru20cevap3=models.CharField(null=True,blank=True,max_length=100)
    soru20cevap4=models.CharField(null=True,blank=True,max_length=100)
    soru20cevap5=models.CharField(null=True,blank=True,max_length=100)
    

class AnketCevap(models.Model):
    soru1cevap1=models.CharField(null=False,blank=False,choices=CEVAP_CHOICES,max_length=5)

    soru2cevap1=models.CharField(null=False,blank=False,choices=CEVAP_CHOICES,max_length=5)
    
    soru3cevap1=models.CharField(null=False,blank=False,choices=CEVAP_CHOICES,max_length=5)

    soru4cevap1=models.CharField(null=False,blank=False,choices=CEVAP_CHOICES,max_length=5)

    soru5cevap1=models.CharField(null=False,blank=False,choices=CEVAP_CHOICES,max_length=5)

    soru6cevap1=models.CharField(null=False,blank=False,choices=CEVAP_CHOICES,max_length=5)

    soru7cevap1=models.CharField(null=False,blank=False,choices=CEVAP_CHOICES,max_length=5)

    soru8cevap1=models.CharField(null=False,blank=False,choices=CEVAP_CHOICES,max_length=5)

    soru9cevap1=models.CharField(null=False,blank=False,choices=CEVAP_CHOICES,max_length=5)

    soru10cevap1=models.CharField(null=False,blank=False,choices=CEVAP_CHOICES,max_length=5)

    soru11cevap1=models.CharField(null=False,blank=False,choices=CEVAP_CHOICES,max_length=5)

    soru12cevap1=models.CharField(null=False,blank=False,choices=CEVAP_CHOICES,max_length=5)

    soru13cevap1=models.CharField(null=False,blank=False,choices=CEVAP_CHOICES,max_length=5)

    soru14cevap1=models.CharField(null=False,blank=False,choices=CEVAP_CHOICES,max_length=5)

    soru15cevap1=models.CharField(null=False,blank=False,choices=CEVAP_CHOICES,max_length=5)

    soru16cevap1=models.CharField(null=False,blank=False,choices=CEVAP_CHOICES,max_length=5)

    soru17cevap1=models.CharField(null=False,blank=False,choices=CEVAP_CHOICES,max_length=5)

    soru18cevap1=models.CharField(null=False,blank=False,choices=CEVAP_CHOICES,max_length=5)

    soru19cevap1=models.CharField(null=False,blank=False,choices=CEVAP_CHOICES,max_length=5)

    soru20cevap1=models.CharField(null=False,blank=False,choices=CEVAP_CHOICES,max_length=5)



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
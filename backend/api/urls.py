from django.urls import path,include
from . import views
from .views import MyTokenObtainPairView
from django.contrib.auth import views as authview
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.Routes),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),


    path('forum/<int:pk>/',views.ForumView,name="forum"),
    path('forum/<int:pk>/detay/',views.ForumDetayView,name="forum-detay"),
    path('forum-ekle/',views.ForumEkleView,name="forum-ekle"),
    path('forumlar/',views.ForumlarView,name="forumlar"),
    path('forumlar/hepsi/',views.AllForumlarView,name="forumlar-hepsi"),
    path('forum/cevap/',views.ForumCevapla,name="forumlar-cevapla"),
    path('forum/cevap/<int:pk>/sil/',views.ForumCevapSil,name="forumlar-cevapl-sil"),
    path('forum/<int:pk>/cevaplari/',views.ForumCevaplari,name="forumlar-cevaplari"),
    path('forumlarim/',views.KisininForumlariView,name="forumlarim"),
    path('forum/<int:pk>/goruldu/',views.ForumGoruldu,name="forum-goruldu"),
    path('forum/<int:pk>/begen/',views.ForumBegen,name="forum-begen"),
    path('forum/<int:pk>/begen/renk/',views.ForumBegenRenk,name="forum-begen-renk"),
    path('<int:pk>/reforumieleri/',views.KisiForumReforumieleri,name="reforumieleri"),

    path('forum/<int:pk>/reforumie/',views.ForumReforumie,name="forum-reforumie"),
    path('forum/<int:pk>/reforumie/renk/',views.ForumReforumieRenk,name="forum-reforumie-renk"),
    
    path('forum/cevap/<int:pk>/reforumie/',views.ForumCevapReforumie,name="forum-cevap-reforumie"),


    path('kayit-ol/',views.KayitOl,name="kayit"),
    path('profil/<slug:my_slug>/',views.ProfilView,name="profil"),
    path('profil/<slug:my_slug>/duzenle/',views.ProfilDuzenleView,name="profil-duzenle"),
    path('email-degistir/',views.EmailDegistir,name="email-degistir"),

    path('anket-ekle/',views.AnketEkle,name="anket-ekle"),
    path('anketler/',views.Anketler,name="anketler"),
    path('anket/<int:pk>/cevap-sayisi/',views.AnketCevapSayisi,name="anketler"),
    path('anket/<int:pk>/',views.AnketDetay,name="anket"),
    path('anket/<int:pk>/cevapla/',views.AnketCevapla,name="anket-cevapla"),
    path('anket/<int:pk>/analiz/',views.AnketAnaliz,name="anket-cevapla"),


    path('change_password/<int:pk>/', views.ChangePasswordView.as_view(), name='auth_change_password'),
    path('password_reset/', include('django_rest_passwordreset.urls', namespace='password_reset')),

]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
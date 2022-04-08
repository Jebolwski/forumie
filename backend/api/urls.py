from unicodedata import name
from django.urls import path
from . import views
from .views import MyTokenObtainPairView

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


urlpatterns = [
    path('', views.Routes),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('forum/<int:pk>/',views.ForumView,name="forum"),
    path('forum/<int:pk>/detay/',views.ForumDetayView,name="forum-detay"),
    path('forum-ekle/',views.ForumEkleView,name="forum-ekle"),
    path('forumlar/',views.ForumlarView,name="forumlar"),
    path('forumlar/mma/',views.ForumlarMMAView,name="forumlar-mma"),
    path('kayit-ol/',views.KayitOl,name="kayit"),
    path('profil/<slug:my_slug>/',views.ProfilView,name="profil"),
    path('forumlar/spor/',views.ForumlarSporView,name="forumlar-spor"),
    path('forumlarim/<slug:my_slug>/',views.KisininForumlariView,name="forumlarim"),
    path('email-degistir/',views.EmailDegistir,name="email-degistir"),
]
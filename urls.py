from django.contrib import admin
from django.urls import path,include
from django.shortcuts import render

def render_react(request):
    return render(request, "index.html")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', render_react),
    path('api/', include('api.urls')),
]

from django.contrib import admin


from .models import AnketSoru, Forum, ForumYanit, Profil
admin.site.register(Forum)
admin.site.register(ForumYanit)
admin.site.register(Profil)
admin.site.register(AnketSoru)

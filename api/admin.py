from django.contrib import admin


from .models import AnketCevap, AnketSoru, Forum, ForumYanit, Profil
admin.site.register(Forum)
admin.site.register(ForumYanit)
admin.site.register(Profil)
admin.site.register(AnketSoru)
admin.site.register(AnketCevap)

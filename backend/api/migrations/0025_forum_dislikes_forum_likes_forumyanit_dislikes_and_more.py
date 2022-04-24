# Generated by Django 4.0 on 2022-04-24 10:30

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0024_remove_forumyanit_url'),
    ]

    operations = [
        migrations.AddField(
            model_name='forum',
            name='dislikes',
            field=models.ManyToManyField(blank=True, default=None, related_name='dislikes1', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='forum',
            name='likes',
            field=models.ManyToManyField(blank=True, default=None, related_name='likes1', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='forumyanit',
            name='dislikes',
            field=models.ManyToManyField(blank=True, default=None, related_name='dislikes', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='forumyanit',
            name='likes',
            field=models.ManyToManyField(blank=True, default=None, related_name='likes', to=settings.AUTH_USER_MODEL),
        ),
    ]

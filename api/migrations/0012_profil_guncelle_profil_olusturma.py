# Generated by Django 4.0 on 2022-04-06 15:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_remove_forum_user_remove_forumyanit_user_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='profil',
            name='guncelle',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
        migrations.AddField(
            model_name='profil',
            name='olusturma',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]
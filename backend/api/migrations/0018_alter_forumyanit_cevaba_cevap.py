# Generated by Django 4.0 on 2022-04-12 13:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0017_forumyanit_cevaba_cevap'),
    ]

    operations = [
        migrations.AlterField(
            model_name='forumyanit',
            name='cevaba_cevap',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.forumyanit'),
        ),
    ]
# Generated by Django 3.2.5 on 2021-07-16 14:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('foodAPI', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='dishinfo',
            name='origen',
            field=models.TextField(default='', max_length=500),
        ),
    ]

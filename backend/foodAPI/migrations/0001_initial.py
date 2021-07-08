# Generated by Django 3.2.5 on 2021-07-08 14:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DishInfo',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.TextField(max_length=500)),
                ('unit_price', models.IntegerField()),
                ('ingredients', models.TextField(max_length=500)),
                ('food_description', models.TextField(default='', max_length=500)),
                ('image', models.TextField()),
            ],
        ),
    ]

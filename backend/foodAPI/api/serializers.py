from rest_framework import serializers
from foodAPI.models import DishInfo
from django import forms

class DishInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = DishInfo
        #fields = ['id', 'name', 'unit_price', 'ingredients', 'image']
        fields = "__all__"

class PostDishSerilizer(serializers.ModelSerializer):
    class Meta:
        model = DishInfo
        fields =  "__all__"

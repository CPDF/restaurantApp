from rest_framework import serializers
from tipAPI.models import TipInfo
from django import forms

class TipInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipInfo
        #fields = ['id', 'name', 'unit_price', 'ingredients', 'image']
        fields = "__all__"

class PostDishSerilizer(serializers.ModelSerializer):
    class Meta:
        model = TipInfo
        fields =  "__all__"

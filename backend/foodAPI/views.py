from django.shortcuts import render
from rest_framework.serializers import Serializer
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import DishInfo
from foodAPI.api.serializers import DishInfoSerializer

# Create your views here.
class StockList(APIView):
    def get(self, request, *args, **kwargs):
        query_set = DishInfo.objects.all()
        serializer =  DishInfoSerializer(query_set, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = DishInfoSerializer(data=request.data)
        if (serializer.is_valid()):
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
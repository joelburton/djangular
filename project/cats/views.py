from django.shortcuts import render
from django.views import generic

from rest_framework import viewsets
from rest_framework import serializers

from .models import Cat


class HomepageView(generic.TemplateView):
    template_name = "cats/homepage.html"


class CatSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Cat
        fields = ['id', 'name', 'iq', 'url']


class CatViewSet(viewsets.ModelViewSet):
    queryset = Cat.objects.all()
    serializer_class = CatSerializer

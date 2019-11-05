from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, mixins
from .models import Folder
from .serializers import FolderSerializer

class FolderViewSet(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = Folder.objects.all()
    serializer_class = FolderSerializer

    #def perform_create(self, serializer):
    #    serializer.save(owner=self.request.user)

class FolderSelfViewSet(viewsets.ModelViewSet):
  queryset = Folder.objects.all()
  serializer_class = FolderSerializer

  def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

  def get_queryset(self):
    queryset = super(FolderSelfViewSet, self).get_queryset()
    return queryset.filter(owner=self.request.user)
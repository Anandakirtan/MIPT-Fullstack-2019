from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, mixins
from .models import Task
from .serializers import TaskSerializer

class TaskViewSet(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class TaskSelfViewSet(viewsets.ModelViewSet):
  queryset = Task.objects.all()
  serializer_class = TaskSerializer

  def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

  def get_queryset(self):
    queryset = super(TaskSelfViewSet, self).get_queryset()
    return queryset.filter(owner=self.request.user)
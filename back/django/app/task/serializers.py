from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Task
        fields = ('id', 'name', 'description', 'deadline')
        #read_only_fields = ('owner', )
from rest_framework import serializers
from .models import Folder
from task.serializers import TaskSerializer

class FolderSerializer(serializers.ModelSerializer):
    task_set = TaskSerializer(many=True, read_only=True)

    class Meta:
        model = Folder
        fields = ('id', 'name', 'owner', 'task_set')
        read_only_fields = ('owner', )
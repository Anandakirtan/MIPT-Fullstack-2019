# Generated by Django 2.2.6 on 2019-10-28 16:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='folder',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='folder.Folder'),
        ),
    ]

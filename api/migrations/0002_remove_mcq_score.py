# Generated by Django 4.2.6 on 2023-10-15 05:09

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="mcq",
            name="score",
        ),
    ]

# Generated by Django 4.2.6 on 2023-10-14 12:41

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0002_rename_file_studysession_pdf_file"),
    ]

    operations = [
        migrations.AddField(
            model_name="assessment",
            name="session_id",
            field=models.CharField(default="", max_length=1000),
        ),
    ]
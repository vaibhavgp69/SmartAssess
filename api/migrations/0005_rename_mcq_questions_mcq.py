# Generated by Django 4.2.6 on 2023-10-14 18:13

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0004_remove_assessment_easy_questions_and_more"),
    ]

    operations = [
        migrations.RenameModel(
            old_name="Mcq_questions",
            new_name="Mcq",
        ),
    ]
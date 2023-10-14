# Generated by Django 4.2.6 on 2023-10-14 20:20

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0005_rename_mcq_questions_mcq"),
    ]

    operations = [
        migrations.AlterField(
            model_name="assessment",
            name="score",
            field=models.DecimalField(decimal_places=2, max_digits=4),
        ),
        migrations.AlterField(
            model_name="mcq",
            name="difficulty_score",
            field=models.DecimalField(decimal_places=2, max_digits=4),
        ),
    ]
# Generated by Django 4.2.6 on 2023-10-15 06:23

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0002_remove_mcq_score"),
    ]

    operations = [
        migrations.AlterField(
            model_name="assessment",
            name="score",
            field=models.DecimalField(decimal_places=2, default=0, max_digits=4),
        ),
    ]

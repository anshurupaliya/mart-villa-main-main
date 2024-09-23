# Generated by Django 5.1 on 2024-09-13 19:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Properties',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('location', models.CharField(max_length=200)),
                ('price', models.IntegerField()),
                ('distance', models.CharField(max_length=200)),
                ('purpose', models.CharField(choices=[('S', 'Sell'), ('R', 'Rent')], max_length=1)),
                ('number_of_beds', models.IntegerField()),
                ('number_of_bathrooms', models.IntegerField()),
                ('contact', models.IntegerField()),
                ('dimensions', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('image', models.ImageField(upload_to='media/property')),
            ],
        ),
    ]
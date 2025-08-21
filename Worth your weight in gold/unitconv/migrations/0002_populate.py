from django.db import migrations

def populate_db(apps, schema_editor):
    Conversion = apps.get_model('unitconv', 'Conversion')

    troy_ounce = Conversion(number=1, unit='t_oz').save()
    ton = Conversion(number=32150.7, unit='T').save()
    gram = Conversion(number=0.0321507466, unit='g').save()
    kilogram = Conversion(number=32.1507466, unit='kg').save()
    pound = Conversion(number=14.5833333, unit='lb').save()
    ounce = Conversion(number=1.09714286, unit='oz').save()

class Migration(migrations.Migration):

    dependencies = [
        ('unitconv', '0003_initial'),
    ]

    operations = [
        migrations.RunPython(populate_db),
    ]
        
        

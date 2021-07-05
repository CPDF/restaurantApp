from django.db import models

class DishInfo(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.TextField(max_length=500, null=False, blank=False)
    unit_price = models.IntegerField()
    ingredients = models.TextField(null=False, blank=False)
    image = models.TextField(null=False, blank=False)

    def __str__(self):
        return self.name
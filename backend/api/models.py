from django.db import models

class Properties(models.Model):
    ch1 = {
        "S": "Sell",
        "R": "Rent",
    }
    
    name=models.CharField(max_length=200)
    location=models.CharField(max_length=200)
    price=models.IntegerField()
    distance=models.CharField(max_length=200)
    purpose=models.CharField(max_length=1,choices=ch1)
    number_of_beds=models.IntegerField()
    number_of_bathrooms=models.IntegerField()
    contact=models.IntegerField()
    dimensions=models.CharField(max_length=50)
    description=models.TextField()
    image=models.ImageField(upload_to='properties/')
    
    def __str__(self):
        return self.name
    
class Testemonials(models.Model):
    name=models.CharField(max_length=100)
    role=models.CharField(max_length=100)
    image=models.ImageField(upload_to='testemonials/')
    reviewText=models.TextField()
    
    def __str__(self):
        return self.name
    
class Authors(models.Model):
    name=models.CharField(max_length=100)
    avatar=models.ImageField(upload_to='authors/')
    
    def __str__(self):
        return self.name
    
class Feeds(models.Model):
    ch1 = {
        "I": "Interior",
        "A": "Archetecture",
    }
    
    title=models.CharField(max_length=100)
    date_posted=models.DateField(auto_now=False, auto_now_add=False)
    image=models.ImageField(upload_to='feeds/')
    category=models.CharField(max_length=1,choices=ch1)
    description=models.TextField()
    author=models.ForeignKey(Authors,on_delete=models.CASCADE)
    
    def __str__(self):
        return self.title
    
class Roles(models.Model):
    role=models.CharField(max_length=100)
    
    def __str__(self):
        return self.role

class TeamMembers(models.Model):
    name=models.CharField(max_length=100)
    role=models.ForeignKey(Roles,on_delete=models.CASCADE)
    image=models.ImageField(upload_to='teammembers/')
    
    def __str__(self):
        return self.name
    
class Projects(models.Model):
    name=models.CharField(max_length=100)
    number=models.IntegerField()
    image=models.ImageField(upload_to='teammembers/')
    
    def __str__(self):
        return self.name
    
class Categories(models.Model):
    name=models.CharField(max_length=100)
    number=models.IntegerField()
    image=models.ImageField(upload_to='teammembers/')
    
    def __str__(self):
        return self.name
    
class PropertyTypes(models.Model):
    name=models.CharField(max_length=100)
    number=models.IntegerField()
    
    def __str__(self):
        return self.name
    
class Ratings(models.Model):
    image=models.ImageField(upload_to='ratings/')
    rating=models.IntegerField()
    name=models.CharField(max_length=100)
    price=models.CharField(max_length=100)
    
    def __str__(self):
        return self.name
    
class Faqs(models.Model):
    question=models.TextField()
    response=models.TextField()
    
    def __str__(self):
        return self.question
    
    
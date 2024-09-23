from rest_framework import serializers
from .models import Properties,Testemonials,Authors,Feeds,Roles,TeamMembers,Projects,Categories,PropertyTypes,Ratings,Faqs

class PropertiesSerializer(serializers.ModelSerializer):
    class Meta:
        model=Properties
        fields=('id','name','location','price','distance','purpose','number_of_beds','number_of_bathrooms'
                ,'contact','dimensions','description','image')
        
class TestemonialsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Testemonials
        fields=('id','name','role','image','reviewText')
        
class AuthorsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Authors
        fields=('id','name','avatar')
        
class FeedsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Feeds
        fields=('id','title','date_posted','image','category','description','author')
        
class RolesSerializer(serializers.ModelSerializer):
    class Meta:
        model=Roles
        fields=('id','roles')
        
class TeamMembersSerializer(serializers.ModelSerializer):
    class Meta:
        model=TeamMembers
        fields=('id','name','role','image')
        
class ProjectssSerializer(serializers.ModelSerializer):
    class Meta:
        model=Projects
        fields=('id','name','number','image')
        
class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model=Categories
        fields='__all__'
        
class PropertyTypesSerializer(serializers.ModelSerializer):
    class Meta:
        model=PropertyTypes
        fields='__all__'
        
class RatingsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Ratings
        fields='__all__'
        
class FaqsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Faqs
        fields='__all__'
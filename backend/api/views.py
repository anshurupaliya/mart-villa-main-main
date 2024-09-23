from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Properties,Testemonials,Authors,Feeds,Roles,TeamMembers,Projects,Categories,PropertyTypes,Ratings,Faqs
from .serializers import PropertiesSerializer,TestemonialsSerializer,AuthorsSerializer,FeedsSerializer,RolesSerializer,TeamMembersSerializer,ProjectssSerializer,CategoriesSerializer,PropertyTypesSerializer,RatingsSerializer,FaqsSerializer
import json



@api_view(['GET'])
def get_properties(request):
    properties=Properties.objects.all()
    serializer=PropertiesSerializer(properties,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_testemonials(request):
    testemonials=Testemonials.objects.all()
    serializer=TestemonialsSerializer(testemonials,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_authors(request):
    authors=Authors.objects.all()
    serializer=AuthorsSerializer(authors,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_feeds(request):
    feeds=Feeds.objects.all()
    serializer=FeedsSerializer(feeds,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_roles(request):
    roles=Roles.objects.all()
    serializer=RolesSerializer(roles,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_teamMembers(request):
    teamMembers=TeamMembers.objects.all()
    serializer=TeamMembersSerializer(teamMembers,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_projects(request):
    projects=Projects.objects.all()
    serializer=TeamMembersSerializer(projects,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_categories(request):
    categories=Categories.objects.all()
    serializer=CategoriesSerializer(categories,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_propertyTypes(request):
    propertyTypes=PropertTypes.objects.all()
    serializer=ProperTypesSerializer(propertyTypes,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_ratings(request):
    ratings=Ratings.objects.all()
    serializer=RatingsSerializer(ratings,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_faqs(request):
    faqs=Faqs.objects.all()
    serializer=FaqsSerializer(faqs,many=True)
    return Response(serializer.data)
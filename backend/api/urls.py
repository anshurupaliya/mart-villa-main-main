from django.urls import path
from .views import get_properties,get_testemonials,get_authors,get_feeds,get_roles,get_teamMembers,get_projects,get_categories,get_propertyTypes,get_ratings,get_faqs

urlpatterns = [
    path('properties/',get_properties,name='get_properties'),
    path('testemonials/',get_testemonials,name='get_testemonials'),
    path('authors/',get_authors,name='get_authors'),
    path('feeds/',get_feeds,name='get_feeds'),
    path('roles/',get_roles,name='get_roles'),
    path('teamMembers/',get_teamMembers,name='get_teamMembers'),
    path('categories/',get_categories,name='get_categories'),
    path('propertyTypes/',get_propertyTypes,name='get_propertyTypes'),
    path('ratings/',get_ratings,name='get_ratings'),
    path('faqs/',get_faqs,name='get_faqs'),

]

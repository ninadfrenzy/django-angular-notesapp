from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path('', views.crudtest),
    path('save', views.savenote),
    path('notes', views.get_all_notes),
    path('delete', views.delete_note)

    
]

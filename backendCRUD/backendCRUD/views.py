from django.http import JsonResponse
from django.shortcuts import render

def test(request):
    return JsonResponse({'backend':'works'})
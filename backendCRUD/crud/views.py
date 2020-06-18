from django.shortcuts import render
from django.http import JsonResponse
import json
from .models import Note
# Create your views here.
def crudtest(request):
    return JsonResponse({'app':'works'})

def savenote(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    u = Note(**body)
    u.save()
    return JsonResponse({"result": "OK"})

def get_all_notes(request):
    notes = Note.objects.all()
    
    noteArr = []
    for note in notes:
        notedict = {}
        notedict['id'] = note.note_id
        notedict['text'] = note.note_text
        noteArr.append(notedict)
    return JsonResponse({"notes": noteArr})
def delete_note(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    note_id_del = body['note_id']
    Note.objects.filter(note_id=note_id_del).delete()
    return JsonResponse({"status": "OK"})
    
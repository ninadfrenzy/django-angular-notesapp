import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getNotes();
  }
  getNotes() {
    const noteprop = 'notes';
    this.http.get('//127.0.0.1:8000/crudapp/notes')
    .subscribe(data => {
      if (data.hasOwnProperty('notes')) {
        this.notes = data[noteprop];
      }
    });
  }
  deleteNote(id) {
    this.http.post('//127.0.0.1:8000/crudapp/delete', {note_id: id})
    .subscribe(data => {
      console.log(data);
      this.getNotes();
    });
  }
}

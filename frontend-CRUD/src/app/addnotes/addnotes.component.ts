import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnotes',
  templateUrl: './addnotes.component.html',
  styleUrls: ['./addnotes.component.css']
})
export class AddnotesComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {

  }
  title = 'frontend-CRUD';
  noteText = '';
  noteId: number;
  ngOnInit(): void {
    if (localStorage.getItem('noteCount')) {
      this.noteId = JSON.parse(localStorage.getItem('noteCount')).noteId;
    }
    else {
      this.noteId = 1;
    }
  }
  saveNote() {
    this.http.post('//127.0.0.1:8000/crudapp/save', { note_text: this.noteText, note_id: this.noteId},
    ).subscribe(data => {
      console.log(data);
      this.noteId = this.noteId + 1;
      this.noteText = '';
    });
  }
  showAllNotes() {
    localStorage.setItem('noteCount', JSON.stringify({noteId: this.noteId}));
    this.router.navigateByUrl('notes');
  }



}
